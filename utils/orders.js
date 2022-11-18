import axios from 'axios'
import dayjs from 'dayjs'

const headers = {
  'x-access-token':
    'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njg3NDM0MDAsImV4cCI6MTY2ODkxNjIwMCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.JDlHJbIpqZjH0YThtO7mqc5K2gHwrGvr9rwiaR69CsUWgTmAVPOGmKxRdJcnLs5t7keGh6mQ-RiUjJv2_v_sxVq1uQX--j403yd5SbDtT-flO7E26zd3qIDWQEJ9Us4iJ0qT3cTn8k8W5hBp8K8CA7dN74bf5Z16kkzd3xwM70UHwyaaCM2bEmuWQNZ-jpoT9SXIqZSMbark_Vq51t2kDPK2e7PmlQ5T67Qv9fsmVsHpjJoYQwChBYNlamUpQU1jSjkvmwW8dVwhdtpxfcXha6fQyGFvE3UcuQRTxDOPvk9JVV1CZafQdqS6chPJ7U96Y_ZPM_ztT5ePbk1hykIlfxEEA0pU-nQ71SfQ2wHz9xmzC1fX1DwULhEEAEJzLaLEwJiuFvjYIyj876i2KHKO5ibS4oO9cQUyQqUYZcvFlLl7LTPG4l_kLjM8ZAxUFDstsCYPm6GJP7nuzywvz4cH86umw9o5s1Vz8aGAw1IHoisvBRXLt4k9zGhOPQhgzT2yY6emDnutuAiGLVemcfNlKbbFQeLnLHO3qhzFfahbDlSDz2GH-v2z6lWmVZyTUsRaPv0vINV-p4fSvAb6vpQHyoHV8ICtPIjpdKqc8THARYW0CX_3FLChnqoAjXed8Gwfs7PsF0FIKu8Xtbu8iGf_P84QG2DqJ90Ug89PKach6oM',
}
export const getOrdersAPI = (params = {}) => {
  const { page = 0, limit = 10, status } = params || {}
  return axios.get(
    `https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}${
      status ? '&status=' + status : ''
    }`,
    { headers }
  )
}

export const getDetailAPI = (params = {}) => {
  const { orderId } = params || {}
  return axios.get(
    `https://api.tala.xyz/v2/me/orders/${orderId}?include=items,price_summary,child_orders,status_histories`,
    {
      headers,
    }
  )
}
export const getOrderBySearch = (params = {}) => {
  const { page = 0, limit = 10, text = '', status } = params || {}
  return axios.get(
    `https://api.tala.xyz/v2/orders/search?page=${page}&limit=${limit}&text=${text}&relevant=true${
      status ? '&status=' + status : ''
    }`,
    {
      headers,
    }
  )
}

export const formatDate = (date, format = 'HH:mm DD/MM/YYYY') => dayjs(date * 1000).format(format)
export const formatMoney = (money) =>
  money?.toLocaleString('vi', { style: 'currency', currency: 'VND' })
