const { ipcMain, remote, dialog, app, BrowserWindow, shell, net } = require("electron");
export default function() {
    ipcMain.on('do-a-thing', async (event, data) => {
        console.log('do-a-thing', data)
    })
}