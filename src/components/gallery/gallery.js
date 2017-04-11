import _ from 'underscore';

class GalleryController {
  constructor($http) {
    this.name = 'Gallery';
    this.$http = $http;
    $http.get('http://jsonplaceholder.typicode.com/photos').then((result) => {
      this.photos = result.data;
    });
  }

  getPhotos() {
    return this.$http
      .get('http://jsonplaceholder.typicode.com/photos')
      .then(result => result.data);
  }

  changeName() {
    this.name = 'angular-tips';
  }
}
export default GalleryController;
