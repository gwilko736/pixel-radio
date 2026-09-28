const { app, BrowserWindow, ipcMain, dialog, Menu } = require("electron");
const path = require("node:path");
const { readdir, readFile, writeFile } = require("node:fs/promises");
const { pathToFileURL } = require("node:url");

async function scanMusicFolder(folder) {
    const names = await readdir(folder);

    return names
        .filter((name) => /\.mp3$/i.test(name))
        .map((name) => ({
            title: path.parse(name).name,
            artist: "Unknown artist",
            src: pathToFileURL(path.join(folder, name)).href
        }));
}

ipcMain.handle("choose-music-folder", async () => {
    const result = await dialog.showOpenDialog({
        properties: ["openDirectory"]
    });

    if (result.canceled) {
        return [];
    }

    const folder = result.filePaths[0];
    const settingsPath = path.join(app.getPath("userData"), "settings.json");

await writeFile(
    settingsPath,
    JSON.stringify({ musicFolder: folder }, null, 2),
    "utf8"
);
    return scanMusicFolder(folder);
});

ipcMain.handle("load-saved-music", async () => {
    const settingsPath = path.join(app.getPath("userData"), "settings.json");

    try {
        const settings = JSON.parse(
            await readFile(settingsPath, "utf8")
        );

        return await scanMusicFolder(settings.musicFolder);
    } catch {
        return [];
    }
});

app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    window.loadFile(path.join(__dirname, "index.html"));
    window.webContents.on("context-menu", () => {
    const menu = Menu.buildFromTemplate([
        {
    label: "Change music folder",
    click: () => window.webContents.send("request-change-music-folder")
},

{
    label: "Volume",
    submenu: [
        {
            label: "25%",
            click: () => window.webContents.send("set-volume", 0.25)
        },
        {
            label: "50%",
            click: () => window.webContents.send("set-volume", 0.5)
        },
        {
            label: "75%",
            click: () => window.webContents.send("set-volume", 0.75)
        },
        {
            label: "100%",
            click: () => window.webContents.send("set-volume", 1)
        }
    ]
},

{
    type: "separator"
},
        {
            label: "Close widget",
            role: "close"
        }
    ]);

    menu.popup({ window });
});
});
