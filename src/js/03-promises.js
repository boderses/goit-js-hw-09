import { Notify } from 'notiflix/build/notiflix-notify-aio';

const submitForm = document.querySelector('.form');
submitForm.addEventListener("submit", onSubmit);
  
function onSubmit(e) {
  e.preventDefault();

const {elements: {amount, delay, step}} = e.currentTarget;
let promiseDelay = Number(delay.value);
  
for (let i = 1; i <= Number(amount.value); i += 1) {

  createPromise(i, promiseDelay)
    .then(({position, delay}) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    promiseDelay += Number(step.value);
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  })
}