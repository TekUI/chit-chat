angular.module("chitChat").controller("modalCtrl",["$scope","$location","$uibModalInstance",function($scope,$location,$uibModalInstance){
    $scope.form={
        name:"",
        label:"Hello! What is your name?"
    };
    $scope.checkName = function(){
        if($scope.form.name.length!=0){
            return false;
        }
        else{
            return true;
        }
    }
    $scope.go=function(){
        $location.path("/chit.chat/chat").search({"name":$scope.form.name});
        $uibModalInstance.close();
    }
}])