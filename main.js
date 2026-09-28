const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("node:path");

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
});
