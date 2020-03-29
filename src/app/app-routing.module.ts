import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { DiscoverComponent } from '../components/discover/discover.component';
import { MarketplaceComponent } from '../components/marketplace/marketplace.component';
import { QuestionsComponent } from '../components/questions/questions.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProfileComponent } from '../components/profile/profile.component'; 
import { ChatComponent } from '../components/chat/chat.component';
import { AuthGuard } from 'src/services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'discover', component: DiscoverComponent},
  { path: 'marketplace', component: MarketplaceComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], canLoad:[AuthGuard]},
  { path: 'messages', component: ChatComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'questions', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, DiscoverComponent, MarketplaceComponent, QuestionsComponent, ProfileComponent]