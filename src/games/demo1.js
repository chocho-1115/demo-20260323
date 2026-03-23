import { Graphics } from 'pixi.js'

export function createDemo1(app) {
  const graphics = new Graphics()
    .circle(0, 0, 50)
    .fill(0xffffff)
  
  graphics.x = app.screen.width / 2
  graphics.y = app.screen.height / 2
  
  app.stage.addChild(graphics)
}
