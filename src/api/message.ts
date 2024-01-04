import { http } from '@/utils/http'
import type { responseMessageListType, messageParamsType } from './types/message-type'

export const messgeList = (messageParams: messageParamsType) => {
  return http<responseMessageListType>({
    url: '/driver/messages/page',
    method: 'GET',
    data: messageParams,
  })
}

export const messagesCount = (contentType: number) => {
  return http<number>({
    url: `/driver/messages/countType/${contentType}`,
    method: 'GET',
  })
}

export const readAll = (contentType: number) => {
  return http({
    url: `/driver/messages/readAll/${contentType}`,
    method: 'PUT',
  })
}

export const read = (id: number | string) => {
  return http({ url: `/driver/messages/${id}`, method: 'PUT' })
}
