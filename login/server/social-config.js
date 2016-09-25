ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: Meteor.settings.private.facebook.appId,
    secret: Meteor.settings.private.facebook.secret
});

ServiceConfiguration.configurations.remove({
    service: 'twitter'
});

ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: Meteor.settings.private.twitter.consumerKey,
    secret: Meteor.settings.private.twitter.secret
});

ServiceConfiguration.configurations.remove({
    service: 'google'
});

ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: Meteor.settings.private.google.clientId,
    secret: Meteor.settings.private.google.secret
});

ServiceConfiguration.configurations.remove({
    service: 'github'
});

ServiceConfiguration.configurations.insert({
    service: 'github',
    clientId: Meteor.settings.private.github.clientId,
    secret: Meteor.settings.private.github.secret
});

ServiceConfiguration.configurations.remove({
    service: 'vk'
});

ServiceConfiguration.configurations.insert({
    service: 'vk',
    appId: Meteor.settings.private.vk.appId, // Your app id
    secret: Meteor.settings.private.vk.secret // Your app secret
});

ServiceConfiguration.configurations.remove({
    service: 'ok'
});

ServiceConfiguration.configurations.insert({
    service: 'ok',
    appId: Meteor.settings.private.ok.appId, // Your app id
    secret: Meteor.settings.private.ok.secret, // Your app secret
    public: Meteor.settings.private.ok.public, // Your app public code
    scope: Meteor.settings.private.ok.scope // Scopes split by ";"
});
