import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { NgxAudioPlayerModule } from 'ngx-audio-player';


import { UrlPipe } from "../url.pipe";
import { PostCardComponent } from 'src/app/shared/post-card/post-card.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ArrayPipe } from '../array.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const importModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NgxAudioPlayerModule,
  SharedRoutingModule,
  MatProgressSpinnerModule
]

const exportModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NgxAudioPlayerModule,
  UrlPipe,
  PostCardComponent,
  SharedRoutingModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [UrlPipe,PostCardComponent, ArrayPipe],
  imports: importModules,
  exports: exportModules,
  providers:[]
})
export class SharedModule { }
