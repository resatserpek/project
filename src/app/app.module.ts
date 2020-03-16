import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MarketplaceComponent } from '../components/marketplace/marketplace.component';
import { QuestionsComponent } from '../components/questions/questions.component';


import { PostCardComponent } from '../components/post-card/post-card.component';
import { PostCreateComponent } from '../components/post-create/post-create.component';
import { MaterialModule } from './material.module';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/user/auth.service';
import { ProfileComponent } from '../components/profile/profile.component';
import { ChatComponent } from '../components/chat/chat.component';
import { PostHandlerService } from 'src/services/post/post-handler.service';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    routingComponents,
    MarketplaceComponent,
    QuestionsComponent,
    PostCardComponent,
    PostCreateComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
