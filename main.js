const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 400,
    height: 600,
    title: "DeepRadio!",
    icon: "favicon.ico"
  });

  win.loadURL('https://deepradio.co.uk');

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
