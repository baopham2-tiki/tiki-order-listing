import axios from 'axios'

const headers = {
  'x-access-token':
    'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njg0MDQ2MDUsImV4cCI6MTY2ODU3NzQwNSwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.SKiQYWp37fs-hG3GFQxuPTAN4kBvHO1IkQChEmJFDa7FDkTHY9CigKsevy2liLHm-sTJ9j7DGf9T6dpfXo6ZZkUsCcpiP8vDKPfGw2NUrkDvPzj8YIKSiAPmaQp2vJc5VPpWVDfamC26ORFIXIsoYa6k2m-M7BEvc3p68eDy7iOC4rMYee3adP-m_tEScd4hJ33VS_BVoInidN50TDswxJiaQO5JWMs3rgS_VsvWtIa2i67oLZgIKA39ahrL8MWcPqxAqO1kzwxNnExrfd2XHYVqLfIKUHZrkce0W7QKAP8pifljvLNrRWhfLb2BHFuUyCWB3A-aPHbqrVDGQHTIJPUIDy8lYbmubnfr8jDhhHJ256ceFROojYllxezjIWdx2hbXanuv-K17LlMrDhSqFre8SJzRaBcCdP5woOs0lSrbqjxhcqlqRyAd7vorxy-F1PApkAznKmxI5Ni8XNDyKauwpnp8-BGvBPE27x75nCi46pncYHpHr_KGUEylfbQs-Zml3c9Jxb_D9Pfb7Ne2W0naQuB2cgQNEHifdaHTjNsncIY7iOtcus1JbDWKYvXL7pYGIedkXIY0vXsRVNh6Ws3Vnpc72eURg9q2lhkC3FR6PxOIEFyG36GkbsdZDAziZ3UySTj60oZL5mEPslvBK-AkVlmPc-jOcVVp-EIyyTc',
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

// export const formatDate = (date, format = 'DD/MM/YYYY') => dayjs(date).format(format)
// //https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}
