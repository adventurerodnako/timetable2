AutoForm.addHooks(['details'],{
    onSuccess:function (update, result) {
        Bert.alert('Профиль успешно изменен.', 'success', 'fixed-bottom');
        console.log("User update");
    },
    onError: function (update, error) {
        // Bert.alert(error, 'danger', 'fixed-bottom');
        console.log(error);
    }
});
