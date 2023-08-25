/* eslint-disable @typescript-eslint/no-unused-vars */
import { StateStore } from './state/state';
const stateStore = StateStore.getInstance()
stateStore.start();
stateStore.doAction({ type: "request", payload: "customer loc, time" })
stateStore.doAction({ type: "pooling", payload: "changed route, time" })
stateStore.doAction({ type: "nothing", payload: "world" })
