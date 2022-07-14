import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { AppServiceService } from '../services/app-service.service';
import { ExampleAction} from './actions';

@Injectable()
export class ExampleEffects {
  loadData$ = createEffect(() => this.actions.pipe(
    ofType(ExampleAction.getData),
    mergeMap(() => this.appServiceService.getData()
      .pipe(
        map(data => ExampleAction.getDataSuccess({ data })),
        catchError(() => EMPTY)
      ))
  ))
  constructor(
    private appServiceService: AppServiceService,
    private actions: Actions
  ) {}
}
