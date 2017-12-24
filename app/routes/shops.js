import Route from '@ember/routing/route';
import Shop from '../models/shop';
import Product from '../models/product';

export default Route.extend({
  model () {
    let firstProduct = Product.create({
      name: 'product 1',
      quantity: 2,
      price: 120
    });
    let secondProduct = Product.create({
      name: 'product 2',
      quantity: 1,
      price: 320
    });
    let thirdProduct = Product.create({
      name: 'product 3',
      quantity: 3,
      price: 78
    });

    let first = Shop.create({ name: 'Good name', products: [firstProduct] });
    let second = Shop.create({ name: 'like', products: [secondProduct]  });
    let third = Shop.create({ name: 'nice', products: [secondProduct, thirdProduct]  });
      return [first, second, third];
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
      let name = this.get('controller').get('name');
      let shop = Shop.create({name: name});
      this.modelFor('shops').pushObject(shop);
      this.get('controller').set('name', '');
      this.transitionTo('shops.shop.products', shop);
    },
    deleteShop(data) {
      console.log(data.name);
      let cancel = window.confirm("Are you sure you want to delete?");
      if(cancel) {
        this.modelFor('shops').popObject(data.name);
      }
      this.transitionTo('shops');
    },
    update(data) {
      console.log(data.name);
    }
  }
});
