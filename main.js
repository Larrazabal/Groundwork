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
		mainWindow = null;
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
	/*{
		label: "File",
		submenu: [
			{
				label: "New",
				accelerator: process.platform == "darwin" ? "Command+N" : "Ctrl+N",
				click() {
					$(".main-header").show();
				}
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
				label: "Save As",
				accelerator: process.platform == "darwin" ? "Command+Shift+S" : "Ctrl+Shift+S"
			},
			{
				type: "separator"
			},
			{
				label: "Exit",
				accelerator: process.platform == "darwin" ? "Command+W" : "Ctrl+W",
				click() {
					app.quit();
				}
			}
		]
	},
	{
		label: "Edit",
		submenu: [
			{
				label: "Cut",
				accelerator: process.platform == "darwin" ? "Command+X" : "Ctrl+X"
			},
			{
				label: "Copy",
				accelerator: process.platform == "darwin" ? "Command+C" : "Ctrl+C"
			},
			{
				label: "Paste",
				accelerator: process.platform == "darwin" ? "Command+V" : "Ctrl+V"
			}
		]
	},
	{
		label: "Settings",
		submenu: [
			{
				label: "Toggle Tasks",
				accelerator: process.platform == "darwin" ? "Command+1" : "Ctrl+1",
			},
			{
				label: "Toggle To Do",
				accelerator: process.platform == "darwin" ? "Command+2" : "Ctrl+2",
			},
			{
				label: "Toggle Notes",
				accelerator: process.platform == "darwin" ? "Command+3" : "Ctrl+3",
			},
			{
				label: "Toggle Done",
				accelerator: process.platform == "darwin" ? "Command+4" : "Ctrl+4",
			},
			{
				type: "separator"
			},
			{
				label: "Change Project Name"
			}
		]
	},*/
	{
		label: "Developer",
		submenu: [
			{
				label: "Open Console",
				accelerator: process.platform == "darwin" ? "F12" : "F12",
				click() {
					mainWindow.webContents.openDevTools();
				}
			},
			{
				label: "Reload",
				accelerator: process.platform == "darwin" ? "Command+R" : "Ctrl+R",
				click() {
					mainWindow.reload();
				}
			}
		]
	}
];
