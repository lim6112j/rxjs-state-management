export type Action = {
  type: string,
  payload: string
}
export type Loc = {
  timestamp?: number,
  lng: number,
  lat: number
}
export type State = {
  supply: [{ id: number, plate_num: string, actual_locs: Loc[], waypoints: Loc[] }],
  demands: [{ id: number, locs: Loc[], request_time: number, pickup_time: number, drop_off_time: number }]
}
