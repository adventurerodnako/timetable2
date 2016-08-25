// Admin
Meteor.startup(function(){

    if (Meteor.users.find().count() === 0) {

        var user = Accounts.createUser({
            email:"you@email.ru",
            password: "1234"
        });

    }

});
