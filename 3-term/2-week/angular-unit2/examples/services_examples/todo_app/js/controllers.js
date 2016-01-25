angular.module("todoApp").controller("TodoController", ["$scope", "todoService", function($scope, todoService){

  $scope.todos = todoService.getTodos();

  $scope.toggleEditForm = function(todo){
    todo.editFormShowing = !todo.editFormShowing;
  }

  $scope.addTodo = function(todo){
    // clear form values and validations
    $scope.todoForm.$setPristine()
    todoService.addTodo(todo);
    $scope.todo = {}
  }

  $scope.editTodo = function(idx, todo){
    todoService.editTodo(idx, todo);
  }

  $scope.removeTodo = function(todo){
    todoService.removeTodo(todo);
  }
}]);
