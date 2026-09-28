const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("musicLibrary", {
    chooseFolder: () => ipcRenderer.invoke("choose-music-folder"),
    loadSavedTracks: () => ipcRenderer.invoke("load-saved-music"),
    onChangeMusicFolder: (callback) =>
    ipcRenderer.on("request-change-music-folder", () => callback()),
    onSetVolume: (callback) =>
    ipcRenderer.on("set-volume", (_event, level) => callback(level))
});