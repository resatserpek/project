import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { DiscoverComponent } from '../components/discover/discover.component';
import { MarketplaceComponent } from '../components/marketplace/marketplace.component';
import { QuestionsComponent } from '../components/questions/questions.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProfileComponent } from '../components/profile/profile.component'; 

import { AuthGuard } from 'src/services/auth/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},

  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),    
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },

  { 
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverModule),
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard], 
    canLoad:[AuthGuard]
  },
  { 
    path: 'marketplace', 
    loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]    
  },
  { 
    path: 'messages',
    loadChildren: () => import('./chat-app/chat-app.module').then(m => m.ChatAppModule),
    canActivate: [AuthGuard], 
    canLoad: [AuthGuard]
  },
  { path: 'questions', component: QuestionsComponent},
  { 
    path: ':id', 
    loadChildren: () => import('./userpage/userpage.module').then(m => m.UserpageModule),
    pathMatch: 'full',
    canActivate: [AuthGuard], 
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, DiscoverComponent, MarketplaceComponent, QuestionsComponent, ProfileComponent]