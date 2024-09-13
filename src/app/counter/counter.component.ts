import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() bla: number | undefined;
  @Output() blaChange = new EventEmitter<number>();
  updateCount(amount: number): void {
    this.bla! += amount;
    this.blaChange.emit(this.bla);
  }
}
