import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { QuestionsComponent } from './questions/questions.component';


import { PostCardComponent } from './post-card/post-card.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { MaterialModule } from './material.module';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/user/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
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
