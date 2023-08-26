
export type Loc = {
  timestamp?: number,
  lng: number,
  lat: number
}
export type ActionType = string
export type Action = {
  type: ActionType,
  payload: unknown
}
export type State = {
  supply: [
    {
      id: number,
      driving_distance?: number, // 단위시간 총 주행 거리
      capacity?: number,// 차량 탑승 가능 인원
      onboard_num?: number, //탑승인원
      plate_num?: string,
      actual_locs?: Loc[],
      waypoints?: Loc[]
    }
  ],
  demands: [
    {
      id: number,
      locs?: Loc[],
      request_time?: number,
      pickup_time?: number,
      drop_off_time?: number
    }
  ],
}
