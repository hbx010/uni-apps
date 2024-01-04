<template>
  <scroll-view class="scroll-view" @refresherrefresh="onScrollViewRefresh" refresher-enabled refresher-background="#fff"
    :refresher-triggered="isTriggered" @scrolltolower="onScrollToLower" scroll-y>
    <view class="scroll-view-wrapper">
      <view v-for="(item, index) in 100" :key="index">{{ index }}</view>
    </view>
  </scroll-view>
  <view v-if="isEmpty">无待提货物</view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { taskList } from '@/api/task'
import type { TaskItemType } from '../../../api/types/task-type'
import { onLoad } from '@dcloudio/uni-app'

const page = ref<number>(1)
const pageSize = ref<number>(5)
// 开启下拉刷新
const isTriggered = ref<boolean>(false)
const hasMore = ref<boolean>(true)
// 初始化数据
const isEmpty = ref(true)
const taskListArr = ref<TaskItemType[]>([])
const getTaskList = async () => {
  try {
    const res = await taskList({
      page: page.value,
      pageSize: pageSize.value,
      status: 1,
    })
    if (res.code !== 200) return uni.utils.toast('请求失败，请重试')
    if (page.value === 1) taskListArr.value = []
    taskListArr.value = [...taskListArr.value, ...(res.data.items || [])]
    page.value++
    console.log('page.value', page.value)
    if (page.value > res.data.pages) hasMore.value = false
    if (taskListArr.value.length > 0) isEmpty.value = false
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
<style scoped lang="scss">
.scroll-view {
  height: 100%;

  .scroll-view-wrapper {
    overflow: hidden;
  }
}
.task-card {
  background-color: #fff;
  border-radius: 16rpx;
  margin: 15rpx 30rpx 30rpx;
  padding: 24rpx 30rpx 0;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .no {
    font-size: $uni-font-size-base;
    color: $uni-main-color;
    font-weight: 500;
  }

  .status {
    width: 104rpx;
    height: 44rpx;
    border: 2rpx solid #ef4f3f;
    border-radius: 22rpx;
    font-weight: 400;
    font-size: 24rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ef4f3f;
  }
}

.body {
  padding: 40rpx 0;
  border-bottom: 1rpx solid #f4f4f4;
}
.timeline {
  position: relative;
  padding: 0 30rpx;
  margin-left: 30rpx;
  border-left: 2rpx dashed #f4f4f4;
}
.timeline:before,
.timeline:after {
  display: block;
  width: 44rpx;
  height: 44rpx;
  background: #2a2929;
  border-radius: 22rpx;
  color: #fff;
  text-align: center;
  line-height: 44rpx;
  font-size: 24rpx;
  position: absolute;
  left: -24rpx;
}

.timeline:before {
  content: '起';
  top: -1rpx;
}
.timeline:after {
  content: '止';
  bottom: -1rpx;
  background-color: $uni-primary;
}

.line {
  font-size: $uni-font-size-small;
  color: $uni-secondary-color;
  margin-top: 30rpx;

  &:first-child {
    margin-top: 0;
  }
}
.footer {
  padding: 20rpx 0;
  position: relative;

  &.flex {
    display: flex;
  }
}

.label,
.time {
  font-size: $uni-font-size-small;
  margin-right: 15rpx;
  color: $uni-secondary-color;
}

.action {
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  align-items: center;
  height: 64rpx;
  padding: 0 40rpx;
  background-color: $uni-primary;
  color: #fff;
  font-size: $uni-font-size-small;
  border-radius: 64rpx;
  transform: translate(0, -50%);

  &.disabled {
    background-color: #fadcd9;
  }
}
</style>
