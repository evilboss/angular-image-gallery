import app from '../../bootstrap';
import template from './main_layout.html';
// components
import '../home/home';
import '../sidebar/sidebar';
import '../navbar/navbar';
import '../gallery/gallery';

class main {
  constructor() {
    this.name = 'main';
  }
}

app.component('main', {
  template,
  controller: main,
});
