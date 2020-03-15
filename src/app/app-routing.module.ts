import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  ProfileComponent } from './profile/profile.component'; 
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'discover', component: DiscoverComponent},
  { path: 'marketplace', component: MarketplaceComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'messages', component: ChatComponent},
  { path: 'questions', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, DiscoverComponent, MarketplaceComponent, QuestionsComponent, ProfileComponent]