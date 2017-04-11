/**
 * Created by evilboss on 4/11/17.
 */
class Filter {
  constructor() {
    this.filter = '';
  }

  getFilter() {
    return this.filter;
  }

  setFilter(newFilter) {
    this.filter = (newFilter) || '';
  }
}
export default Filter;
