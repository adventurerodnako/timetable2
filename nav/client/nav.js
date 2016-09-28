Template.nav.events({
    "click .logout": function(event, template) {
        FlowRouter.go('signin');
        Meteor.logout();
    }
});
Template.nav.helpers({
    name: function() {
        if (Meteor.user().profile.name && Meteor.user().profile.name.length !== 0) {
            return Meteor.user().profile.name;
        } else if (Meteor.user().profile.firstName && Meteor.user().profile.firstName.length !== 0 && Meteor.user().profile.lastName && Meteor.user().profile.lastName.length !== 0) {
                return Meteor.user().profile.firstName + ' ' + Meteor.user().profile.lastName;
        } else if (Meteor.user().emails && Meteor.user().emails[0].address.length !== 0) {
            return Meteor.user().emails[0].address;
        } else {
            return 'Кто Вы?'
        }
    }
});
