export class Model {
  user;
  items;

  constructor(user){
    this.user = user;
    this.items = [new ToDoItems('Buy flowers', false),
      new ToDoItems('Get shoes', false),
      new ToDoItems('Call wife', false),
      new ToDoItems('To do the laundry', false),
      new ToDoItems('Walk the dog', false)
    ]
  }
}

export class ToDoItems{
  // action;
  // done;

  constructor(public action, public done){
    // this.action = action;
    // this.done = done;
  }
}