<template>
  <scroll-view
    class="scroll-view"
    @refresherrefresh="onScrollViewRefresh"
    refresher-enabled
    refresher-background="#fff"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrollToLower"
    scroll-y
  >
    <view class="scroll-view-wrapper">
      <view v-for="(item, index) in 100" :key="index">{{ index }}</view>
    </view>
  </scroll-view>
  <view v-if="isEmpty">无待提货物</view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { taskList } from '../../../api/task'
import type { TaskItemType } from '../../../api/types/task-type'
import { onLoad } from '@dcloudio/uni-app'

const page = ref<number>(1)
const pageSize = ref<number>(5)
// 开启下拉刷新
const isTriggered = ref<boolean>(false)
const hasMore = ref<boolean>(true)
// 初始化数据
const isEmpty = ref(true)
const taskList = ref<TaskItemType[]>([])
const getTaskList = async () => {
  try {
    const res = await taskList({
      page: page.value,
      pageSize: pageSize.value,
      status: 1,
    })
    if (res.code !== 200) return uni.utils.toast('请求失败，请重试')
    if (page.value === 1) taskList.value = []
    taskList.value = [...taskList.value, ...(res.data.items || [])]
    page.value++
    console.log('page.value', page.value)
    if (page.value > res.data.pages) hasMore.value = false
    if (taskList.value.length > 0) isEmpty.value = false
  } catch (error) {
    console.log('error', error)
  }
}
const onScrollToLower = () => {
  if (!hasMore.value) return
  getTaskList()
}
const onScrollViewRefresh = async () => {
  isTriggered.value = true
  page.value = 1
  await getTaskList()
  isTriggered.value = false
}
onLoad(() => {
  getTaskList()
})
</script>
