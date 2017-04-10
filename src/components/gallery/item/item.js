import app from '../../bootstrap';
import template from './item.html';

class item {
  constructor() {
    console.log('Example component loaded');
  }
}

app.component('item', {
  template,
  controller: item,
});
