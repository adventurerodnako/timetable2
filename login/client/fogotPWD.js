Template.fogotPWD.events({
    "submit form": function(event, template) {
        event.preventDefault();

        var email = template.find('[name="email"]').value;

        check(email, String);

        Accounts.forgotPassword({
            email: email
        }, function(error) {
            if (error) {
                console.log("error", error);
                if (error.reason === 'Internal server error') {
                    Bert.alert('Нет связи с почтовым сервером', 'danger', 'fixed-bottom');
                }
                if (error.reason === 'User not found') {
                    Bert.alert('Пользователь не найден', 'danger', 'fixed-bottom');
                }
            } else {
                console.log("Email reset link sent");
                Bert.alert('Письмо со сбросом пароля отправлено, проверьте почту.',
                    'success', 'fixed-bottom');
            }
        });
    }
});

Template.fogotPWD.onRendered(function() {
    $("#fogotPWDForm").validate({
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
