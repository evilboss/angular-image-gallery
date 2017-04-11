class GalleryController {

  constructor($http, $location, sharedProperties) {
    this.name             = 'Gallery';
    this.$http            = $http;
    this.$location        = $location;
    this.filter           = '';
    this.albumFilter      = '';
    this.sortType         = '';
    this.sharedProperties = sharedProperties;

    $http.get('http://jsonplaceholder.typicode.com/photos').then((result) => {
      this.photos = result.data;
    });
    $http.get('http://jsonplaceholder.typicode.com/albums').then((result) => {
      this.albums = result.data;
    });
  }

  getPhotos() {
    return this.$http
      .get('http://jsonplaceholder.typicode.com/photos')
      .then(result => result.data);
  }

  getFilter() {
    console.log(this.sharedProperties.getFilter());
    return this.sharedProperties.getFilter();
  }

  changeName() {
    this.sharedProperties.setFilter(this.filter);
  }

  changeSort() {
    this.sharedProperties.setSortType(this.sortType);
  }

  changeAlbum() {
    console.log(this.albumFilter);
    this.sharedProperties.setAlbumId(this.albumFilter);
  }

  getAlbumFilter() {
    return this.sharedProperties.getAlbumId();
  }

  getSortType() {
    return this.sharedProperties.getSortType();
  }

  isGallery() {
    return (this.$location.path() === '/gallery');
  }
}
export default GalleryController;
