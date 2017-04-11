import angular from 'angular';
import uiRouter from 'angular-ui-router';
import home from './components/home/home.html';
import gallery from './components/gallery/gallery.html';
import GalleryController from './components/gallery/gallery';

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
      controller: GalleryController,
      controllerAs: 'gallery',
    });
};
const app = angular
  .module('image-gallery', [uiRouter])
  .config(config)
  .service('sharedProperties', () => {
    let filter = '';
    let albumId = '';
    let sortType = '';
    return {
      getFilter() {
        return filter;
      },
      setFilter(value) {
        filter = value;
      },
      setAlbumId(value) {
        albumId = value;
      },
      getAlbumId() {
        return albumId;
      },
      getSortType() {
        return sortType;
      },
      setSortType(value) {
        sortType = value;
      },
    };
  });

// Default exports contains angular module
export default app;

// Bootstrap application on document body
