if (Meteor.isServer) {
    Meteor.startup(function() {
        Meteor.users.permit('update').ifLoggedIn().exceptProps(['roles']).allowInClientCode();
        Meteor.users.permit('insert', 'remove').ifHasRole('admin').allowInClientCode();
    });
}
