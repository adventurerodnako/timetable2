if (Meteor.isServer) {
    Meteor.methods({
        delEmail: function(email) {
            check(email, String);
            var user = Meteor.users.findOne({
                "emails.address": email
            });
            if (!user) {
                throw new Meteor.Error(403, "User not found");
            } else {
                Meteor.users.update(user._id, {
                    $set: {
                        emails: _.without(user.emails, _.findWhere(user.emails, {
                            address: email
                        }))
                    }
                });
            }
        }
    });
}
