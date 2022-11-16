import axios from 'axios'
import dayjs from 'dayjs'

const headers = {
  'x-access-token':
    'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njg1Njc0ODksImV4cCI6MTY2ODc0MDI4OSwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.mWh0LdcaNmwPzc5XZe6Paq-Ttq8PIt0KjNmR2Jt6qkKp3TxVECVucne2UQtww7sP-BMgqq2U5YKU5N2Wy9tlojGZRHx7XuOYJF0IpNGcNHRSRycVsBlF6zmFRBRwjdZV9MEliMjSB8FE3fJ3s8FDguBz4NW0b0pYnxnW6wpc9KgESuCv_xJtUJ8nZhOEV4S3VUG4yBtip5CxQ331mt1qmiTMbqYEFIHY5lskcB4FyKMFJFjBFY8kdQXOFiOAvLW8c4NFZ3NbzhEPndMY9b6R9Z3VUFFLYCiM8UlsbDDR9bPT-zHSi0_3sNvqW3x_iDG97cBzedGZh6K8vY86jURhromNrWHqR52dRP3-lVX_7PE-ziwsqDwGRy14PLKdXgusMiMjlcHa5iiTNRLuPrv6NfS1lQJ349S53d1vbm45RT9ZMJOLvpUB4aSxwx6-A2U9r0KzRzsW6P6EfEZf95mCBxfGNFYPYHF6T-f8W17OqjZldmRZvETrtg1Pz_loT1hL3SPTfupfjkESr1ra7Qn9bsfF3tVS7CHOHks_V9PucAtFlVpSNeqmFyS3rY9lkRjESQ8Z92eKgnW6DujzPjGvr8QjBZnwZHW71y9r5ZkEPckyjd3M8BfUlWySKdJHJfgFdHeKFEEssAPYB5AXTPFjjlmwIVGMqH-jR2hrdZ5swPo',
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
// //https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}
