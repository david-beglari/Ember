import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.store.findAll('shop');
  },

  actions: {
    didTransition: function() {
      document.title = 'Sopping...';
    },
    willTransition: function(transition) {
      let controller = this.get('controller'),
        cancel;
      if (controller.get('isEdit')) {
        cancel = window.confirm("You have unsaved changes. Are you sure you want to leave?");
        if (cancel) {
          controller.set('isEdit', false);
        } else {
        transition.abort();
      }
    }
    },
    create() {
      let name = this.controller.get('name');

      const model =  this.store.createRecord('shop',{
        id: '_id',
        name: name
      });

      model.save()
        .then(() => {
          this.transitionTo('shops');
        });
    },
    deleteShop(data) {
      let cancel = window.confirm("Are you sure you want to delete?");
      if(cancel) {
        data.destroyRecord()
          .then(() => this.transitionTo('shops'));
      }
      this.transitionTo('shops');
    },
    update(data) {
      data.save()
        .then(() => this.transitionTo('shops'));
    }
  }
});
