import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('video')
const play: HTMLElement = document.getElementById('play')
const mute: HTMLElement = document.getElementById('mute')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()]})
play.onclick = () => player.togglePlay()
mute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.error(err.message)
    })
}

