import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.onsubmit = () => {
  const { delay, step, amount } = form.elements;
  for (let i = 0; i < amount; i++) createPromise();
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
