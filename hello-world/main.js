const electron = require('electron')
const path = require('path')
const url = require('url')
const platform = process.platform
const { app, BrowserWindow } = electron

let win

function createWindow() {
  win = new BrowserWindow()
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file', // serving a file and not http
      slashes: true,
    }),
  )
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (platform === 'darwin' && win === null) {
    createWindow()
  }
})
