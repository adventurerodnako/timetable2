if (Meteor.isServer) {
    Meteor.methods({
        makePrimaryEmail: function(email) {
            check(email, String);
            var user = Meteor.users.findOne({
                "emails.address": email
            });

            var oldEmail = user.emails[0].address;

            for (var i = 0; i < user.emails.length; i++) {
                if (user.emails[i].address === email){
                    user.emails[i].address = oldEmail;
                    console.log(i);
                }
            }

            user.emails[0].address = email;

            if (!user) {
                throw new Meteor.Error(403, "User not found");
            } else {
                console.log(email);
                var oldEmail = user.emails[0].address;
                Meteor.users.update(user._id, {
                    $set: {
                        emails: user.emails
                    }
                });
            }
        }
    });
}