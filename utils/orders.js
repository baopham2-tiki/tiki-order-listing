import axios from 'axios'

export const getOrdersAPI = (params = {}) => {
  const { page = 0, limit = 10, status } = params || {}
  return axios.get(
    `https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}${
      status ? '&status=' + status : ''
    }`,
    {
      headers: {
        'x-access-token':
          'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njg0MDQ2MDUsImV4cCI6MTY2ODU3NzQwNSwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.SKiQYWp37fs-hG3GFQxuPTAN4kBvHO1IkQChEmJFDa7FDkTHY9CigKsevy2liLHm-sTJ9j7DGf9T6dpfXo6ZZkUsCcpiP8vDKPfGw2NUrkDvPzj8YIKSiAPmaQp2vJc5VPpWVDfamC26ORFIXIsoYa6k2m-M7BEvc3p68eDy7iOC4rMYee3adP-m_tEScd4hJ33VS_BVoInidN50TDswxJiaQO5JWMs3rgS_VsvWtIa2i67oLZgIKA39ahrL8MWcPqxAqO1kzwxNnExrfd2XHYVqLfIKUHZrkce0W7QKAP8pifljvLNrRWhfLb2BHFuUyCWB3A-aPHbqrVDGQHTIJPUIDy8lYbmubnfr8jDhhHJ256ceFROojYllxezjIWdx2hbXanuv-K17LlMrDhSqFre8SJzRaBcCdP5woOs0lSrbqjxhcqlqRyAd7vorxy-F1PApkAznKmxI5Ni8XNDyKauwpnp8-BGvBPE27x75nCi46pncYHpHr_KGUEylfbQs-Zml3c9Jxb_D9Pfb7Ne2W0naQuB2cgQNEHifdaHTjNsncIY7iOtcus1JbDWKYvXL7pYGIedkXIY0vXsRVNh6Ws3Vnpc72eURg9q2lhkC3FR6PxOIEFyG36GkbsdZDAziZ3UySTj60oZL5mEPslvBK-AkVlmPc-jOcVVp-EIyyTc',
      },
    }
  )
}

export const getDetailAPI = (params = {}) => {
  const { orderId } = params || {}
  return axios.get(
    `https://api.tala.xyz/v2/me/orders/${orderId}?include=items,price_summary,child_orders,status_histories`,
    {
      headers: {
        'x-access-token':
          'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2NjgyNDcwNjAsImV4cCI6MTY2ODQxOTg2MCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.AX8wbWh4TKuezoNGTSHWjwVrcOfJdJk6gk14HM2uxdxPyGNJUI5S-QsOvPoHrvw-4hZYeBTBnr9QkzYx6O3GsGlNxJ_tQKbYwgcdf7E8zGyqJSI5vYKYAZzCL4cjS4WBUUIdMWSADSnkJakLFFJL4LV9zv78efew4ftHWNakjt_pB30nPjHKucJ7_gJPRTBY3Kc1jfLLNhI2rWISOj27AN3ErDiiVoWU053i19eqUjL42jkN1KPdNceKY9Auxeh5Td2cyYFTbPp2-bLChxi-LKZuPb0dTVD4g5gC5-UuOgsyqoSvh3b0NkkNnzhzLWQE5r1n8qlYFYZ0-bOaonkovSAq0fvesZlHVKIgpdRZYt1Gy_hf5-WZO_kYK-n2zMHsAnODe3tK62lzyBAJWRrGJAJ9qr0131dE0mPksGI1GAArUI6dzqf2RmKdTJfzxl9Ms2hoW76OPRiwztCDvwfNgDh0yQ2Tmv2BjuQStoxdm6x5k2moTxHSxI-WqyvQ1DV9tVjWutBtyc2U4wGnZmqHX4pmwiOXPVDw99n6iwRl23FukZY8nGHa0A6iJogaLeri1xVwHr7yaSN5Mxy49qzvaHRKY7qNsp-S5imeCj0XI5vHrTTjJ9S9oLEo5Zo5pTmhG88NJHXsGVmobTdwBC-6Hy9vDXhglKCMKS_hFETITx0',
      },
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
      headers: {
        'x-access-token':
          'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njg0MDQ2MDUsImV4cCI6MTY2ODU3NzQwNSwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.SKiQYWp37fs-hG3GFQxuPTAN4kBvHO1IkQChEmJFDa7FDkTHY9CigKsevy2liLHm-sTJ9j7DGf9T6dpfXo6ZZkUsCcpiP8vDKPfGw2NUrkDvPzj8YIKSiAPmaQp2vJc5VPpWVDfamC26ORFIXIsoYa6k2m-M7BEvc3p68eDy7iOC4rMYee3adP-m_tEScd4hJ33VS_BVoInidN50TDswxJiaQO5JWMs3rgS_VsvWtIa2i67oLZgIKA39ahrL8MWcPqxAqO1kzwxNnExrfd2XHYVqLfIKUHZrkce0W7QKAP8pifljvLNrRWhfLb2BHFuUyCWB3A-aPHbqrVDGQHTIJPUIDy8lYbmubnfr8jDhhHJ256ceFROojYllxezjIWdx2hbXanuv-K17LlMrDhSqFre8SJzRaBcCdP5woOs0lSrbqjxhcqlqRyAd7vorxy-F1PApkAznKmxI5Ni8XNDyKauwpnp8-BGvBPE27x75nCi46pncYHpHr_KGUEylfbQs-Zml3c9Jxb_D9Pfb7Ne2W0naQuB2cgQNEHifdaHTjNsncIY7iOtcus1JbDWKYvXL7pYGIedkXIY0vXsRVNh6Ws3Vnpc72eURg9q2lhkC3FR6PxOIEFyG36GkbsdZDAziZ3UySTj60oZL5mEPslvBK-AkVlmPc-jOcVVp-EIyyTc',
      },
    }
  )
}

// export const formatDate = (date, format = 'DD/MM/YYYY') => dayjs(date).format(format)
// //https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}
