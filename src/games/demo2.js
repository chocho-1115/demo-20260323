import { Graphics } from 'pixi.js'

export function createDemo2(app) {
  const graphics = new Graphics()
    .rect(-50, -50, 100, 100)
    .fill(0xff0000)
  
  graphics.x = app.screen.width / 2
  graphics.y = app.screen.height / 2
  
  app.stage.addChild(graphics)
}
