import  { BrowserWindow } from "electron";
const loadDevtool = require('electron-load-devtool');

let win;
function createWindow() {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/../../index.html`);

    loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
    win.openDevTools();

    win.on("closed",() => {
        win = null;
    });    
}

export default createWindow;