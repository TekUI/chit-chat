"use strict";
angular.module("chitChat").service("message",[function(){
    var chatHistory=[];
    var _this = this;
    this.name="";
    
    this.setChatHistory=function(msg){
        if (msg.length!=0){
            chatHistory.push(_this.name+": "+msg);
            chatHistory.push("Echo Bot: "+msg);    
        }
        
    };
    this.getChatHistory=function(){
        return chatHistory;
    };
    this.parseChatHistory = function(){
        return chatHistory.join("\n");     
    };

}]);