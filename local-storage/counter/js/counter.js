'use strict';

let counter = document.querySelector('#counter'),
    buttons = document.querySelector('.wrap-btns');

buttons.addEventListener('click', reaction);

localStorage['num'] ? counter.textContent = localStorage['num'] : counter.textContent = 0;

function reaction(e) {
  if (e.target.id === "increment") {
    counter.textContent++;
    localStorage['num'] = counter.textContent;
  } else if (e.target.id === "decrement" && counter.textContent > 0) {
    counter.textContent--;
    localStorage['num'] = counter.textContent;
  } else {
    counter.textContent = 0;
    localStorage['num'] = counter.textContent;
  }
}
