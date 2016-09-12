if (Meteor.isServer) {
    Meteor.methods({
        sendVerificationLink: function() {
            var userId = Meteor.userId();
            if (userId) {
                return Accounts.sendVerificationEmail(userId);
            }
        },
        resendVerificationLink: function(address) {
            check(address, String);
            var user = Meteor.users.findOne({
                "emails.address": address
            });

            if (!user) {
                throw new Meteor.Error(403, "User not found");
            }

            for (var i = 0; i < user.emails.length; i++) {
                if (user.emails[i].address === address) {
                    if (user.emails[i].verified === false) {
                        try {
                            Accounts.sendVerificationEmail(user._id, address);
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        throw new Meteor.Error(403, "Alredy verified");
                    }
                }
            }
        }
    });
}
