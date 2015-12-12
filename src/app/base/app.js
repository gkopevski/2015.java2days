(function () {
    'use strict';


    var javaSkop = angular.module('javaSkop', []);
    var modules = [
        'ui.router',
        'ngAnimate',
        'javaSkop.table',
        'javaSkop.dessert',
        'javaSkop.meal',
        'javaSkop.starter'
    ];
    for (var index = 0, module; module = modules[index]; index++) {
        angular.module('javaSkop').requires.push(module);
    };
    angular.module('javaSkop').config([
            '$urlRouterProvider',
            '$stateProvider',
            function ($urlRouterProvider, $stateProvider) {
                $stateProvider
                    .state('table', {
                        url: '/table',
                        title: 'Table',
                        views: {
                            'content': {
                                templateUrl: 'app/views/table.tpl.html',
                                controller: 'TableController'
                            }
                        }
                    })
                    .state('dessert', {
                        url: '/dessert',
                        title: 'Dessert',
                        views: {
                            'content': {
                                templateUrl: 'app/views/dessert.tpl.html',
                                controller: 'DessertController'
                            }
                        }
                    })
                    .state('meal', {
                        url: '/meal',
                        title: 'Meal',
                        views: {
                            'content': {
                                templateUrl: 'app/views/meal.tpl.html',
                                controller: 'MealController'
                            }
                        }
                    })
                    .state('starter', {
                        url: '/starter',
                        title: 'Starter',
                        views: {
                            'content': {
                                templateUrl: 'app/views/starter.tpl.html',
                                controller: 'StarterController'
                            }
                        }
                    });

                $urlRouterProvider.otherwise('/table');
            }
        ]
    ).run(
        [function () {
        }]
    );

}());
