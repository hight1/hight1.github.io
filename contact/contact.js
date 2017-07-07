/**
 * Created by zz on 2017/7/6.
 */
angular.module('contact',['ng','ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'contact'
        })
    }]).controller('contact', function($scope,$location) {
    $scope.goTo=function(){
        $location.url('/main');
    }
    $scope.goZuo=function(){
        $location.url('/exhibit');
    }

})
