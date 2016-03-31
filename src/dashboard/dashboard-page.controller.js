App.controller("DashboardPageController", [
  "$scope",
  "$timeout",
  function ($scope, $timeout) {

    $timeout(function () {

      $scope.people = [
        {name: "bob"},
        {name: "ed"}
      ];

    }, 2000);


    
  }
]);
