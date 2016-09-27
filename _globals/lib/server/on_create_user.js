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
            // if (user.services.vk.bdate) {
            //     user.profile.birthday = user.services.vk.bdate;
            // }
            if (user.services.vk.sex) {
                if (user.services.vk.sex === 2) {
                    user.profile.gender = "Муж";
                } else if (user.services.vk.sex === 1) {
                    user.profile.gender = "Жен";
                }
            }
        }
        return user;
    });
}
