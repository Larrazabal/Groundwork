const electron = require("electron");
const path = require("path");
const url = require("url");

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

/* Run createWindow when app is ready*/
app.on("ready", function() {
	/* Create Browser Window*/
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	/* Load mainWindow.html */
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "mainWindow.html"),
		protocol: "file:",
		slashes: true
	}));

	mainWindow.on("closed", () => {
		win = null;
	});

	/* Build Menu */
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	/* Insert Menu */
	Menu.setApplicationMenu(mainMenu);

});

/* Quit when all windows are closed */
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

/* Create Menu Template */
const mainMenuTemplate = [
	{
		label: "File",
		submenu: [
			{
				label: "New",
				accelerator: process.platform == "darwin" ? "Command+N" : "Ctrl+N"
			},
			{
				label: "Open File",
				accelerator: process.platform == "darwin" ? "Command+O" : "Ctrl+O"
			},
			{
				label: "Save",
				accelerator: process.platform == "darwin" ? "Command+S" : "Ctrl+S"
			},
			{
				label: "Exit",
				accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
				click() {
					app.quit();
				}
			}
		]
	}
];
