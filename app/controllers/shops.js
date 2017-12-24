import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  isShow: false,
  isEdit: false,

  isAddButtonDisabled: Ember.computed('name', function() {
    return Ember.isEmpty(this.get('name'));
  }),

  actions: {
    showInput() {
      this.set('isShow', true);
    },
    create() {
      this.set('isShow', false);
      return true;
    },
    shopEdit() {
      this.set('isEdit', true);
    },
    update() {
      this.set('isEdit', false);
      return true;
    },
  }
});
