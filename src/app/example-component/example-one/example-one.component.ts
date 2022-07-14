import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleAction } from '../../store/actions';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent {
  message: string;

  constructor(private store: Store) { }

  increaseCount(): void {
    this.store.dispatch(ExampleAction.increaseCount());
  }

  sendMessage(): void {
    this.store.dispatch(ExampleAction.sendMessage({ message: this.message } ))
  }
}
