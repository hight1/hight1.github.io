/**
 * Created by zz on 2017/7/5.
 */
angular.module('about',['ng','ngRoute','chart.js'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'about'
        })
    }]).controller('about', function($scope,$location) {


    $scope.labels=["Bootstrap","Non-bootstarp"];

    $scope.data=[90,10];
    $scope.color=['#f33e6f','#949fb1'];


    $scope.labels1=["Angular","Non-angular"];
    $scope.data1=[85,15];
    $scope.labels2=["Ionic","Non-ionic"];
    $scope.data2=[55,45];
    $scope.labels3=["React","Non-React"];
    $scope.data3=[60,40];
    $scope.labels4=["Node.js","Non-Node.js"];
    $scope.data4=[60,40];
    $scope.goTo=function(){
        $location.url("/index2");
    }
    $scope.goZuo=function(){
        $location.url("/exhibit");
    }





})