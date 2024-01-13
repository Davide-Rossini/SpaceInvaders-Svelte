import './app.css'
import App from './App.svelte'
import Enemy from '../src/components/Enemy.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
