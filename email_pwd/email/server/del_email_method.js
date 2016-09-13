if (Meteor.isServer) {
    Meteor.methods({
        delEmail: function(user) {
            Accounts.removeEmail(user.userId, user.email)
        }
    });
}
