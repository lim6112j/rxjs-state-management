import { Subject } from 'rxjs';
import { Action, State } from '../types/types';
import { combined_reducer } from '../reducer/reducer';
export class StateStore {
  private static instance: StateStore;
  private _action: Subject<Action>;
  private _state: State = { supply: [{ id: 1 }], demands: [{ id: 1 }] };
  private constructor() {
    this._action = new Subject<Action>();
  }
  public static getInstance(): StateStore {
    if (!StateStore.instance) {
      StateStore.instance = new StateStore();
    }
    return StateStore.instance;
  }
  doAction(action: Action) {
    this._action.next(action)
  }
  start() {
    this._action.subscribe(data => {
      combined_reducer.forEach(reducer => {
        this._state = { ...reducer(data, this._state) }
        console.log(this._state)
      })
    })

  }
}
