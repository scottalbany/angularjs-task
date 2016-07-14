/*global angular */
var afApp = angular.module('afApp', ['ngSanitize']);
afApp.controller('afController', function($scope, $window, $http) {
    "use strict";
    $scope.afData = [
        {
            "name":"Test Task #1",
            "date":"07/11/2016",
            "assigned":"John Doe"
        },
        {
            "name":"Test Task #2",
            "date":"07/11/2016",
            "assigned":"John Doe"
        },
        {
            "name":"Test Task #3",
            "date":"07/11/2016",
            "assigned":"John Doe"
        },
        {
            "name":"Test Task #4",
            "date":"07/11/2016",
            "assigned":"John Doe"
        },
        {
            "name":"Test Task #5",
            "date":"07/11/2016",
            "assigned":"John Doe"
        },
        {
            "name":"Test Task #6",
            "date":"07/11/2016",
            "assigned":"John Doe"
        },
        {
            "name":"Test Task #7",
            "date":"07/11/2016",
            "assigned":"John Doe"
        }
    ];
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