import './utils/arrays-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, compose, partialize } from './utils/operators.js';

const operations = compose(
  partialize(debounceTime, 500),
  partialize(takeUntil, 3),
);

const action = operations(() =>
  service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
)

document
  .querySelector('#myButton')
  .onclick = action; 