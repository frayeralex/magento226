define(['jquery', 'countryCodes', 'mage/validation', 'mage/translate'], function ($, codes) {
    'use strict';
    var codeMap = codes();
    // var uaPhonePattern = /^\+380[0-9]{9}$/;

    function validCountryNumber(number, country) {
        var parseNumber = parseInt(number.replace('+', ''), 10);

        if (number.indexOf('+') !== 0) return false;
        if (!parseNumber) return false;
        if (!codeMap[country]) return false;
        if (number.indexOf(codeMap[country]) !== 1) return false;

        return number.length === 12 || number.length === 13;
    }


    $.each({
        'validate-phone-number': [
            function (value, element, params) {
                // return uaPhonePattern.test(value);
                return validCountryNumber(value, params.country);
            },
            $.mage.__('Please enter a valid phone number.')
        ]
    }, function (i, rule) {
        rule.unshift(i);
        $.validator.addMethod.apply($.validator, rule);
    });
});

