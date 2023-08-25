/* eslint-disable @typescript-eslint/no-unused-vars */
import { Subject } from 'rxjs';
import { StateStore, States } from './state/state';
const statesSource = new Subject<States>();
const stateStore = StateStore.getInstance(statesSource)
stateStore.start();
statesSource.next([{ timestamp: 10, locs: [], demands: [] }])
statesSource.next([{ timestamp: 11, locs: [{ lng: 10, lat: 11 }], demands: [] }])
