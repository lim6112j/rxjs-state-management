/* eslint-disable @typescript-eslint/no-unused-vars */
import { StateStore } from './state/store';
import { actiontype } from './actions/action_types';
const stateStore = StateStore.getInstance()
stateStore.start();
stateStore.doAction({ type: actiontype.REQUEST, payload: "customer loc, time" })
stateStore.doAction({ type: actiontype.POOLING, payload: "changed route, time" })
