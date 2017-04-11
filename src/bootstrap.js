import angular from 'angular';
import uiRouter from 'angular-ui-router';
import home from './components/home/home.html';
import gallery from './components/gallery/gallery.html';

const config = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('/home', {
      url: '/',
      template: home,
    })
    .state('/gallery', {
      url: '/gallery',
      template: gallery,
    });
};
const app = angular.module('image-gallery', [uiRouter]).config(config);
// Default exports contains angular module
export default app;

// Bootstrap application on document body
