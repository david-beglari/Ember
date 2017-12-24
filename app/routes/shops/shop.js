import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    var shops = this.modelFor('shops');
    return shops.findBy('slug', params.slug);
  }
});
