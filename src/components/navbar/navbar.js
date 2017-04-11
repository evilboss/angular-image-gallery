import app from '../../bootstrap';
import template from './navbar.html';
import GalleryController from '../gallery/gallery';

app.component('navbar', {
  template,
  controller: GalleryController,
  controllerAs: 'gallery',
});
