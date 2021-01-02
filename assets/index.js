const video = document.querySelector('video')
const button = document.querySelector('button')

class MediaPlayer {
    constructor(config){
        this.media = config.el
    }

    play(){
        this.media.play()
    }

    pause(){
        this.media.pause()
    }

    togglePlay(){
        this.media.paused ? this.play() : this.pause()
    } 
}

const player = new MediaPlayer({ el: video })
button.onclick = () => player.togglePlay()

// function MediaPlayer(config) {
//     this.media = config.el
// }

// MediaPlayer.prototype.play = () => {
//     this.media.play()
// }

// MediaPlayer.prototype.pause = () => {
//     this.media.pause ? this.media.play() : this.media.pause()
// }