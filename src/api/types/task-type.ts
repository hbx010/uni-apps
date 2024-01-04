// 任务列表接口所需要的参数类型
export type taskParamsType = {
  /**
   * 结束时间
   */
  endTime?: string
  /**
   * 页码
   */
  page: number
  /**
   * 页面大小
   */
  pageSize: number
  /**
   * 开始时间
   */
  startTime?: string
  /**
   * 作业状态，1为待提货）、2为在途(在途和已交付)、3为改派、5为已作废、6为已完成（已回车登记）
   */
  status: number
  /**
   * 运输任务id
   */
  transportTaskId?: string
}
// 任务列表接口返回数据所需要的类型
export type taskResponseType = {
  /**
   * 总条目数
   */
  counts: number
  /**
   * 数据列表
   */
  items: TaskItemType[] | null
  /**
   * 页码
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 页尺寸
   */
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
