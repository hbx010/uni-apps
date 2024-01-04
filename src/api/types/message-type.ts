// 消息列表的参数类型
export type messageParamsType = {
  contentType: number
  page: number
  pageSize: number
}

// 消息列表返回的数据类型
export type responseMessageListType = {
  counts: number
  items: Item[]
  page: number
  pages: number
  pageSize: number
}

export type Item = {
  bussinessType: number
  content: string
  contentType: number
  created: string
  createUser: number
  id: number
  isRead: number
  readTime: string
  relevantId: number
  title: string
  updated: string
  updateUser: number
  userId: number
}
