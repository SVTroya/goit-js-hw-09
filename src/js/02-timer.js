import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import Notiflix from 'notiflix'

const ONE_SECOND = 1000
const startBtn = document.querySelector('[data-start]')
const calendarEl = document.querySelector('input#datetime-picker')
const timerEls = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
  separatorEls: [...document.querySelectorAll('.separator')],
}
let selectedTime = null
let timeFromStart = 0
let countDownId = null
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date().getTime() <= 0) {
      onError()
      return
    }
    selectedTime = selectedDates[0]
    startBtn.disabled = false
  },
}

startBtn.disabled = true
flatpickr(calendarEl, options)


startBtn.onclick = () => {
  const countDownTime = selectedTime - new Date().getTime()
  if (countDownTime <= 0) {
    onError()
    return
  }
  startBtn.disabled = true
  startBtn.onclick = null
  countDownId = setInterval(countDown, ONE_SECOND, countDownTime)
}

function convertMs(ms) {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const days = Math.floor(ms / day)
  const hours = Math.floor((ms % day) / hour)
  const minutes = Math.floor(((ms % day) % hour) / minute)
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)

  return { days, hours, minutes, seconds }
}

function countDown(time) {
  const { daysEl, hoursEl, minutesEl, secondsEl, separatorEls } = timerEls
  const timeLeft = time - timeFromStart
  if (timeLeft >= 0) {
    const { days, hours, minutes, seconds } = convertMs(timeLeft)
    const timeDisplayOption = {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
    daysEl.textContent = days.toLocaleString('en-US', timeDisplayOption)
    hoursEl.textContent = hours.toLocaleString('en-US', timeDisplayOption)
    minutesEl.textContent = minutes.toLocaleString('en-US', timeDisplayOption)
    secondsEl.textContent = seconds.toLocaleString('en-US', timeDisplayOption)
    separatorEls.forEach(el => el.style.color = 'darkslategrey')
    setTimeout(() => {
      separatorEls.forEach(el => el.style.color = 'transparent')
    }, 200)
    timeFromStart += ONE_SECOND
  }
  else {
    Notiflix.Notify.success("It's time!!!")
    separatorEls.forEach(el => el.style.color = 'darkslategrey')
    clearInterval(countDownId)
  }
}

function onError() {
  Notiflix.Notify.failure('Please choose a date in the future')
  startBtn.disabled = true
}