import app from '../../bootstrap';
import template from './navbar.html';


class navbar {
  constructor() {
    console.log('Example component loaded');
  }
}

app.component('navbar', {
  template,
  controller: navbar,
});
