const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		icon: __dirname + 'app/resource/icon.png'
	});

	mainWindow.loadURL('file://' + __dirname + '/app/index.html');

	if(process.argv[2] && process.argv[2].toString().toLowerCase().trim() == 'dev') {
		mainWindow.webContents.openDevTools();
	}

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

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