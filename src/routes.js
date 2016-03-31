App.config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('dashboard', {
      url: "/",
      templateUrl: "src/dashboard/dashboard-page.html",
      controller: "DashboardPageController"
    });

    //TODO:
    // web-sockets
    // web-workers
  }
]);
