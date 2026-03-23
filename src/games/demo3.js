import { Graphics } from 'pixi.js'

export function createDemo3(app) {
  const graphics = new Graphics()
    .poly([0, -50, -43, 25, 43, 25])
    .fill(0x00ff00)
  
  graphics.x = app.screen.width / 2
  graphics.y = app.screen.height / 2
  
  app.stage.addChild(graphics)
}
