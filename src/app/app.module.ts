import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list'; // Importa el módulo


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './clinical/body/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { TopBarComponent } from './clinical/top-bar/top-bar.component';
import { RegisterComponent } from './clinical/body/register/register.component';
import { LoginComponent } from './clinical/body/login/login.component';
import { WelcomeComponent } from './clinical/body/welcome/welcome.component';
import { TopBarUserComponent } from './clinical/top-bar-user/top-bar-user.component';
import { SnapComponent } from './snap/snap.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    RegisterComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    TopBarUserComponent,
    SnapComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
