import { EntriesComponent } from './components/accountElements/entries/entries.component';
import { DashboardComponent } from './components/accountElements/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AccountComponent } from './components/account/account.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"register",
    component: RegistrationComponent
  },
  {
    path:"landing",
    component: LandingPageComponent
  },
  {
    path:"account",
    component: AccountComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'entries',
        component: EntriesComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'/landing',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
