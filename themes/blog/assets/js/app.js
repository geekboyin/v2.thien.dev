let logoEl = document.querySelector('#logo')
let textEl = document.querySelector('#logo .text')
let cursorEl = document.querySelector('#logo .cursor')
let animate = {
  frames: [
    'h',
    'hi',
    'hi!',
    'hi!',
    'hi!',
    'hi!',
    'hi!',
    'hi!',
    'hi!',
    'hi',
    'h',
    '',
    'i',
    'it',
    'it\'',
    'it\'s',
    'it\'s ',
    'it\'s t',
    'it\'s th',
    'it\'s thi',
    'it\'s thie',
    'it\'s thien'
  ],
  interval: null,
  running: false,
  init () {
    if (this.running) return
    this.running = true
    textEl.textContent = ''
    setTimeout(() => {
      // Stop blinking when typing
      cursorEl.classList.remove('blinking')

      let i = 0;
      this.interval = setInterval(() => {
        textEl.textContent = this.frames[i];
        if (i === this.frames.length - 1) {
          clearInterval(this.interval)
          cursorEl.classList.add('blinking')
          this.running = false
        } else {
          i++
        }
      }, 130)
    }, 1000)
  }
}

animate.init()

logoEl.addEventListener('mouseover', () => {
  animate.init()
})
