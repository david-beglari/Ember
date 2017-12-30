import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  name: '',
  isShow: false,
  isEdit: false,

  isAddButtonDisabled: Ember.computed('name', function() {
    return Ember.isEmpty(this.get('name'));
  }),

  itemPrice: Ember.computed.mapBy('model.products', 'price'),
  total: Ember.computed.sum('itemPrice'),

  actions: {
    showInput() {
      this.set('isShow', true);
    },
    createProduct() {
      this.set('isShow', false);
      return true;
    },
    productEdit() {
      this.set('isEdit', true);
    },
    updateProduct() {
      this.set('isEdit', false);
      return true;
    },
  }
});
