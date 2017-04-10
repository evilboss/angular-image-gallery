import app from '../../bootstrap';
import template from './home.html';

class home {
  constructor() {
    console.log('Example component loaded');
  }
}

app.component('home', {
  template,
  controller: home,
});
