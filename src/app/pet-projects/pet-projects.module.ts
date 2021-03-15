import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetProjectsRoutingModule } from './pet-projects-routing.module';
import { PetProjectsComponent } from './pet-projects.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormValidationComponent } from './form-validation/form-validation.component';


@NgModule({
  declarations: [
    PetProjectsComponent,
    TodoListComponent,
    FormValidationComponent
  ],


    imports: [
        CommonModule,
        PetProjectsRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class PetProjectsModule { }
