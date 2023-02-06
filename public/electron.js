const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
let win = BrowserWindow;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1500,
    height: 880,
    minWidth: 1500,
    minHeight: 880,
    maxWidth: 1501,
    maxHeight: 880,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  win.webContents.openDevTools({ mode: "detach" });
});
app.on("window-all-closed", () => {
  app.quit();
});
