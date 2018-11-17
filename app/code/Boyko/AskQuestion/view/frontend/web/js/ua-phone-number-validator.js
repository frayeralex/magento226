define(['jquery', 'mage/validation', 'mage/translate'], function ($) {
    'use strict';
    var uaPhonePattern = /^\+380[0-9]{9}$/;

    $.each({
        'validate-ua-phone-number': [
            function (value) {
                return uaPhonePattern.test(value);
            },
            $.mage.__('Please enter a valid phone number.')
        ]
    }, function (i, rule) {
        rule.unshift(i);
        $.validator.addMethod.apply($.validator, rule);
    });
});

