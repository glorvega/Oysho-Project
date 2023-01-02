import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss'],
})
export class InputFilterComponent {
  @Input() input: string = '';
  @Output() onInputChange: EventEmitter<string> = new EventEmitter<string>();

  public inputChange(filter: Event) {
    const inputFilter = filter.target as HTMLInputElement;
    this.onInputChange.emit(inputFilter.value);
  }
}
