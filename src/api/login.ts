import { http } from '@/utils/http'

import type {
  loginParamsType,
  responseProfileType,
  taskReportParamsType,
  responseTaskReportType,
  responseTruckType,
} from './types/login-type'

export const login = (loginParams: loginParamsType) => {
  return http<string>({
    url: '/driver/login/account',
    method: 'POST',
    data: loginParams,
  })
}

export const profile = () => {
  return http<responseProfileType>({
    url: '/driver/users',
    method: 'GET',
  })
}

export const taskReport = (taskReportParams: taskReportParamsType) => {
  return http<responseTaskReportType>({
    url: '/driver/users/taskReport',
    method: 'GET',
    data: taskReportParams,
  })
}

export const truck = () => {
  return http<responseTruckType>({
    url: '/driver/users/truck',
    method: 'GET',
  })
}
