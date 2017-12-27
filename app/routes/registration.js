import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    registration() {
      let name = this.controller.get('name');
      let email = this.controller.get('email');
      let password = this.controller.get('password');

      const model =  this.store.createRecord('registration', {
        id: '_id',
        name: name,
        email: email,
        password: password,
      });
      //localStorage.getItem('accessToken')

      model.save()
        .then((data) => {
        console.log(data.get('accessToken'));
          this.transitionTo('shops');
        }, () => {
          this.transitionTo('registration');
        });
    }
  }
});
