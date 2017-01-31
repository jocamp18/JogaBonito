// public/js/controllers/NerdCtrl.js
angular.module('LoginCtrl', []).controller('LoginController', function($scope) {
    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.myFunction = function(){
    	console.log("you press save");
    };
});