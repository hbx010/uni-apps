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
export type responseTaskDetailType = {
  actualArrivalTime: string
  actualDepartureTime: string
  cargoPickUpPictureList: CargoPickUpPictureList[]
  cargoPictureList: CargoPictureList[]
  certificatePictureList: CertificatePictureList[]
  deliverPictureList: DeliverPictureList[]
  driverId: string
  driverName: string
  endAddress: string
  endAgencyId: string
  endCity: string
  endProvince: string
  exceptionList: ExceptionList[]
  finishHandoverName: string
  finishHandoverPhone: string
  id: string
  licensePlate: string
  planArrivalTime: string
  planDepartureTime: string
  startAddress: string
  startAgencyId: string
  startCity: string
  startHandoverName: string
  startHandoverPhone: string
  startProvince: string
  status: number
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
