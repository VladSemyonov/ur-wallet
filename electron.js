const {app, BrowserWindow} = require('electron')
const path = require ('path');
const url = require ('url');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 1100,
        height: 790,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('index.html')

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(startUrl);
    mainWindow.loadURL('http://localhost:3000');

    // Отображаем средства разработчика.
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})