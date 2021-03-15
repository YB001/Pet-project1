import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Output() onAdd: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  form: FormGroup
  pagesNum = [10, 20, 50, 100]

  ngOnInit(): void {
    this.form = new FormGroup({
      searchField: new FormControl(''),
      perPages: new FormControl( `${this.pagesNum[1]}`)
    })
  }

  submit() {
    const field = this.form.value.searchField
    setTimeout(()=>{
      if(field == this.form.value.searchField){
        this.onAdd.emit(this.form)
        console.log('form.value',this.form.value)
      }
    },500)
  }
}
