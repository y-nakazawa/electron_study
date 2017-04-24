const { app, BrowserWindow } = require("electron");
let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    console.log("abx");
    win.loadURL(`file://${__dirname}/index.html`);
    win.on("closed",() => {win = null;});
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "drawin") {
        app.quit();
    }
});
app.on("active", () => {
    if (win === null) {
        createWindow();
    }
});
