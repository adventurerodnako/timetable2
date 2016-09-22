if (Meteor.isServer) {
    Meteor.methods({
        makePrimaryEmail: function(email) {
            check(email, String);
            var user = Meteor.users.findOne({
                "emails.address": email
            });
            // TO DO: add Meteor.user()

            if (!user) {
                throw new Meteor.Error(403, "User not found");
            } else {
                var oldEmail = user.emails[0].address;
                for (var i = 0; i < user.emails.length; i++) {
                    if (user.emails[i].address === email){
                        user.emails[i].address = oldEmail;
                    }
                }
                user.emails[0].address = email;
                Meteor.users.update(user._id, {
                    $set: {
                        emails: user.emails
                    }
                });
            }
        }
    });
}
