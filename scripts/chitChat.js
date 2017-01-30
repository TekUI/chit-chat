"use strict";
angular.module("chitChat",['ui.router','ui.bootstrap'])
    .config(['$locationProvider','$stateProvider','$urlRouterProvider',function($locationProvider,$stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/chit.chat");
        
        $stateProvider.state('error',{
            url:"/error",
            templateUrl: '/views/error.html'
        }).state("chat",{
            url:"/chit.chat/chat",
            templateUrl:'/views/chat.html',
            controller:'chatCtrl'
        });
       
    }]);

angular.module("chitChat").directive('keyEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.keyEnter);
                });

                event.preventDefault();
            }
        });
    };
});

angular.module('chitChat').directive('scrollBottom', ['$timeout', function ($timeout) {
  return {
    scope: {
      scrollBottom: "="
    },
    link: function ($scope, $element) {
      $scope.$watchCollection('scrollBottom', function (newValue) {
        if (newValue) {
          $timeout(function(){
              $element[0].scrollTop = $element[0].scrollHeight  
          }, 0);
        }
      });
    }
  }
}]);