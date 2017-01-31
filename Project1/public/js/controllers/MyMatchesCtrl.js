angular.module('MyMatchesCtrl',[]).controller('MyMatchesController', function($scope, $http){
	$http.get('/myMatches').then(function(response){
		$scope.myMatches = response.data;
	})
})
