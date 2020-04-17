import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { NgxAudioPlayerModule } from 'ngx-audio-player';


import { UrlPipe } from "../url.pipe";
import { PostCardComponent } from 'src/app/shared/post-card/post-card.component';
import { SharedRoutingModule } from './shared-routing.module';


const importModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NgxAudioPlayerModule,
  SharedRoutingModule
]

const exportModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NgxAudioPlayerModule,
  UrlPipe,
  PostCardComponent,
  SharedRoutingModule
]

@NgModule({
  declarations: [UrlPipe,PostCardComponent],
  imports: importModules,
  exports: exportModules,
  providers:[]
})
export class SharedModule { }
