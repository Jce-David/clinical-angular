import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './clinical/body/home/home.component';
import { RegisterComponent } from './clinical/body/register/register.component';
import { LoginComponent } from './clinical/body/login/login.component';
import { WelcomeComponent } from './clinical/body/welcome/welcome.component';
import { SnapComponent } from './snap/snap.component';


const routes: Routes = [
  {path: "", component: LoginComponent },
  {path: "login", component: LoginComponent },
  {path: "register", component: RegisterComponent },
  {path: "welcome", component: WelcomeComponent },
  {path: "home", component: HomeComponent },
  {path: "snap", component: SnapComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
