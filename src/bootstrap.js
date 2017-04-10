import angular from 'angular';

const app = angular.module('image-gallery', []);

// Default exports contains angular module
export default app;

// Bootstrap application on document body
angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['image-gallery'], {
    strictDi: true,
  });
});
