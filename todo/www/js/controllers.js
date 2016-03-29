angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('TodoCtrl', function($scope, $http) {
   $scope.devList =
   {filter : '',
   todoList : [
    { text: "Todo 1", checked: true },
    { text: "Todo 2", checked: false },
    { text: "Todo 3", checked: false }
  ]};

  $scope.addTodo = function( todos ) {
    $scope.devList.todoList.push({text:todos.todotext, checked:false});
    todos.todotext = '';
  };
})

/*.controller('TodoCtrl', function($scope) {

  $scope.data = {
    showDelete: false
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.todoList.splice(fromIndex, 1);
    $scope.items.todoList.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };


  $scope.items =
   {filter : '',
   todoList : [
    { text: "Todo 1", checked: true },
    { text: "Todo 2", checked: false },
    { text: "Todo 3", checked: false }
  ]};
}) */

;
