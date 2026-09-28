const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("musicLibrary", {
    chooseFolder: () => ipcRenderer.invoke("choose-music-folder")
});