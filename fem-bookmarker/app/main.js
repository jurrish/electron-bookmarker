const { app, BrowserWindow} = require('electron');

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
  //devtron opens up a set up tools in chrome develoepr console that looks at the event listeners and audits things.
  //is my app accessible?
  //need to npm install it
  //can install React devtools! or Ng-Inspector. ETC
  require('devtron').install();
});
