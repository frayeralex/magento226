define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'passwordStrengthIndicator'
], function($, modal, passwordStrengthIndicator) {
    'use strict';

    return function(config, element, data) {
        var $btn = $(element),
            prefix = data && data.prefix ? data.prefix : 'clone',
            $cloneForm = $('.form-create-account').clone();

        $cloneForm.attr('id', prefix + '-' + 'form-create-account');
        $cloneForm.removeClass('form-create-account');
        $cloneForm.addClass(prefix + '-' + 'form-create-account');

        $cloneForm.find('.field.password').each(function(index, node) {
            var $element = $(node);

            $element.removeClass('password');
            $element.addClass(prefix + '-' + 'password');
        });

        $cloneForm.find('[id]').each(function(index, node) {
            var $element = $(node),
                id = $(node).attr('id'),
                name = $element.attr('name');

            $element.attr('id', prefix + '_' + id);
            if (name) {
                $element.attr('name', prefix + '_' + name);
            }
        });
        $cloneForm.find('[for]').each(function(index, node) {
            var $element = $(node),
                htmlFor = $(node).attr('for');

            $element.attr('for', prefix + '_' + htmlFor);
        });

        var popup = modal(
            {
                type: 'popup',
                responsive: true,
                innerScroll: true,
                title: $.mage.__('Registration for dealer'),
                buttons: [
                    {
                        text: $.mage.__('Close'),
                        class: 'action primary',
                        click: function() {
                            this.closeModal();
                        }
                    }
                ]
            },
            $cloneForm
        );

        $btn.on('click', function() {
            var modalInstance = popup.openModal();

            $.initFormValidation($cloneForm);
            modalInstance.trigger('contentUpdated');

            passwordStrengthIndicator(
                {
                    formSelector: '#' + prefix + '-' + 'form-create-account'
                },
                $cloneForm.find('.' + prefix + '-' + 'password')
            );
        });
    };
});
