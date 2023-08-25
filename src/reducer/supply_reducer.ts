import { Action, State } from "../state/types";
export default function reducer(action: Action, state: State) {
  switch (action.type) {
    case "request":
      console.log("type: request, new request added = ", action.payload)
      console.log("new dispatch added to state")
      state.demands.push({ id: 2 })
      return { ...state }
    case "pooling":
      console.log("type: pooling, another request added = ", action.payload)
      console.log("pooling succeeded, changed route applied")
      state.supply.push({ id: 3 })
      return { ...state }
    default:
      console.log("no action matched")
      return { ...state }
  }
}
