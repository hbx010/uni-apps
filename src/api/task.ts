import { http } from '@/utils/http'

type taskParamsType = {
  endTime?: string
  page: number
  pageSize: number
  startTime?: string
  status: number
  transportTaskId?: string
}

type taskResponseType = {
  counts: number
  items: TaskItemType[] | null
  page: number
  pages: number
  pageSize: number
}

type TaskItemType = {
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

export const task = (taskParams: taskParamsType) => {
  return http<taskResponseType>({
    url: '/driver/tasks/list',
    method: 'GET',
    data: taskParams,
  })
}
