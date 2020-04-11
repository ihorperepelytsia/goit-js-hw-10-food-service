import menuJs from './menu.json';

import storage from './storage.js';

import menuTemplate from './templates/menu.hbs';

const ul = document.querySelector('.js-menu');

for (const elem of menuJs) {
  ul.innerHTML += menuTemplate(elem);
}
// Theme changer--------------------------------------
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkBox = document.querySelector('input.js-switch-input');

const changeThameColor = function (newTheme, oldTheme) {
  if (document.body.classList.contains(oldTheme)) {
    document.body.classList.remove(oldTheme);
  }
  document.body.classList.add(newTheme.toString());
};

const changeCheckBox = function (e) {
  if (e.target.checked) {
    storage.save('theme', Theme.DARK);
    changeThameColor(Theme.DARK, Theme.LIGHT);
    return;
  }
  storage.save('theme', Theme.LIGHT);
  changeThameColor(Theme.LIGHT, Theme.DARK);
};
const whatIsTheme = function (e) {
  if (storage.load('theme') === Theme.DARK) {
    checkBox.checked = true;
    changeThameColor(Theme.DARK, Theme.LIGHT);
  }
};

checkBox.addEventListener('change', changeCheckBox);
document.addEventListener('DOMContentLoaded', whatIsTheme);
