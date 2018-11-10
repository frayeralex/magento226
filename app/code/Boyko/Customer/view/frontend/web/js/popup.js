define(['jquery', 'Magento_Ui/js/modal/modal'], function ($, modal) {
    'use strict';

    return function(config, element) {
        const $btn = $(element);
        const $cloneForm = $('.form-create-account').clone();

        const popup = modal({
            type: 'popup',
            responsive: true,
            innerScroll: true,
            title: $.mage.__('Registration for dealer'),
            buttons: [
                {
                    text: $.mage.__('Close'),
                    class: 'action primary',
                    click: function () {
                        this.closeModal();
                    }
                }
            ]
        }, $cloneForm);

        $btn.on('click', function () {
            popup.openModal();
        });
    }
});

