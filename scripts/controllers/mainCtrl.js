"use strict";
angular.module("chitChat").controller("mainCtrl",["$scope","modalService","message",function($scope,modalService,message){
    //Opens up model for input
    modalService.openModal();
    
    
}]);