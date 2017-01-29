// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {

    $scope.tagline = 'To the moon and back!';
    $scope.positions = ['Goalkeper','Defender','Midfielder','Forward'];
    $scope.myFunction = function(){
    	console.log($scope.position);
    	console.log($scope.date);
    	console.log($scope.time1);
    };
});