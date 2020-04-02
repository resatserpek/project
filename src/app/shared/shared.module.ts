import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule

]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class SharedModule { }
