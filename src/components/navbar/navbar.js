import app from '../../bootstrap';
import template from './navbar.html';

class navbar {
  constructor() {
    'ngInject';
  }
}

app.component('navbar', {
  template,
  controller: navbar,
});
