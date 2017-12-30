import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function() {
    if(localStorage.getItem('accessToken')){
      this.transitionTo('shops')
    } else {
      this.transitionTo('login')
    }
  }
});
