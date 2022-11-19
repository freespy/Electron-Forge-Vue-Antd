'use strict'

const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
import initIpcEvent from "./modules/ipcEvent";

const logger = require('electron-log');
logger.transports.file.level = "info"
logger.transports.console.level = true;
// logger.transports.file.maxSize = 1002430 // 10M
// logger.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}';
// let date = new Date();
// date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
// logger.transports.file.file = app.getPath('userData') + '\\logs\\' + date + '.log';

Object.assign(console, logger.functions);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}
let mainWindow = null;
async function createWindow() {
    // Create the browser window.
    global.mainWindow = mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        title: "Electron Forge Vue Project",
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            webSecurity: false,
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false,
            nativeWindowOpen: true,
            devTools: true,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    initIpcEvent();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    createWindow();
    globalShortcut.register('ctrl+F12', function() {
        if (mainWindow.webContents.isDevToolsOpened()) {
            mainWindow.webContents.closeDevTools()
        } else {
            mainWindow.webContents.openDevTools()
        }
    })
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.