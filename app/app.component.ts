import {Component} from '@angular/core';
import {Model, ToDoItems} from './model';

@Component({
  selector: 'todo-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent{
  model = new Model('Vlad');

  getName(){
    return this.model.user;
  }

  getToDoItems(){
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem){
    if(newItem != ''){
      this.model.items.push(new ToDoItems(newItem, false));
    }
  }
}