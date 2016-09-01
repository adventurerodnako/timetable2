ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '285133305201439',
    secret: '86ec3ff3fd59fa0e023c44bf6212fe56'
});

ServiceConfiguration.configurations.remove({
    service: 'twitter'
});

ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: 'ZCJDyNC88oZl55Z89PNGBW0v1',
    secret: 'uxvRpalher8oqEPSMz8odebLAqoVY2D2Ijlht95c1iKG8u5ZBv'
});

ServiceConfiguration.configurations.remove({
    service: 'google'
});

ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: '544476190860-t5fc5k75g4o5jfmpim78pbtjdvsvihau.apps.googleusercontent.com',
    secret: 'N0ULff1tsJ074eLvtHhebmMI'
});

ServiceConfiguration.configurations.remove({
    service: 'github'
});

ServiceConfiguration.configurations.insert({
    service: 'github',
    clientId: '99d8444a2d90e6b27c49',
    secret: '99d9cc196ff40379c12d2b7864d93cf9b633054a'
});

ServiceConfiguration.configurations.remove({
    service: 'vk'
});

ServiceConfiguration.configurations.insert({
    service: 'vk',
    appId:   '5612596',      // Your app id
    secret:  '7aho4PrVuFJy3VCNcLxX' // Your app secret
});

ServiceConfiguration.configurations.remove({
    service: 'ok'
});

ServiceConfiguration.configurations.insert({
    service: 'ok',
    appId:   '1248075264',       // Your app id
    secret:  '3EA123C6EDBF182488D174CD', // Your app secret
    public:  'CBAPBFGLEBABABABA', // Your app public code
    scope:   'http://www.odnoklassniki.ru/game/1248075264'         // Scopes split by ";"
});
