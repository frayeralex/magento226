define(['ko'], function(ko) {
    'use strict';

    var _store = {};

    function hasObservable(key) {
        return _store.hasOwnProperty(key);
    }

    function getObservable(key) {
        if (hasObservable(key)) {
            return _store[key];
        }
    }

    function setObservable(key, value) {
        if (!hasObservable(key)) {
            _store[key] = ko.observable(value);
            return getObservable(key);
        }
    }

    return {
        hasObservable: hasObservable,
        getObservable: getObservable,
        setObservable: setObservable
    };
});
