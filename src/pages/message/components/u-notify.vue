<template>
  <view class="">
    {{ messageList }}
  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { useMessageList } from '@/hooks/useMessage'
const { page, isTriggered, hasMore, messageList, getMessageList } = useMessageList(201)
// 下拉刷新
const onScrollViewRefresh = async () => {
  isTriggered.value = true
  page.value = 1
  await getMessageList()
  isTriggered.value = false
}
// 上拉加载
const onScrollToLower = () => {
  console.log('hasMore', hasMore.value)
  if (!hasMore.value) return
  getMessageList()
}
// 初始化加载
onLoad(() => {
  getMessageList()
})
</script>
<style lang="sass"></style>
