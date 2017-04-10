import app from '../../bootstrap';
import template from './sidebar.html';


class sidebar {
  constructor() {
    console.log('Example component loaded');
  }
}

app.component('sidebar', {
  template,
  controller: sidebar,
});
