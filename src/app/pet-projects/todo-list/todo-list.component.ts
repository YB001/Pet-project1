import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface Msgs {
  text: string
  isDone: boolean
  isImportant: boolean
  postDate: Date
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      inputField: new FormControl('', Validators.required)
    })
  }

  inputValue: string = "";
  message: string = "";
  arr: Array<Msgs> = [];
  todoForm: FormGroup;

  onInput(event) {
    this.inputValue = event.target.value;
  }

  deleteMsg(i) {
    this.arr.splice(i, 1);
  }

  toggleImportant(i) {
    this.arr[i].isImportant = !this.arr[i].isImportant;
    this.arr[i].isDone = false
  }

  toggleDone(i) {
    this.arr[i].isDone = !this.arr[i].isDone;
    this.arr[i].isImportant = false
  }

  submit() {
    if (this.todoForm.value.inputField.trim()){
      let msg: Msgs = {
        text: this.todoForm.value.inputField,
        isDone: false,
        isImportant: false,
        postDate: new Date()
      }
      this.todoForm.reset()
      this.arr.push(msg);
    }
  }
}
