import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() count: number | undefined;
  @Output() countChange = new EventEmitter<number>();
  updateCount(amount: number): void {
    // @ts-ignore
    this.count += amount;
    this.countChange.emit(this.count);
  }
}
