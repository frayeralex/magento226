define(['ko'], function(ko) {
    'use strict';

    var _store = {};

    function has(key) {
        return _store.hasOwnProperty(key);
    }

    function getObservable(key) {
        if (has(key)) {
            return _store[key];
        }
    }

    function setObservable(key, value) {
        if (!has(key)) {
            _store[key] = ko.observable(value);
            return getObservable(key);
        }
    }

    return {
        has: has,
        getObservable: getObservable,
        setObservable: setObservable
    };
});
