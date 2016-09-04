AutoForm.addHooks(['profile'], {
    onSuccess: function(update, result) {
        Bert.alert('Профиль успешно изменен!', 'success', 'growl-top-right');
        console.log("User updated!");
    },
    onError: function(update, error) {
        if (error.error === 409) {
            Bert.alert('Такой почтовый адрес уже существует! Выберите другой почтовый адрес', 'danger', 'growl-top-right');
        } else {
            Bert.alert(error, 'danger', 'growl-top-right');
        }
        console.log("Update Error:", error);
    }
});
