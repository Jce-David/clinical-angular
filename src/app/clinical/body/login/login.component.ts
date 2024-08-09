import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse, ServerResponse, User } from 'src/app/model/types';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EndpointService } from 'src/app/services/endpoint/endpoint.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private endpointService: EndpointService,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    this.endpointService.loginUser(this.email, this.password).subscribe(
     (response: LoginResponse ) => {
  
      if( response.isSucces ===false ){
        this.message = response.message
        console.log("Mal inicio")
      }

          console.log("Inicio de sesion exitoso")
          try {
            const decodedToken: any = jwtDecode(response.data);
            const user: User = { 
              firstName: decodedToken.given_name,
              lastName: decodedToken.family_name,
              email: decodedToken.email || this.email,
              password: '',
              roleId: decodedToken.role_id || 1 
            };
            this.authService.setToken(response.data);
            this.authService.setCurrentUser(user);
            
            console.log('Inicio de sesión exitoso:', user);
            this.router.navigate(['welcome']);
          } catch (error) {
      
            this.message = response.message;
          }
      },
          error => {
            this.message = 'Ocurrió un error en el servidor.';
            console.log("Error", error)
          }
     );
  }
}