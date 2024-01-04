import { useUserStore } from '@/stores/user'
const baseURL = '/api'

const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    if (!config.url.startsWith('http')) {
      config.url = baseURL + config.url
    }

    // 超时
    config.timeout = 10000

    // 请求的header参数
    config.header = {
      a: 1,
      ...config.header,
    }

    // 请求头发送token
    const store = useUserStore()
    if (store.token) {
      config.header.Authorization = store.token
    }

    return config
  },
}

// 添加拦截器
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

type dataType<T> = {
  code: number
  msg: string
  data: T
}

export function http<T>(options: UniApp.RequestOptions) {
  return new Promise<dataType<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (response) => {
        if (response.statusCode >= 200 && response.statusCode <= 300) {
          resolve(response.data as dataType<T>)
        } else if (response.statusCode === 401) {
          // 重新跳转到登录页
          const store = useUserStore()
          store.token = ''
          uni.navigateTo({ url: '/pages/login/login' })
          reject(response)
        } else {
          uni.showToast({
            icon: 'none',
            title: (response.data as dataType<T>).msg || '请求错误',
          })
          reject(response)
        }

        console.log('response=>', response)
      },
      fail: (error) => {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(error)
      },
    })
  })
}
