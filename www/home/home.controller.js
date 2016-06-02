(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$cordovaCamera', '$cordovaFile'];

    /* @ngInject */
    function HomeController($scope, $cordovaCamera, $cordovaFile) {
        var vm = this;

        angular.extend(vm, {
            title: 'HOME',
            image: '',

            takeAShot: takeAShot
        });

        activate();

        ////////////////////

        function activate() {

        }

        function takeAShot() {
            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY, // Camera.PictureSourceType.PHOTOLIBRARY
                // allowEdit: false,
                // encodingType: Camera.EncodingType.JPEG,
                // popoverOptions: CameraPopoverOptions,
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                vm.image = imageData;
                console.log('LEO:::OK::' + imageData);
                $scope.$apply();
            }, function(err) {
                console.log('LEO:::ERR::' + err);
            });
        }
    }
})();
