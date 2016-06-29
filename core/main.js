const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

exports.run = function() {
    let mainWindow;
    var createWindow = function() {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            icon: require('../common/global').iconDir
        });

        mainWindow.loadURL('file://' + __dirname + '/../viewer/index.html');

        if(process.argv[2] && process.argv[2].toString().toLowerCase().trim() == 'dev') {
            mainWindow.webContents.openDevTools();
        }

        mainWindow.on('closed', function () {
            mainWindow = null;
        });

        require('./menu').createMenu();
    };

    app.on('ready', createWindow);

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow();
        }
    });
};