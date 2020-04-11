import recipes from './menu.json';

import markupItemTemplate from './templates/markup.hbs';

const ul = document.querySelector('.js-menu');

function createMarkup(recipes) {
  const markup = recipes.map(item => markupItemTemplate(item)).join('');

  ul.insertAdjacentHTML('beforeend', markup);
}

createMarkup(recipes);