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
      //let name = this.get('controller').get('name');
      //let shop = Shop.create({name: name});
      //this.modelFor('shops').pushObject(shop);
      //this.get('controller').set('name', '');
      //this.transitionTo('shops.shop.products', shop);
    },
    deleteShop(data) {
      //console.log(data.name);
      let cancel = window.confirm("Are you sure you want to delete?");
      if(cancel) {
        this.modelFor('shops').popObject(data.name);
      }
      this.transitionTo('shops');
    },
    update(data) {
      //console.log(data.name);
    }
  }
});
