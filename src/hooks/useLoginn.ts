import { login } from '@/api/login'
import type { formDataType } from '@/pages/login/components/types/type'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

export const useLogin = () => {
  const store = useUserStore()
  const redirectUrl = ref('')
  const routeType = ref('')
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

  return {
    form,
    formData,
    redirectUrl,
    routeType,
    submitLogin,
  }
}
