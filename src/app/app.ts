import { Component, signal, WritableSignal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './interfaces/user.interface';
import { UserCard } from "./components/user-card/user-card";
import { Control } from './components/control/control';

@Component({
  selector: 'app-root',
  imports: [UserCard, Control],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Directorio');

  public users: WritableSignal<User[]> = signal<User[]>(
    [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "LeGra",
      "email": "legra@gmail.com",
      "image": "https://i.pravatar.cc/150?img=1"
    },
    {
      "id": 2,
      "name": "Carlos Mendoza",
      "username": "CarMen",
      "email": "cmendoza@yahoo.com",
      "image": "https://i.pravatar.cc/150?img=11"
    },
    {
      "id": 3,
      "name": "Sofia Reyes",
      "username": "SofiR",
      "email": "sreyes@hotmail.com",
      "image": "https://i.pravatar.cc/150?img=5"
    },
    {
      "id": 4,
      "name": "David Smith",
      "username": "DaveS",
      "email": "dsmith@gmail.com",
      "image": "https://i.pravatar.cc/150?img=12"
    },
    {
      "id": 5,
      "name": "Lucía Fernández",
      "username": "LuFer",
      "email": "lucia.fer@empresa.com",
      "image": "https://i.pravatar.cc/150?img=9"
    },
    {
      "id": 6,
      "name": "Mateo López",
      "username": "MattL",
      "email": "mlopez99@gmail.com",
      "image": "https://i.pravatar.cc/150?img=15"
    },
    {
      "id": 7,
      "name": "Elena Martínez",
      "username": "EleMar",
      "email": "elena.martinez@outlook.com",
      "image": "https://i.pravatar.cc/150?img=20"
    }
    ]);

  public orderByName(): void {
    this.users.update(users => users.sort((a, b) => a.name.localeCompare(b.name)));
  }
  public orderById(): void {
    this.users.update(users => users.sort((a, b) => a.id - b.id));
  }
  public reverse(): void {
    this.users.update(users => users.reverse());
  }

  public deleteUser(id: number): void {
    this.users.update(users => users.filter(user => user.id != id));
  }

  userCounter = computed(() => this.users().length);

}
