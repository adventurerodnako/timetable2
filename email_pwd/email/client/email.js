Template.email.helpers({
    userEmailPrimary: function() {
        var emails = Meteor.user().emails;
        return _.first(emails, 1);
    },
    userEmailsSecondary: function() {
        return _.rest(Meteor.user().emails);
    }
});

Template.email.events({
    "click .resendVerifiedEmail": function(event, template) {
        Meteor.call("resendVerificationLink", this.address, function(error, result) {
            if (error) {
                console.log("error", error);
                if (error.reason === 'Internal server error') {
                    Bert.alert('Нет связи с почтовым сервером', 'danger', 'fixed-bottom');
                }
                if (error.reason === 'User not found') {
                    Bert.alert('Пользователь не найден', 'danger', 'fixed-bottom');
                }
                if (error.reason === 'Alredy verified') {
                    Bert.alert('Почтовый адрес уже подтвержден', 'danger', 'fixed-bottom');
                }
            } else {
                Bert.alert('Новое письмо было вам отправлено. Если письмо не отображается во входящих, то проверьте папку со спамом.',
                    'success', 'growl-top-right');
                console.log("email resend");
            }
        });
    },
    "click .delEmail": function(event, template) {
        Meteor.call("delEmail", this.address, function(error, result) {
            if (error) {
                console.log("error", error);
                if (error.reason === 'You must specify at least 1 values') {
                    Bert.alert('Один email всегда должен быть.', 'danger', 'fixed-bottom');
                }
            } else {
                Bert.alert('Email успешно удален', 'success', 'fixed-bottom');
            }
        });
    },
    "click .addEmail": function(event, template) {
        Modal.show("addEmail");
    },
    "click .makePrimaryEmail": function(event, template) {
        Meteor.call("makePrimaryEmail", this.address, function(error, result) {
            if (error) {
                console.log("error", error);
            } else {
                Bert.alert('Основной email успешно изменен.', 'success', 'fixed-bottom');
            }
        })
    }
});

Template.addEmail.events({
    "click #addEmail": function(event, template) {
        event.preventDefault();

        var user = {
            email: template.find('[name="email"]').value,
            userId: Meteor.userId()
        };

        Meteor.call("addEmail", user, function(error, result) {
            if (error) {
                console.log(error);
                if (error.reason === "Internal server error") {
                    Bert.alert('Почтовый адрес уже существует. Укажите другой.', 'danger', 'fixed-bottom');
                }
                if (error.reason === "Max emails limit") {
                    Bert.alert('Можно указать только 1 основной и 5 дополнительных почтовых адресов', 'danger', 'fixed-bottom');
                }
            } else {
                Modal.hide("addEmail");
                Bert.alert('Email успешно добавлен', 'success', 'fixed-bottom');
            }
        });
    }
});

Template.addEmail.onRendered(function() {
    $("#addEmailForm").validate({
        rules: {
            email: {
                email: true,
                required: true,
                maxlength: 250
            }
        },
        messages: {
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста введите корректный email",
                maxlength: "email должен быть максимум 250 символов"
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        }
    });
});
