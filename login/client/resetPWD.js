Template.resetPWD.events({
    "submit form": function(event, template){
        event.preventDefault();

        var newPassword = template.find('[name="password"]').value;
        var token = FlowRouter.getParam("token");

        Accounts.resetPassword(token, newPassword, function(error){
             if(error){
                 console.log("error", error);
                 if(error.reason === 'Password may not be empty'){
                     Bert.alert('Пароль не может быть пустым', 'danger', 'fixed-bottom');
                 }
                 if(error.reason === 'Token expired'){
                     Bert.alert('Время действия токена истекло', 'danger', 'fixed-bottom');
                 }
             } else {
                 console.log('Ваш пароль был изменен.');
                 FlowRouter.go('general');
                 Bert.alert('Пароль был успешно изменен.', 'success', 'fixed-bottom');
             }
        });
    }
});

Template.resetPWD.onRendered(function(){
    $("#resetPWDForm").validate({
        rules: {
            password:{
                required: true,
                minlength: 6,
                maxlength: 250
            },
            confirm_password: {
                required: true,
                minlength: 6,
                maxlength: 250,
                equalTo: "#password"
            }
        },
        messages: {
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символов",
                maxlength: "Пароль должен быть максимум 250 символов"
            },
            confirm_password: {
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
