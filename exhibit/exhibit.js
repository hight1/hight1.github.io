/**
 * Created by zz on 2017/7/6.
 */
angular.module('exhibit',['ng','ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/exhibit', {
            templateUrl: 'exhibit/exhibit.html',
            controller: 'exhibit'
        })
    }]).controller('exhibit', function($scope,$location) {
    $scope.goJi=function(){
        $location.url('/about');
    }
    $scope.goCon=function(){
        $location.url('/contact');
    }
    $scope.goTo=function(){
        $location.url('/index2')
    }
})