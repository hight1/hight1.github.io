/**
 * Created by zz on 2017/7/4.
 */
angular.module('mySite', [
    'ngRoute','ngAnimate',
'ionic',
    'ng','index2','about','exhibit','contact'


]).config(function($routeProvider){    //配置路由字典，指定路由地址<=>模板页面对应关系
    $routeProvider.otherwise({ //若URL未提供路由地址/提供了不存在的路由地址
        redirectTo: '/index2'
    });
});