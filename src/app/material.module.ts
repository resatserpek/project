import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';


const modules = [
  CommonModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatProgressBarModule,
  MatSliderModule,
  MatGridListModule,
  ScrollingModule,
  MatTableModule,
  MatRadioModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }
