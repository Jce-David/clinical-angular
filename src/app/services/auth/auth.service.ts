import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../model/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor() {
    // Inicializa el BehaviorSubject con el usuario almacenado en localStorage, si existe
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    console.log("Token almacenado", token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
    console.log('Token eliminado');
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
    // Almacena el usuario en localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log('Usuario actual establecido:', user);
  }

  clearCurrentUser(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    console.log('Usuario actual eliminado');
  }
}
