const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchInput = document.querySelector('input.js-switch-input');

switchInput.addEventListener('change', changeLocalStorage);

switchInput.addEventListener('change', changeValueInput);

document.addEventListener('DOMContentLoaded', changeTheme);

function changeLocalStorage(event) {
  if (event.currentTarget.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    return;
  }
  localStorage.setItem('Theme', Theme.LIGHT);
}

function changeValueInput() {
  if (localStorage.getItem('Theme') === Theme.LIGHT) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    return;
  }

  if (localStorage.getItem('Theme') === Theme.DARK) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
  }
}

function changeTheme() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    switchInput.checked = true;
    changeValueInput();
    return;
  }
}
