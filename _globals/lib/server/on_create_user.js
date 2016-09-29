if (Meteor.isServer) {
    Accounts.onCreateUser(function(options, user) {
        user.profile = {};
        // VK
        if (user.services.vk) {
            if (user.services.vk.nickname) {
                user.profile.name = user.services.vk.nickname;
            }
            if (user.services.vk.first_name) {
                user.profile.firstName = user.services.vk.first_name;
            }
            if (user.services.vk.last_name) {
                user.profile.lastName = user.services.vk.last_name;
            }
            if (user.services.vk.bdate) {
                var parts = user.services.vk.bdate.split('.');
                user.profile.birthday = new Date(parts[2], parts[1]-1, +parts[0]+1);
            }
            if (user.services.vk.sex) {
                if (user.services.vk.sex === 2) {
                    user.profile.gender = "Муж";
                } else if (user.services.vk.sex === 1) {
                    user.profile.gender = "Жен";
                }
            }
        }
        // Github
        if (user.services.github) {
            if (user.services.github.username) {
                user.profile.name = user.services.github.username;
            }
        }
        // Facebook
        if (user.services.facebook) {
            if (user.services.facebook.first_name) {
                user.profile.firstName = user.services.facebook.first_name;
            }
            if (user.services.facebook.last_name) {
                user.profile.lastName = user.services.facebook.last_name;
            }
            if (user.services.facebook.gender) {
                if (user.services.facebook.gender === 'male') {
                    user.profile.gender = "Муж";
                } else if (user.services.facebook.gender === 'female') {
                    user.profile.gender = "Жен";
                }
            }
        }
        // OK
        if (user.services.ok) {
            if (user.services.ok.first_name) {
                user.profile.firstName = user.services.ok.first_name;
            }
            if (user.services.ok.last_name) {
                user.profile.lastName = user.services.ok.last_name;
            }
            if (user.services.ok.birthday) {
                user.profile.birthday = moment(user.services.ok.birthday).add(1, 'days').format();
            }
            if (user.services.ok.gender) {
                if (user.services.ok.gender === 'male') {
                    user.profile.gender = "Муж";
                } else if (user.services.ok.gender === 'female') {
                    user.profile.gender = "Жен";
                }
            }
        }
        // Twitter
        if (user.services.twitter) {
            if (user.services.twitter.screenName) {
                user.profile.name = user.services.twitter.screenName;
            }
        }
        // Google
        if (user.services.google) {
            if (user.services.google.given_name) {
                user.profile.firstName = user.services.google.given_name;
            }
            if (user.services.google.family_name) {
                user.profile.lastName = user.services.google.family_name;
            }
        }
        return user;
    });
}
