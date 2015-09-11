foo.controller("HomeCtrl", function($scope) {
    $scope.state = 'Home State'
});
foo.controller("FamilyCtrl", ['$scope', 'FamilySvc', function($scope, FamilySvc) {
    $scope.family = FamilySvc.family

    $scope.rightTitle = "Family Title"

    $scope.selectPerson = function(selectedPerson) {
        _($scope.family).each(function(person) {
            person.selected = false;
            if (selectedPerson === person) {
                selectedPerson.selected = true;
            }
        });
    };
}]);

foo.controller("PersonCtrl", ['$scope', '$stateParams', 'FamilySvc',
  function($scope, $stateParams, FamilySvc) {
    $scope.personIndex =  $stateParams.personIndex;
    $scope.person = FamilySvc.family[$scope.personIndex];
}]);
