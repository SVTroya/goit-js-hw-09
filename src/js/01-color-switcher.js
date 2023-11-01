const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
let changeBcgFunId = null

onBtnStopClick()

function onBtnStartClick() {
  btnStart.disabled = true
  btnStop.disabled = false
  btnStop.onclick = onBtnStopClick
  btnStart.onclick = null
  changeBcgFunId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
  }, 1000)
}

function onBtnStopClick() {
  btnStart.disabled = false
  btnStop.disabled = true
  btnStart.onclick = onBtnStartClick
  btnStop.onclick = null
  clearInterval(changeBcgFunId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
}
