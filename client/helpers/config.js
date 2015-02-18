/**
 * Created by damian on 18.02.15.
 */
Accounts.ui.config({
    requestPermissions:{},
    extraSignupFields:[{
        fieldName: 'Imie',
        fieldLabel: 'Imię',
        inputType: 'text',
        visible: true,
        saveToProfile: true
    },{
        fieldName: 'Nazwisko',
        fieldLabel: 'Nazwisko',
        inputType: 'text',
        visible: true,
        saveToProfile: true
    }]

});

accountsUIBootstrap3.setLanguage('en');
accountsUIBootstrap3.map('en', {
    _resetPasswordDialog: {
        title: 'Reset hasła',
        cancel: 'Anuluj',
        submit: 'Zapisz'
    },
    _enrollAccountDialog: {
        title: 'enroll',
        cancel: 'Anuluj',
        submit: 'Zapisz'
    }
})