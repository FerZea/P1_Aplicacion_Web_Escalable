import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private http = inject(HttpClient);
  private apiUrl = "https://jsonplaceholder.typicode.com/users";
  private _users: WritableSignal<User[]> = signal([]);
  public users = this._users.asReadonly();

  fetchUsers(): void {
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (response: User[]) => {
        const usersWhitImages = response.map(user => ({
          ...user,
          image: "https://i.pravatar.cc/150?img=11",
        }))
        this._users.set(usersWhitImages);

      },
      error: (error) => {
        console.error(error);
      },
    })
  }

  private searchValue = signal('');
  private nextId = Math.max(0, ...this._users().map(user => user.id)) + 1;

  public filteredUsers = computed(() =>
    this.users().filter(user =>
      user.name.toLowerCase().includes(this.searchValue())
    )
  );


  public orderByName(): void {
    this._users.update(users => [...users].sort((a, b) => a.name.localeCompare(b.name)));
  }

  public orderById(): void {
    this._users.update(users => [...users].sort((a, b) => a.id - b.id));
  }

  public reverse(): void {
    this._users.update(users => [...users].reverse());
  }

  public deleteUser(id: number): void {
    this._users.update(users => users.filter(user => user.id !== id));
  }

  search(value: string): void {
    this.searchValue.set(value.trim().toLowerCase());
  }

  addUser(newUser: User): void {
    this.http.post<User>(this.apiUrl, newUser).subscribe({
      next: (newUser: User) => {
        // this._users.update(
        //   users => [...users, newUser]
        // );
        console.log(newUser);
      },
      error: (error) => {
        console.log("Error al crear el usuario", error);
      }
    })
  }















}
