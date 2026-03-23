import { Application } from 'pixi.js'
import { createDemo1 } from './games/demo1.js'
import { createDemo2 } from './games/demo2.js'
import { createDemo3 } from './games/demo3.js'

const ASPECT_RATIO = 1920 / 750

const GAME_LOADERS = {
  demo1: createDemo1,
  demo2: createDemo2,
  demo3: createDemo3,
}

function getCanvasHeight() {
  return window.innerWidth / ASPECT_RATIO
}

let currentApp = null

export async function initHeroCanvas(gameName = 'demo1') {
  const canvas = document.getElementById('hero-canvas')
  
  if (currentApp) {
    currentApp.stage.removeChildren()
    const loader = GAME_LOADERS[gameName] || GAME_LOADERS.demo1
    loader(currentApp)
    return currentApp
  }
  
  const app = new Application()
  
  await app.init({
    canvas,
    width: window.innerWidth,
    height: getCanvasHeight(),
    backgroundColor: 0x000000,
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
  })
  
  const loader = GAME_LOADERS[gameName] || GAME_LOADERS.demo1
  loader(app)
  
  currentApp = app
  
  return app
}
