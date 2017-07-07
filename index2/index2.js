/**
 * Created by zz on 2017/7/4.
 */

angular.module('index2',['ng','ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index2', {
        templateUrl: 'index2/index2.html',
        controller: 'index2'
    })
}]).controller('index2', function() {
    (function() {

            $(".fakeloader").fakeLoader({
                timeToHide:1200,
                bgColor:"#3B2F29",
                spinner:"spinner2"
            });

        var headline = document.querySelector('.trigger-headline'),
            trigger = document.querySelector('.btn--trigger'),
            segmenter = new Segmenter(document.querySelector('.segmenter'), {
                pieces: 3,
                animation: {
                    duration: 1500,
                    easing: 'easeInOutExpo',
                    delay: 200,
                    translateZ: 100
                },
                parallax: true,
                positions: [
                    {top: 0, left: 0, width: 45, height: 45},
                    {top: 55, left: 0, width: 45, height: 45},
                    {top: 0, left: 55, width: 45, height: 45},
                    {top: 55, left: 55, width: 45, height: 45}
                ],
                onReady: function() {
                    segmenter.animate();
                    headline.classList.remove('trigger-headline--hidden');
                }
            });



    })();
});