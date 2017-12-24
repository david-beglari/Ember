import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shops', function () {
    this.route('shop', { path: ':slug' }, function () {
      this.route('products');
    });
  });
  this.route('login');
  this.route('registration');
});

export default Router;
