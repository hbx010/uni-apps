<template>
  <view class="detail">
    <!-- {{ detailInfo }} -->
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { responseTaskDetailType } from '@/api/types/task-type'
import { taskDetail } from '@/api/task'

const id = ref<string>()

onLoad((options) => {
  id.value = options?.jobId
  getTaskDetail()
})
const detailInfo = ref<responseTaskDetailType>()
const getTaskDetail = async () => {
  try {
    const res = await taskDetail(id.value as string)
    console.log(res)
    detailInfo.value = res.data
  } catch (error) {
    console.log('error', error)
  }
}
</script>
<style lang="scss" scoped></style>
