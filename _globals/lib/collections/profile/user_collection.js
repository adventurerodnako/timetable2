var Schemas = {};

Schemas.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        label: "Имя",
        max: 25,
        optional: true
    },
    middleName: {
        type: String,
        label: "Отчество",
        max: 25,
        optional: true
    },
    lastName: {
        type: String,
        label: "Фамилия",
        max: 25,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true,
        label: "Дата рождения"
    },
    gender: {
        type: String,
        label: "Пол",
        optional: true,
        allowedValues: ['Муж', 'Жен'],
        autoform: {
            type: "select",
            afFieldInput: {
                placeholder: "Выберите пол",
                firstOption: ""
            },
            options: function() {
                return [{
                    label: "Муж",
                    value: "Муж"
                }, {
                    label: "Жен",
                    value: "Жен"
                }, ];
            }
        }
    },
    organization: {
        type: String,
        label: "Организация",
        max: 30,
        optional: true
    },
    addressWork: {
        type: String,
        optional: true,
        label: "Адрес места работы",
        max: 200
    }
});

Schemas.User = new SimpleSchema({
    username: {
        type: String,
        label: "Имя пользователя",
        regEx: /^[a-z0-9A-Z_]{3,25}$/,
        optional: true,
        max: 25
    },
    emails: {
        type: [Object],
        label: "Почтовый адрес*",
        optional: true
    },
    "emails.$.address": {
        type: String,
        label: "Почтовый адрес",
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean,
        label: "проверить"
    },
    createdAt: {
        type: Date,
        label: "Дата создания*"
    },
    profile: {
        type: Schemas.UserProfile,
        label: "Профиль",
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: [String],
        label: "Роли",
        allowedValues: ['user', 'admin', 'moderator'],
        autoform: {
            type: "select",
            afFieldInput: {
                placeholder: "Выберите роль",
                firstOption: "",
                multiple: true
            },
            options: function() {
                return [{
                    optgroup: "Роли",
                    options: [{
                        label: "пользователь",
                        value: "user"
                    }, {
                        label: "администратор",
                        value: "admin"
                    }, {
                        label: "модератор",
                        value: "moderator"
                    }]
                }];
            }
        },
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schemas.User);
