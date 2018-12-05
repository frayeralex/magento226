define(['jquery', 'uiComponent', 'ko', 'Boyko_Timer/js/storage'], function(
    $,
    Component,
    ko,
    storage
) {
    'use strict';
    var self;

    return Component.extend({
        initialize: function() {
            self = this;
            self._super();
            self._incrementTimeTimeout = null;

            self.timer = self.initStoreObservable('time', 0);
            self.step = self.initStoreObservable('step', 1);
            self.timeout = self.initStoreObservable('timeout', 1000);

            self.incrementTime();
        },

        initStoreObservable: function(name, value) {
            return storage.hasObservable(name)
                ? storage.getObservable(name)
                : storage.setObservable(name, value);
        },

        incrementTime: function() {
            self._incrementTimeTimeout = setTimeout(function() {
                self.timer(self.timer() + Number(self.step()));
                self.incrementTime();
            }, Number(self.timeout()) || 1000);
        },

        stopTimer: function() {
            clearTimeout(self._incrementTimeTimeout);
        }
    });
});
