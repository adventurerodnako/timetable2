if (Meteor.isServer) {
    Meteor.startup(function() {
        Places.permit('insert', 'remove', 'update').ifHasRole('admin').allowInClientCode();
    });
}
