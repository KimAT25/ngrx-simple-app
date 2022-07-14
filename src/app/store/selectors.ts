import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducer';

export namespace ExampleSelector {
  export const state = createFeatureSelector<State>('example');

  export const count = createSelector(state, (state) => state.count);
  export const message = createSelector(state, (state) => state.message!);

  export const dataLoadingStatus = createSelector(state, (state) => state.dataLoading);
  export const getAllData = createSelector(state, (state) => state.data);
}
