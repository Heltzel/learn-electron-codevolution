console.log('from MAIN.js')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let winOne, winTwo

function createWindow() {
  winOne = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  })

  winOne.webContents.openDevTools()
  winOne.loadURL(
    url.format({
      pathname: path.join(__dirname, './pages/one.html'),
      protocol: 'file:',
      slashes: true,
    }),
  )
  winOne.on('closed', () => {
    win = null
  })

  winTwo = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  })
  winTwo.webContents.openDevTools()
  winTwo.loadURL(
    url.format({
      pathname: path.join(__dirname, 'pages/two.html'),
      protocol: 'file:',
      slashes: true,
    }),
  )
  winTwo.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
