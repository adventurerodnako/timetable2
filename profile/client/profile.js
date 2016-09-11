AutoForm.addHooks(['profile'], {
    onSuccess: function(update, result) {
        Bert.alert('Профиль успешно изменен!', 'success', 'fixed-bottom');
        console.log("User updated!");
    },
    onError: function(update, error) {
        if (error.error === 409) {
            Bert.alert('Такой почтовый адрес уже существует! Выберите другой почтовый адрес', 'danger', 'fixed-bottom');
        } else {
            Bert.alert(error, 'danger', 'fixed-bottom');
        }
        console.log("Update Error:", error);
    }
});
