import card from "../templates/card_template";
import menu from "../menu.json";

const markup = card(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);