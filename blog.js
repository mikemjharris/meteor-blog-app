Router.route('/', function () {
  this.render('test');
});


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    posts: [
      { 
        title: 'post 1',
       content: 'A big post about everything'
      },
      { 
        title: 'post 2',
       content: 'A big post about more everything'
      }
    ]
  });

  Template.list.userInCollection = function(){
        return Meteor.users.find();
    }

}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
