import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetProjectsComponent } from './pet-projects.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ImageSearchComponent} from './image-search/image-search.component';
import {FormValidationComponent} from './form-validation/form-validation.component';

const routes: Routes = [{ path: '', component: PetProjectsComponent, children: [
    {path: 'image_search', component: ImageSearchComponent},
    {path: 'todo_list', component: TodoListComponent},
    {path: 'form_validation', component: FormValidationComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetProjectsRoutingModule { }
