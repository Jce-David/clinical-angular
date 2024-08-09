import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ErrorDetail, ServerResponse, User } from 'src/app/model/types';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EndpointService } from 'src/app/services/endpoint/endpoint.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor( private endpointService: EndpointService, private router: Router, private authService: AuthService ){}

  user: User  = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: 1
  };
  message: string = '';
  errors: ErrorDetail [] = [];
  isSucces : boolean = false;
  onSubmit() {
    this.endpointService.registerUser(this.user).subscribe(
      (response: ServerResponse) => {
      
        if (response.errors && response.errors.length > 0) {
          this.errors = response.errors;
          console.log("Errores de validación:", response.errors);
          return;  
        }
  
        this.isSucces = true;
        this.message = response.message;
        console.log("El servidor respondió correctamente");
  
        this.router.navigate(['login']);

      },
      error => {

        this.isSucces = false;
        this.message = 'Ocurrió un error en el servidor.';
        if (error.error && error.error.Errors) {
          this.errors = error.error.Errors;
        }
        console.log("Error del servidor:", error);
      }
    );
  }
 
}
