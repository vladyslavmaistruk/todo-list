"use strict";
var Model = (function () {
    function Model(user) {
        this.user = user;
        this.items = [new ToDoItems('Buy flowers', false),
            new ToDoItems('Get shoes', false),
            new ToDoItems('Call wife', false),
            new ToDoItems('To do the laundry', false),
            new ToDoItems('Walk the dog', false)
        ];
    }
    return Model;
}());
exports.Model = Model;
var ToDoItems = (function () {
    // action;
    // done;
    function ToDoItems(action, done) {
        this.action = action;
        this.done = done;
        // this.action = action;
        // this.done = done;
    }
    return ToDoItems;
}());
exports.ToDoItems = ToDoItems;
