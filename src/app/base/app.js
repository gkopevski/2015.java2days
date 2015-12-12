(function () {
    'use strict';


    var java2days = angular.module('java2days', []);
    var modules = [
        'ui.router',
        'ngAnimate',
        'java2days.table',
        'java2days.dessert',
        'java2days.meal',
        'java2days.starter'
    ];
    for (var index = 0, module; module = modules[index]; index++) {
        angular.module('java2days').requires.push(module);
    };
    angular.module('java2days').config([
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
