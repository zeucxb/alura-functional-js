import './utils/arrays-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, compose, partialize } from './utils/operators.js';
import { timeoutPromise, retry } from './utils/promise-helpers.js';

const operations = compose(
  partialize(debounceTime, 500),
  partialize(takeUntil, 3),
);

const action = operations(() =>
  retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
    .then(console.log)
    .catch(console.log)
)

document
  .querySelector('#myButton')
  .onclick = action; 