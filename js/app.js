var app = angular.module('todo', ['ionic']);

app.controller('TodoCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];

  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

});

