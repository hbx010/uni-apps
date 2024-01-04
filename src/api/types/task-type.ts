// 任务列表接口所需要的参数类型
export type taskParamsType = {
  endTime?: string
  page: number
  pageSize: number
  startTime?: string
  status: number
  transportTaskId?: string
}
// 任务列表接口返回数据所需要的类型
export type taskResponseType = {
  counts: number
  items: TaskItemType[] | null
  page: number
  pages: number
  pageSize: number
}

export type TaskItemType = {
  actualArrivalTime: string
  actualDepartureTime: string
  created: string
  driverId: string
  enablePickUp: boolean
  endAddress: string
  endAgencyId: number
  finishHandover: string
  id: string
  planArrivalTime: string
  planDepartureTime: string
  startAddress: string
  startAgencyId: number
  startHandover: string
  status: string
  transportTaskId: string
}
type CargoPickUpPictureList = {
  url: string
}

type CargoPictureList = {
  url: string
}

type CertificatePictureList = {
  url: string
}

type DeliverPictureList = {
  url: string
}
type ExceptionList = {
  exceptionDescribe: string
  exceptionImagesList: ExceptionImagesList[]
  exceptionPlace: string
  exceptionTime: string
  exceptionType: string
  handleResult: string
}

type ExceptionImagesList = {
  url: string
}
