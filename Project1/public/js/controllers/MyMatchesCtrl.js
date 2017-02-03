angular.module('MyMatchesCtrl',[]).controller('MyMatchesController', function($scope, $http){
	$scope.positions = ['Goalkeper','Defender','Midfielder','Forward'];
	$scope.times = ['12:00 - 14:00','14:00 - 16:00','16:00 - 18:00','18:00 - 20:00', '20:00 - 22:00'];

	$http.get('/myMatches').then(function(response){
		$scope.myMatches = response.data;
	})
	
	$scope.find = function(myMatch) {
		document.getElementById("editForm").style.display="block";
		$scope.identifier = myMatch._id;
		$scope.position = myMatch.position;
		$scope.date = new Date(myMatch.date);
		$scope.time1 = myMatch.time
	}
	$scope.delete = function(id) {
		$http.post('/deleteMatch/' + id);
    	$http.get('/myMatches').then(function(response){
			$scope.myMatches = response.data;
		})
	}

})
