export default {
  name: 'userService',
  fn: function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/someapi/users');
  },
  mockFn: function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/app/stub/users.json');
  }
}