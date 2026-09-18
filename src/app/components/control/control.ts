import { Component, output } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control {
  public orderByNameClick = output<void>();
  public orderByIdClick = output<void>();
  public reverseClick = output<void>();


  public orderByName(): void {
    this.orderByNameClick.emit();
  }
  public orderById(): void {
    this.orderByIdClick.emit();
  }
  public reverse(): void {
    this.reverseClick.emit();
  }
}
