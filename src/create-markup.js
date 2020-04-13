import recipes from './menu.json';

import markupItemTemplate from './templates/markup.hbs';

const ul = document.querySelector('.js-menu');

ul.insertAdjacentHTML('beforeend', markupItemTemplate(recipes));