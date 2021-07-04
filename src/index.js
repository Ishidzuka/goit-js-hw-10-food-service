import cards from "./menu.json";
import cardsTmp from "./templates/card_template.hbs";
import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const refs = {
      cardsMenuContainer: document.querySelector('.js-menu'),
      inputEl: document.querySelector('input'),
      bodyEl: document.querySelector('body'),
  }

//1.Add templates
const cardsMarkup = makeMenuItemCardsMarkup(cards);
refs.cardsMenuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function makeMenuItemCardsMarkup(cards) {
    return cardsTmp(cards);
}

//2.Change Theme
getStorageTheme();
    
refs.inputEl.classList.add('js-switch-input');

function changeTheme(event) {
    if (event.currentTarget.checked) {        
        refs.bodyEl.classList.remove(Theme.LIGHT);
        refs.bodyEl.classList.add(Theme.DARK);

    } if (!event.currentTarget.checked) {
        refs.bodyEl.classList.remove(Theme.DARK);
        refs.bodyEl.classList.add(Theme.LIGHT);
    }
    addDataToLocalStorage (event);
}

//3.Using the LocalStorage
function addDataToLocalStorage(event) {
    const checkedTheme = event.currentTarget.checked;
    localStorage.setItem('pageTheme', checkedTheme);
}

function getStorageTheme () {
   const storageValue = localStorage.getItem('pageTheme');
    if (storageValue) {
        if(storageValue === 'true') {
            refs.inputEl.checked = true
            refs.bodyEl.classList.add(Theme.DARK);
        }
    }
}
refs.inputEl.addEventListener('change', changeTheme);


