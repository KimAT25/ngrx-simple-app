import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ExampleSelector } from '../../store/selectors';
import { ExampleAction } from '../../store/actions';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent implements OnInit {
  count$: Observable<number>;
  message$: Observable<string>;
  spinner$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.setCount();
    this.setMessage();
    this.setData();
  }

  setCount(): void {
    this.count$ = this.store.select(ExampleSelector.count);
  }

  setMessage(): void {
    this.message$ = this.store.select(ExampleSelector.message);
  }

  getDataFromAPI(): void {
    this.store.dispatch(ExampleAction.getData());
  }

  setData(): void {
    this.spinner$ = this.store.select(ExampleSelector.dataLoadingStatus);
    this.store.select(ExampleSelector.getAllData).subscribe(data => console.log(data));
  }
}
