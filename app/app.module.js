/*global angular */
var afApp = angular.module('afApp', ['ngSanitize']);
afApp.controller('afController', function($scope, $window, $http) {
    "use strict";
    $scope.afQuery = $http.get("../assets/data/data.json").success(
        function(data) {
            $scope.afData = data;
        });
    $scope.newTask = [];
    $scope.addTask = function() {
        $scope.newTask.push({
            'name': $scope.name,
            'date': $scope.date,
            'assigned': $scope.assigned
        });
        $scope.name = '';
        $scope.date = '';
        $scope.assigned = '';
    };
});