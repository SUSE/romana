/* global define */
(function() {
    'use strict';
    define(['lodash'], function() {
        var NavbarController = function($log, $scope) {
            $scope.navbarTemplate = 'views/breadcrumb.html';
            $scope.title = {
                dashboard: 'Dashboard',
                bench: 'Workbench',
                chart: 'Charts',
                manage: 'Manage'
            };
            $scope.dashboard = function() {
                document.location = '/dashboard/';
            };
            $scope.workbench = function() {
                document.location = '/dashboard/?target=workbench';
            };
            $scope.graph = function() {
                document.location = '/dashboard/?target=graph';
            };
        };
        return ['$log', '$scope', NavbarController];
    });

})();
