import app from '../../bootstrap';
import template from './main_layout.html';

// components
import '../home/home';
import '../sidebar/sidebar';

class main {
  constructor() {
    console.log('Example component loaded');
  }
}

app.component('main', {
  template,
  controller: main,
});