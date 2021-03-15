import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSearchRoutingModule } from './image-search-routing.module';
import { ImageSearchComponent } from './image-search.component';
import {FormComponent} from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ImageSearchComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ImageSearchRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ImageSearchModule { }
