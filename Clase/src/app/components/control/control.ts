import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  imports: [ReactiveFormsModule],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control {

  orderByName = output<void>();
  orderById = output<void>();
  reverse = output<void>();
  search = output<string>();

  searchControl = new FormControl("");

  onSearch(): void {
    this.search.emit(this.searchControl.value ?? "");
  }

}
