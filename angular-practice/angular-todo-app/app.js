'use strict';
angular.module('todoApp', [])
        .controller('todoListCont', function ($scope) {
            var todoList = this;
            $scope.hello = "Hello Todo List";
            todoList.todos = [
                {text: 'learn Angular', done: true},
                {text: 'build and angular app', done: false}];
            todoList.addTodo = function () {
                todoList.todos.push({text: todoList.todoText, done: false});
                todoList.todoText = '';
            };
            todoList.remaining = function () {
                var count = 0;
                angular.forEach(todoList.todos, function (todo) {
                    count += todo.done ? 0 : 1;
                    count += todo.done ? false : true;
                });
                return count;
            };
            todoList.archive = function () {
                var oldTodos = todoList.todos;
                console.log("OldTodos " + oldTodos);
                todoList.todos = [];
                angular.forEach(oldTodos, function (todo) {
                    console.log("new todo " + todo);
                    console.log("new todo done " + todo.done);
                    if (!todo.done) {
                        todoList.todos.push(todo);
                    }
                });
            };
        });
//angular.bootstrap(document.body, ['todoApp']);  
// angular.bootstrap(document, ['todoApp']);  
angular.element(function () {
    angular.bootstrap(document.body, ['todoApp']);
});

