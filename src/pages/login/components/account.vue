<template>
  <uni-forms ref="form" :rules="accountRules" :modelValue="formData">
    <uni-forms-item name="account">
      <input type="text" v-model.trim="formData.account" placeholder="请输入账号" />
    </uni-forms-item>
    <uni-forms-item name="password">
      <input type="password" v-model.trim="formData.password" placeholder="请输入密码" />
    </uni-forms-item>
    <button @click="submitLogin" class="submit-button">登录</button>
  </uni-forms>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { formDataType } from './types/type'
import { accountRules } from './rules/rule'
import { login } from '@/api/login'
import { useUserStore } from '@/stores/user'
const store = useUserStore()
const redirectUrl = ref('')
const routeType = ref('')
onLoad((query) => {
  redirectUrl.value = query?.redirectUrl
  routeType.value = query?.routeType
})
const form = ref()
const formData = ref<formDataType>({
  account: 'xbsj001',
  password: '123456',
})
const submitLogin = async () => {
  try {
    await form.value.validate()
    const res = await login(formData.value)
    if (res.code !== 200) return uni.utils.toast('登录失败，请重试！')
    store.token = res.data
    if (routeType.value === 'navigateTo') {
      uni.navigateTo({
        url: redirectUrl.value,
      })
    } else if (routeType.value === 'switchTab') {
      uni.switchTab({
        url: redirectUrl.value,
      })
    } else {
      uni.switchTab({
        url: '/pages/my/index',
      })
    }
  } catch (e) {
    console.log('error')
  }
}

console.log('token', store.token)
</script>

<style lang="scss">
.submit-button {
  height: 100rpx;
  line-height: 100rpx;
  /* #ifdef APP */
  padding-top: 4rpx;
  /* #endif */
  margin-top: 80rpx;
  border: none;
  color: #fff;
  background-color: $uni-primary;
  border-radius: 100rpx;
  font-size: $uni-font-size-big;
}

button[disabled] {
  background-color: #fadcd9;
  color: #fff;
}
</style>
