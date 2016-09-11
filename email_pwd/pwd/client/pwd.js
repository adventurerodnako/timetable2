Template.pwd.events({
    "submit form": function(event, template) {
        event.preventDefault();

        var user = {
            oldPWD: template.find('[name="oldPWD"]').value,
            newPassword: template.find('[name="newPassword"]').value
        };

        console.log(user.oldPWD);
        console.log(user.newPassword);
        Accounts.changePassword(user.oldPWD, user.newPassword, function(error, result) {
            if (error) {
                console.log(error);
                if (error.reason === 'Incorrect password') {
                    Bert.alert('Старый пароль указан неверно.', 'danger', 'fixed-bottom');
                }
            } else {
                Bert.alert('Новый пароль успешно установлен.', 'success', 'fixed-bottom');
            }
        });
    }
});

Template.pwd.onRendered(function() {
    $(".changePWD").validate({
        rules: {
            oldPWD: {
                required: true,
                minlength: 6,
                maxlength: 250
            },
            newPassword: {
                required: true,
                minlength: 6,
                maxlength: 250
            },
            confirm_newPassword: {
                required: true,
                minlength: 6,
                maxlength: 250,
                equalTo: ".newPassword"
            }
        },
        messages: {
            oldPWD: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символов",
                maxlength: "Пароль должен быть максимум 250 символов"
            },
            newPassword: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символов",
                maxlength: "Пароль должен быть максимум 250 символов"
            },
            confirm_newPassword: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символов",
                maxlength: "Пароль должен быть максимум 250 символов",
                equalTo: "Пожалуйста, введите тот же пароль, что и выше"
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
