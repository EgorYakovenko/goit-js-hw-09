import Notiflix from 'notiflix';

 document.querySelector('.form').addEventListener('submit', async function (e) {
      e.preventDefault();
      const delay = parseInt(this.elements.delay.value);
      const step = parseInt(this.elements.step.value);
      const amount = parseInt(this.elements.amount.value);

      if (isNaN(delay) || isNaN(step) || isNaN(amount)) {
        notiflix.Notify.failure('Please fill in all fields with valid numbers.');
        return;
      }

      
      function createPromise(position, delay) {
        return new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.3;
          setTimeout(() => {
            if (shouldResolve) {
              resolve({ position, delay });
            } else {
              reject({ position, delay });
            }
          }, delay);
        });
      }

      
      const promises = [];
      for (let i = 1; i <= amount; i++) {
        const currentDelay = delay + (i - 1) * step;
        promises.push(createPromise(i, currentDelay));
      }

      
      for (const promise of promises) {
        try {
          const result = await promise;
          Notiflix.Notify.success(`Fulfilled promise ${result.position} in ${result.delay}ms`);
        } catch (error) {
          Notiflix.Notify.failure(`Rejected promise ${error.position} in ${error.delay}ms`);
        }
      }
    });