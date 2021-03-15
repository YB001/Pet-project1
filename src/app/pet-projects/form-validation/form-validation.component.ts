import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.sass']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  form: FormGroup
  canShowKitty = false

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      checkbox: new  FormControl( '', Validators.requiredTrue),
      mathematic: new FormControl('', [Validators.required, Validators.min(6), Validators.max(6)])
    })
  }

}
