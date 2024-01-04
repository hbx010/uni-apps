<template>
  <scroll-view
    class="scroll-view"
    scroll-y
    @refresherrefresh="onScrollViewRefresh"
    @scrolltolower="onScrollToLower"
    :refresher-triggered="isTriggered"
    refresher-enabled
    refresher-background="#f5f5f5"
  >
    <view class="scroll-view-wrapper">
      <view class="message-action" @click="handleReadAll">
        <text class="iconfont icon-clear"></text>
        全部已读
      </view>
      <!-- <view v-for="(item, index) in 100" :key="index">{{ index }}</view> -->
      <uni-list>
        <uni-list-item
          v-for="(item, index) in messageList"
          :key="index"
          :title="item.title"
          :right-text="item.created"
          :ellipsis="1"
        >
          <template v-slot:header>
            <text v-if="item.isRead === 0" class="dot"></text>
          </template>
        </uni-list-item>
      </uni-list>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { readAll } from '@/api/message'
import { useMessageList } from '@/hooks/useMessage'
const { page, isTriggered, hasMore, messageList, getMessageList } = useMessageList(200)
// 全部已读
const handleReadAll = async () => {
  try {
    const res = await readAll(200)
    console.log('res=>', res)
  } catch (error) {
    console.log('error', error)
  }
}
// 下拉刷新
const onScrollViewRefresh = async () => {
  // 下拉刷新重置
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

<style lang="scss" scoped>
.scroll-view {
  height: calc(100vh - 134px);
  overflow-y: hidden;

  .message-action {
    padding: 30rpx 44rpx 30rpx;
    color: $uni-secondary-color;
    font-size: 28rpx;

    .icon-clear {
      margin-right: 16rpx;
      font-size: 96%;
    }
  }

  ::v-deep .uni-list {
    margin: 0 30rpx;
    border-radius: 16rpx;
    margin-bottom: 30rpx;
    overflow: hidden;
  }

  .dot {
    display: block;
    width: 16rpx;
    height: 16rpx;
    background-color: $uni-primary;
    border-radius: 50%;
    align-self: center;
    margin-right: 10rpx;
    position: absolute;
    left: 24rpx;
  }

  ::v-deep .uni-list-item__content-title {
    font-size: 30rpx !important;
    // padding-left: 20rpx;
    padding-left: 20rpx;
  }
}

.scroll-view-wrapper {
  height: 100%;
}
</style>
