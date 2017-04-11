import app from '../../bootstrap';
import template from './gallery.html';

class gallery {
  constructor() {
    console.log('Example component loaded');
  }
}

app.component('gallery', {
  template,
  controller: gallery,
});
