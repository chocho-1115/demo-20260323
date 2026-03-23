import './style.css'
import { initHeroCanvas } from './hero.js'

async function loadGame(gameName) {
  await initHeroCanvas(gameName)
  
  document.querySelectorAll('.game-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.game === gameName)
  })
}

const urlParams = new URLSearchParams(window.location.search)
const initialGame = urlParams.get('game') || 'demo1'
await initHeroCanvas(initialGame)

document.querySelectorAll('.game-btn').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.game === initialGame)
  btn.addEventListener('click', () => {
    const game = btn.dataset.game
    loadGame(game)
  })
})
