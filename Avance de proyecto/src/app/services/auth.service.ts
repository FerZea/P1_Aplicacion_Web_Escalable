import { Injectable, WritableSignal, signal } from '@angular/core';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { id: 1, name: 'Demo user', email: 'user@freehub.demo', role: 'user' },
    { id: 2, name: 'Demo admin', email: 'admin@freehub.demo', role: 'admin' },
  ];

  private currentUser: WritableSignal<User | null> = signal(null);

  user = this.currentUser.asReadonly();

  logout(): void {
    this.currentUser.set(null);
  }
}
