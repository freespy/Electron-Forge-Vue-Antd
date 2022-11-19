console.log('This is a preload-scripts.')
const { contextBridge, ipcRenderer, remote } = require('electron');
const path = require('path');
const fs = require('fs');

window.addEventListener('online', function() {
    console.log('在线');
    ipcRenderer.send('network-status', true);
});

window.addEventListener('offline', function() {
    console.log('离线');
    ipcRenderer.send('network-status', false);
});

window.API = {
    doThing: (args) => {
        ipcRenderer.send('do-a-thing', args);
    }
}