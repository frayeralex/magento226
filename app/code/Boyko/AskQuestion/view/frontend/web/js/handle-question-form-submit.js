define([
    'jquery',
    'moment',
    'Magento_Ui/js/modal/alert',
    'mage/cookies',
    'mage/translate',
    'jquery/ui'
], function ($, moment, alert) {
    'use strict';

    $.widget('boyko.askQuestionHandler', {
        options: {
            cookieName: 'boyko_question_was_requested'
        },

        nodes: {
           submitBtn: null
        },

        /** @inheritdoc */
        _create: function () {
            $(this.element).submit(this.submitForm.bind(this));
            this.nodes.submitBtn = $(this.element).find('button.submit');
        },

        /**
         * Validate request and submit the form if able
         */
        submitForm: function () {
            if (!this.validateForm()) {
                alert('Form invalid');

                return;
            }

            this.ajaxSubmit();
        },

        /**
         * Submit request via AJAX. Add form key to the post data.
         */
        ajaxSubmit: function () {
            if (!this.isSubmitTimeoutExceeded()) {
                return alert({
                    title: $.mage.__('Too many request'),
                    content: $.mage.__('Please waite couple minutes for submit new one question')
                });
            }
            var formData = new FormData($(this.element).get(0));

            formData.append('form_key', $.mage.cookies.get('form_key'));
            formData.append('isAjax', 1);

            $.ajax({
                url: $(this.element).attr('action'),
                data: formData,
                processData: false,
                contentType: false,
                type:  $(this.element).attr('method'),
                dataType: 'json',
                context: this,
                beforeSend: function() {
                    this.nodes.submitBtn.addClass('disabled');
                }})
                .done(function (response) {
                    alert({
                        title: $.mage.__(response.status),
                        content: $.mage.__(response.message)
                    });

                    if (response.status === 'Success') {
                        // Prevent from sending requests too often
                        $.mage.cookies.set(
                            this.options.cookieName,
                            Date.now()
                        );
                    }
                })
                .fail(function () {
                    alert({
                        title: $.mage.__('Error'),
                        /*eslint max-len: ["error", { "ignoreStrings": true }]*/
                        content: $.mage.__('Your request can not be submitted right now. Please, contact us directly via email or phone to get your Sample.')
                    });
                })
                .always(function () {
                    this.nodes.submitBtn.removeClass('disabled');
                });
        },

        getLastSuccessRequestMoment: function() {
            var lastRequestTimestamp = $.mage.cookies
                .get(this.options.cookieName);

            return lastRequestTimestamp ? moment(+lastRequestTimestamp) : null;
        },

        isSubmitTimeoutExceeded: function() {
            if (!this.getLastSuccessRequestMoment()) {
                return true;
            }

            return moment().subtract(2, 'minute')
                .isAfter(this.getLastSuccessRequestMoment());
        },

        /**
         * Validate request form
         */
        validateForm: function () {
            return $(this.element).validation().valid();
        },

        /**
         * Clear that `geekhub_request_sample_clear_cookie` cookie
         * when the event `geekhub_request_sample_clear_cookie` is triggered
         */
        clearCookie: function () {
            $.mage.cookies.clear(this.options.cookieName);
        }
    });

    return $.boyko.askQuestionHandler;
});