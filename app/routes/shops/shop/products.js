import Ember from 'ember';
import { capitalize as capitalizeWords } from '../../../helpers/capitalize';

export default Ember.Route.extend({
  model() {
     return this.modelFor('shops.shop')
    },
  actions: {
    didTransition: function() {
      let band = this.modelFor('shops.shop');
      let name = capitalizeWords(band.get('name'));
      document.title = `${name} - products...`;
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
    createProduct() {
      let controller = this.get('controller');
      let shop = this.modelFor('shops.shop');

      let product = this.store.createRecord('product',{
        name: controller.get('name'),
        price: controller.get('price'),
        quantity: controller.get('quantity'),
        shop: shop
      });

      product.save().then(function () {
        controller.set('name', '');
        controller.set('quantity', '');
        controller.set('price', '');
      })
    },
    deleteProduct(data) {
      let cancel = window.confirm("Are you sure you want to delete?");
      if(cancel) {
        let shop = this.modelFor('shops.shop');
        shop.get('products').popObject(data.name);
      }
    },
    updateProduct(data) {
      console.log(data.name);
    }
  }
});
