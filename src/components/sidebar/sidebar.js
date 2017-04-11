import app from '../../bootstrap';
import template from './sidebar.html';

class sidebar {
  constructor($location) {
    this.name = 'sidebar';
    this.$location = $location;
  }

  getActiveRoute(route) {
    return (this.$location.path() === route);
  }
}

app.component('sidebar', {
  template,
  controller: sidebar,
  controllerAs: 'sidebar',
});
