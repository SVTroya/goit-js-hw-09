import Notiflix from 'notiflix'

const form = document.querySelector('form')

form.onsubmit = (ev) => {
  ev.preventDefault()
  const { delay, step, amount } = ev.target.elements
  let delayStep = Number(step.value)
  for (let position = 0, promiseDelay = Number(delay.value); position < amount.value; position++, promiseDelay += delayStep) {
    createPromise(position, promiseDelay)
  }
  form.reset()
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })

  promise.then(onSuccess).catch(onReject)
}

function onSuccess({ position, delay }) {
  setTimeout(Notiflix.Notify.success(`Fulfilled promise ${position + 1} in ${delay}ms`), delay)
}

function onReject({ position, delay }) {
  setTimeout(Notiflix.Notify.failure(`Rejected promise ${position + 1} in ${delay}ms`), delay)
}