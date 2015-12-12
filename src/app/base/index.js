/**
 * Created by gkopevski on 10/28/15.
 */
'use strict';

var onAngularReady = function () {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['javaSkop']);
    });
};

var app = {
    initialize: function () {
        onAngularReady();
    }
};