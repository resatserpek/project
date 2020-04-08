import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { UrlPipe } from "../url.pipe";

const importModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NgxAudioPlayerModule
]

const exportModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NgxAudioPlayerModule,
  UrlPipe
]

@NgModule({
  declarations: [UrlPipe],
  imports: importModules,
  exports: exportModules
})
export class SharedModule { }
