angular.module('starter.controllers', [])

.controller('ServersCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ServerDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AddServerCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
