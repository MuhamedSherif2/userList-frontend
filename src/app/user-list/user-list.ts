import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServices } from '../services/user-services';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
  users: User[] = [];

  constructor(private userService: UserServices) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        console.log('Full response:', res);
        console.log('Data received:', res.data);
        this.users = res.data;
        console.log('Users array updated:', this.users.length);
      },
      error: (error) => {
        console.error('Error loading users:', error);
      }
    });
  }
}