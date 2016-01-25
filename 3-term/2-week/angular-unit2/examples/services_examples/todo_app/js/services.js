angular.module('todoApp').service('todoService', function(){
  var todos = []
  return {
    getTodos: function(){
      return todos;
    },
    addTodo: function(todo){
      todo.editFormShowing = false;
      todos.push(todo);
    },
    editTodo: function(index,todo){
      todos[index].task = todo.task
      todos[index].editFormShowing = false
    },
    removeTodo: function(index){
      todos.splice(index, 1);
    }
  }
})