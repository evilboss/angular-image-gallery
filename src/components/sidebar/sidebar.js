import app from '../../bootstrap';
import template from './sidebar.html';

class sidebar {
  constructor($location) {
    this.name = 'sidebar';
    console.log('Sidebar component loaded', $location.path());
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
