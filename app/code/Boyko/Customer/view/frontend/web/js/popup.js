define(['jquery', 'Magento_Ui/js/modal/modal'], function($, modal) {
    'use strict';

    return function(config, element, data) {
        var $btn = $(element),
            prefix = data && data.prefix ? data.prefix : 'clone',
            $cloneForm = $('.form-create-account').clone();
        $cloneForm.attr('id', prefix + '-' + 'form-create-account');

        $cloneForm.find('[id]').each(function(index, element) {
            var $element = $(element),
                id = $(element).attr('id'),
                name = $element.attr('name');

            $element.attr('id', prefix + '_' + id);
            if (name) {
                $element.attr('name', prefix + '_' + name);
            }
        });
        $cloneForm.find('[for]').each(function(index, element) {
            var $element = $(element),
                htmlFor = $(element).attr('for');

            $element.attr('for', prefix + htmlFor);
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
            var modal = popup.openModal();
            $.initFormValidation($cloneForm);
            modal.trigger('contentUpdated');
        });
    };
});
