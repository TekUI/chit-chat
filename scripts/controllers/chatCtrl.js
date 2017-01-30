"use strict";
angular.module("chitChat").controller("chatCtrl",["$scope","$location","message",function($scope,$location,message){
    $scope.userName=$location.search().name;
    message.name = $scope.userName;
    $scope.chat={
        msg:"",
        postMsg:""
    }
    $scope.checkMessage = function(){
        if ($scope.chat.msg.length==0){
            return true;
        }
        return false;
    }
    $scope.sendMessage = function(){
        message.setChatHistory($scope.chat.msg)
        $scope.chat.postMsg = message.getChatHistory();
        $scope.chat.msg = "";
    }
    
}]);