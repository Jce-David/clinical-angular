import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/types';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-top-bar-user',
  templateUrl: './top-bar-user.component.html',
  styleUrls: ['./top-bar-user.component.scss']
})
export class TopBarUserComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('Usuario actual:', this.currentUser);
    });
  }
}
