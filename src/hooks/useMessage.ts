import { ref } from 'vue'
import type { Item } from '@/api/types/message-type'
import { messgeList } from '@/api/message'
export const useMessageList = (type: number) => {
  const page = ref(1)
  const pageSize = ref(10)
  const contentType = ref(type)
  const isEmpty = ref(false)
  const isTriggered = ref(false)
  const hasMore = ref(true)
  const messageList = ref<Item[]>()

  const getMessageList = async () => {
    try {
      const res = await messgeList({
        page: page.value,
        pageSize: pageSize.value,
        contentType: contentType.value,
      })
      if (res.code !== 200) return uni.utils.toast('获取公告失败，稍后重试!')
      if (page.value === 1) messageList.value = []
      messageList.value = [...(messageList.value as Item[]), ...(res.data.items || [])]
      page.value += 1
      console.log('page.value', page.value)
      console.log('res.data.pages', res.data.pages)
      if (page.value >= res.data.pages) hasMore.value = false
      isEmpty.value = messageList.value.length > 0
      console.log('res=>', res)
    } catch (error) {
      console.log('error', error)
    }
  }
  return {
    page,
    pageSize,
    contentType,
    isEmpty,
    isTriggered,
    hasMore,
    messageList,
    getMessageList,
  }
}
