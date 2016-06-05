(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$cordovaCamera', '$timeout'];

    /* @ngInject */
    function HomeController($scope, $cordovaCamera, $timeout) {
        var vm = this;

        angular.extend(vm, {
            image: '',

            getPicture: getPicture
        });

        activate();

        ////////////////////

        function activate() {

        }

        function getPicture(source) {
            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType[source], // Camera.PictureSourceType.PHOTOLIBRARY
                allowEdit: true,
                // encodingType: Camera.EncodingType.JPEG,
                // popoverOptions: CameraPopoverOptions,
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                vm.image = imageData;
                $timeout(function() {
                    $scope.$apply();
                }, 0)
            }, function(err) {
                console.log('::ERR::' + err);
            });
        }
    }
})();
