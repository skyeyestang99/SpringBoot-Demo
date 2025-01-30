import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/UserSerivce.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  newName = '';
  newEmail = '';
  newPassword = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => console.error('Error fetching users:', err)
    });
  }

  createUser(): void {
    if (!this.newName || !this.newEmail) return;
    const user: User = {
      userName: this.newName,
      email: this.newEmail,
      password: this.newPassword
    };
    this.userService.createUser(user).subscribe({
      next: () => {
        this.newName = '';
        this.newEmail = '';
        this.newPassword = '';
        this.loadUsers();
      },
      error: (err) => console.error('Error creating user:', err)
    });
  }

  deleteUser(id: number): void {
    console.log("delete called")
    if (!id) return;
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.loadUsers();
      },
      error: (err) => console.error('Error deleting user:', err)
    });
  }
}
