// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', function($scope) {
	console.log("mundo");
    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.myFunction = function(){
    	console.log("you press save");
    };
});