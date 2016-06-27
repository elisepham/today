app.controller('RegisterController', function($scope, UtilService) {
	$scope.countries = UtilService.getCountries();
	$scope.countryId = $scope.countries[0].id;
	$scope.usStates = ["-Please Select(US only)-"];
	$scope.state = $scope.usStates[0];
	$scope.showUSStates = function() {
		
		if ($scope.countryId == "2"){
			$scope.usStates=$scope.usStates.concat( UtilService.getUSStates());
		}
		else{
			$scope.usStates = ["-Please Select(US only)-"];
			$scope.state = $scope.usStates[0];
		}

	};
	
	$scope.industries = ["-Please Select-", "Technology", "Health Care", "Finance"]
	$scope.industry = $scope.industries[0]; //initialized
});

