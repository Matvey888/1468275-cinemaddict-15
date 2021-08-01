import { createProfileTemplate } from './view/header.js';
import { createNavTemplate } from './view/navigation.js';
import { createSortTemplate } from './view/sort.js';
import { createFilmsTemplate } from './view/films.js';
import { createFilmsListTemplate } from './view/films-list.js';
import { createFilmsListContainer } from './view/films-list-container.js';
import { createFilmCardTemplate } from './view/film-card.js';
import { createFilmsListButton } from './view/films-list-button.js';
import { createPopupTemplate } from './view/popup.js';
import { createStatsTemplate } from './view/stats.js';
import { createFilmsListExtraRatedTemplate } from './view/films-list-extra-rated.js';
import { createFilmsListExtraCommentedTemplate } from './view/films-list-extra-commented.js';


const FILM_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteBody = document.querySelector('body');
const siteHeaderElement = siteBody.querySelector('.header');
const siteMainElement = siteBody.querySelector('.main');

render(siteHeaderElement, createProfileTemplate(), 'beforeend');

render(siteMainElement, createNavTemplate(), 'beforeend');

render(siteMainElement, createSortTemplate(), 'beforeend');

render(siteMainElement, createFilmsTemplate(), 'beforeend');

const siteFilmsElement = siteMainElement.querySelector('.films');

render(siteFilmsElement, createFilmsListTemplate(), 'beforeend');

const siteFilmsListElement = siteFilmsElement.querySelector('.films-list');

render(siteFilmsListElement, createFilmsListContainer(), 'beforeend');

const siteFilmsListContainer = siteFilmsListElement.querySelector('.films-list__container');

for (let i = 0; i < FILM_COUNT; i++) {
  render(siteFilmsListContainer, createFilmCardTemplate(), 'beforeend');
}

render(siteFilmsListElement, createFilmsListButton(), 'beforeend');

render(siteFilmsElement, createFilmsListExtraRatedTemplate(), 'beforeend');
render(siteFilmsElement, createFilmsListExtraCommentedTemplate(), 'beforeend');

const siteFooterElement = siteBody.querySelector('.footer');

render(siteFooterElement, createStatsTemplate(), 'beforeend');

render(siteFooterElement, createPopupTemplate(), 'afterend');
