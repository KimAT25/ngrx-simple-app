import { Action, createReducer, on } from '@ngrx/store';
import { ExampleAction } from './actions';

export interface State {
  count: number;
  message?: string;
  data?: any;
  dataLoading: boolean;
}

const initialState: State = {
  count: 0,
  dataLoading: false
};

export const exampleReducer = createReducer(
  initialState,
  on(ExampleAction.increaseCount, (state) => ({
    ...state,
    count: state.count + 1
  })),
  on(ExampleAction.sendMessage, (state, { message }) => ({
    ...state,
    message: message
  })),
  on(ExampleAction.getData, (state) => ({
    ...state,
    dataLoading: true
  })),
  on(ExampleAction.getDataSuccess, (state, { data }) => ({
    ...state,
    data,
    dataLoading: false
  }))
)

// export function reducer(state: State | undefined, action: Action) {
//   return exampleReducer(state, action);
// }
