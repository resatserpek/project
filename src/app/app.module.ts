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

import { ChatAppModule } from "./chat-app/chat-app.module";

import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';


import { AuthService } from '../services/user/auth.service';
import { ProfileComponent } from '../components/profile/profile.component';

import { ContactCardComponent } from '../components/contact-card/contact-card.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { DiscoverModule } from './discover/discover.module';

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
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    
    ChatAppModule,
    HomeModule,
    ChatAppModule,
    DiscoverModule,


    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
