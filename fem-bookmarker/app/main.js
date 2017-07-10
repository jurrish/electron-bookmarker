const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    length: 600,
    show: false,
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.loadURL(`file://$${__dirname}/index.html`);
});
