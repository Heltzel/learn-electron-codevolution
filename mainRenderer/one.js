console.log('from one.js outside')

const { remote } = require('electron')
const { BrowserWindow } = remote

const path = require('path')
const url = require('url')

const newWindowBtn = document.getElementById('newWindowBtn')
newWindowBtn.addEventListener('click', function (event) {
  let winThree = new BrowserWindow({ width: 600, height: 400 })
  winThree.loadURL(
    url.format({
      pathname: path.join(__dirname, '../pages/three.html'),
      protocol: 'file:',
      slashes: true,
    }),
  )
  winThree.webContents.openDevTools()
})
