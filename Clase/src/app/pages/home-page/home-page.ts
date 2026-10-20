import { Component, inject, OnInit } from '@angular/core';
import { UserCard } from '../../components/user-card/user-card';
import { Control } from '../../components/control/control';
import { UsersService } from '../../services/user-services';

@Component({
  selector: 'app-home-page',
  imports: [UserCard, Control],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private usersService = inject(UsersService);
  public users = this.usersService.filteredUsers;

  ngOnInit(): void {
    this.usersService.fetchUsers();
  }

  public orderByName(): void {
    this.usersService.orderByName();
  }

  public orderById(): void {
    this.usersService.orderById();
  }

  public reverse(): void {
    this.usersService.reverse();
  }

  public search(value: string): void {
    this.usersService.search(value);
  }

  public deleteUser(id: number): void {
    this.usersService.deleteUser(id);
  }
}
