import { Subject } from 'rxjs';
import { Action } from './types';
import { reducer } from './reducer';
export class StateStore {
  private static instance: StateStore;
  private _action: Subject<Action>;
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
      reducer(data)
    })

  }
}
