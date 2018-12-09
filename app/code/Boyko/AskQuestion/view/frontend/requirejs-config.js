var config = {
    paths: {
        phoneValidator: 'Boyko_AskQuestion/js/phone-number-validator',
        handleQuestionFormSubmit:
            'Boyko_AskQuestion/js/handle-question-form-submit',
        countryCodes: 'Boyko_AskQuestion/js/country-codes'
    },
    config: {
        mixins: {
            'mage/validation/validation': {
                'Boyko_AskQuestion/js/phone-number-validator': true
            }
        }
    }
};
