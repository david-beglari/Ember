import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  actions: {
    login() {
      let that = this;
      let email = this.controller.get('email');
      let password = this.controller.get('password');

      return new Ember.RSVP.Promise((res, rej) => {
        Ember.$.ajax({
          url: 'login',
          type: 'POST',
          data: {
            email: email,
            password: password
          }
        }).then(function (res) {
          if(res.token) {
            localStorage.setItem('accessToken', res.token);
            that.transitionTo('shops');
            alert("Welcome to Shopping center");
          } else {
            alert("Sorry you E-mail or password is wrong");
            that.transitionTo('login');
          }
        })
      }, function (rej) {
        alert("Sorry something went to wrong, please try again");
        that.transitionTo('login');
      })


    }
  }
});
