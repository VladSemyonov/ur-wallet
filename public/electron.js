const { app, BrowserWindow } = require('electron')
const path = require ('path');
const url = require ('url');

const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
});

function createWindow () {
    const win = new BrowserWindow({
        width: 1100,
        height: 790,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(startUrl)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})