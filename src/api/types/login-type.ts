// 登录参数类型
export type loginParamsType = {
  account: string
  password: string
}
// 任务数据的请求参数类型
export type taskReportParamsType = {
  month: string | number
  year: string | number
}

// 请求用户信息接口
export type responseProfileType = {
  avatar: string
  name: string
  number: string
  phone: string
}

export type responseTaskReportType = {
  completedAmounts: number
  dailyMileage: DailyMileage[]
  taskAmounts: number
  transportMileage: number
}

// 里程
type DailyMileage = {
  dateTime?: string
  mileage?: number
}

// 返回车辆信息
export type responseTruckType = {
  allowableLoad: string
  currentOrganName: string
  id: string
  licensePlate: string
  pictureList: PictureList[]
  truckType: string
}

type PictureList = {
  url: string
}
