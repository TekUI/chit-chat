"use strict";
angular.module("chitChat").service("modalService",["$uibModal",function($uibModal){
    this.openModal=function(){
        var modalInstance = $uibModal.open({
            controller:"modalCtrl",
            templateUrl: '/views/modal.html',
            backdrop:'static',
            keyboard:false
        }); 
    }
}]);