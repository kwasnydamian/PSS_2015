/**
 * Created by damian on 18.02.15.
 */
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
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

i18n.setLanguage('pl');
