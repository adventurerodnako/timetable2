var Schemas = {};

Schemas.UserProfile = new SimpleSchema({
    name: {
        type: String,
        label: "Имя пользователя",
        autoform: {
            label: false,
            placeholder: "Имя пользователя"
        },
        max: 250,
        optional: true
    },
    firstName: {
        type: String,
        label: "Имя",
        max: 250,
        optional: true,
        autoform: {
            label: false,
            placeholder: "Имя"
        }
    },
    middleName: {
        type: String,
        label: "Отчество",
        autoform: {
            label: false,
            placeholder: "Отчество"
        },
        max: 250,
        optional: true
    },
    lastName: {
        type: String,
        label: "Фамилия",
        autoform: {
            label: false,
            placeholder: "Фамилия"
        },
        max: 250,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true,
        label: "Дата рождения",
        autoform: {
            label: false,
            placeholder: "Дата рождения",
            type: "bootstrap-datepicker",
            "data-date-autoclose": "true",
            datePickerOptions: {
                format: "dd-mm-yyyy",
                startView: "day",
                minViewMode: "year"
            }
        }
    },
    gender: {
        type: String,
        optional: true,
        label: "Выберите пол",
        allowedValues: ['Муж', 'Жен'],
        autoform: {
            label: false,
            type: "select",
            afFieldInput: {
                firstOption: "(Выберите пол)"
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
    description: {
        type: String,
        optional: true,
        label: "О себе",
        max: 2000,
        autoform: {
            placeholder: "О себе",
            label: false,
            afFieldInput: {
                type: "textarea",
                rows: 5
            }
        }
    },
    organization: {
        type: String,
        label: "Организация",
        autoform: {
            label: false,
            placeholder: "Организация"
        },
        max: 250,
        optional: true
    },
    address: {
        type: Number,
        label: "Адрес",
        optional: true,
        autoform: {
            label: false,
            afFieldInput: {
                type: "universe-select",
                valuesLimit: 5,
                uniPlaceholder: "Выберите населенный пункт",
                optionsPlaceholder: true,
                optionsMethod: "getOptionsRelated"
            }
        }
    },
    telnumbers: {
        type: [String],
        optional: true,
        label: "Телефоны",
        maxCount: 5
    },
    profileImageUrl: {
        type: String,
        optional: true,
        autoform: {
            label: false,
            type: "hidden"
        }
    }
});

Schemas.User = new SimpleSchema({
    emails: {
        type: [Object],
        optional: true,
        minCount: 1,
        autoform: {
            label: false,
            placeholder: "email"
        }
    },
    "emails.$.address": {
        type: String,
        optional: true,
        autoform: {
            label: false,
            placeholder: "email*"
        },
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean,
        label: "подтвержден",
        autoform: {
            label: false,
            type: "hidden"
        },
        optional: true
    },
    createdAt: {
        type: Date,
        label: "Дата создания*",
        optional: true
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
