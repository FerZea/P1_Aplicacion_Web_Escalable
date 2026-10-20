import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user-services';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-create-user-page',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user-page.html',
  styleUrl: './create-user-page.css',
})
export class CreateUserPage {
  private usersService = inject(UsersService);
  private router = inject(Router);

  userForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    image: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const newUser: User = {
      id: 0,
      name: this.userForm.controls.name.value,
      username: this.userForm.controls.username.value,
      email: this.userForm.controls.email.value,
      image: this.userForm.controls.image.value,
    };

    this.usersService.addUser(newUser);
    this.usersService.search('');
    this.userForm.reset();
    void this.router.navigate(['/home']);
  }
}
