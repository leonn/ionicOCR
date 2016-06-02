(function() {
    'use strict';
    // Ionic OCR App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'OCR' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    angular.module('app', ['ionic', 'ngMaterial', 'ngCordova', 'app.home'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova) {
                if (window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }

                if (StatusBar && statusbarTransparent) {
                    // Enable translucent statusbar
                    statusbarTransparent.enable();

                    // Get the bar back
                    StatusBar.show();
                } else if (StatusBar) {
                    // Get the bar back
                    StatusBar.show();
                }
            }

        });
    })


    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
        $urlRouterProvider.otherwise('/home');
    });
})();
