<template>
  <view class="page-container">
    <view class="tab">
      <view
        @click="onTabChange(index)"
        class="tab-item"
        v-for="(item, index) in tabMetas"
        :key="index"
      >
        <view class="title" :class="{ active: tabIndex === index }">
          {{ item.title }}
        </view>
      </view>
    </view>
    <view class="task-list">
      <UDeliver v-if="tabIndex === 0" />
      <UPickup v-if="tabIndex === 1" />
      <UComplete v-if="tabIndex === 2" />
    </view>
  </view>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import UDeliver from './components/deliver.vue'
import UPickup from './components/pickup.vue'
import UComplete from './components/complete.vue'
type tabMetasType = {
  title: string
  rendered: boolean
}
const tabIndex = ref<number>(0)
const tabMetas = reactive<tabMetasType[]>([
  {
    title: '待提货',
    rendered: true,
  },
  {
    title: '在途',
    rendered: false,
  },
  {
    title: '已完成',
    rendered: true,
  },
])
const onTabChange = (index: number) => {
  tabIndex.value = index
}
</script>
