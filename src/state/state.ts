import { Subject, Observable } from 'rxjs';
type Loc = {
  lng: number,
  lat: number
}
export type States = State[]
export type State = {
  timestamp?: number,
  locs: Loc[],
  demands: [{ id: number, locs: Loc[] }?]
}
export class StateStore {
  private static instance: StateStore;
  private _states: Subject<States>;
  private _statesUpdated$: Observable<States>;
  private constructor(states: Subject<States>) {
    this._states = states;
    this._statesUpdated$ = this._states.asObservable()
  }
  public static getInstance(states: Subject<States>): StateStore {
    if (!StateStore.instance) {
      StateStore.instance = new StateStore(states);
    }
    return StateStore.instance;
  }
  getStatesSource() { return this._states; }
  updateStates(states: States) {
    this._states.next(states);
  }
  start() {
    this._statesUpdated$.subscribe(data => {
      console.log(data)
    })

  }
}
