// 登录参数类型
export type loginParamsType = {
  account: string
  password: string
}
export type taskReportParamsType = {
  month: string | number
  year: string | number
}

// 请求用户信息接口返回的数据类型
export type responseProfileType = {
  avatar: string
  name: string
  number: string
  phone: string
}

// 请求任务数据返回的数据类型
export type responseTaskReportType = {
  completedAmounts: number
  dailyMileage: DailyMileage[]
  taskAmounts: number
  transportMileage: number
}

// 日里程,基于实际完成时间统计数据类型
type DailyMileage = {
  dateTime?: string
  mileage?: number
}

// 请求返回车辆信息数据类型
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
