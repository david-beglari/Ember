import Ember from 'ember';

export default Ember.Object.extend({
  name: '',

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  setupProducts: Ember.on('init',
    function() {
      if (!this.get('products')) {
        this.set('products', []);
    }
  }),
});
