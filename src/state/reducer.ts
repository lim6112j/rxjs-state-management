import { Action } from "./types";

export function reducer(action: Action) {
  switch (action.type) {
    case "request":
      console.log("type: request, new request added = ", action.payload)
      console.log("new dispatch added to state")
      break;
    case "pooling":
      console.log("type: pooling, another request added = ", action.payload)
      console.log("pooling succeeded, changed route applied")
      break;
    default:
      console.log("no action matched")
      break;
  }
}
