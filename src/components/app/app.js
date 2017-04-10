import app from '../../bootstrap';
import template from './app.html';
import './app.scss';

class App {
  constructor() {
    console.log('Example component loaded');
  }
}

app.component('igApp', {
  template,
  controller: App,
});
