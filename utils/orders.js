import axios from 'axios'
import dayjs from 'dayjs'

const headers = {
  'x-access-token':
    'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njg5MTYyODEsImV4cCI6MTY2OTA4OTA4MSwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.ZQO5RZruKXgjGBuwpD137HVOjg3oXzGxiwzZXA__bef5kK3Tz17rKSLTJIVDeOGvw9jp7OmpIGSQ9hC_1s-seeeb80BDG60CqTFsKV9X4QcOfm6aJIkFW4CXiUt8usPSWAVdymc-VdDwZ_rsBnaAX-aPcgUHSocdm8gfMteUxxza0k3GRfCOVHLl1ML_357ZlphK59_ZPran2nFTppxNgVnlOVez4sQztw--ZDtrXM3mNWwR-1c-yu13IA9lAmIBuo-gSFqzlPRMM2_jWO4-PMEfqt2Gx_GD2lAGDfOscePAeLxABumdZlTiemxlLysuFLWt8IC7IQhySjJmT1QOD2BtwgKaPH0TvOzflxVK4T-CSoNRTWytx_EiC5UO49ewQxb6Ewvn__l6k_o6t1yeYCe1Hm9v-7UOiHq_E3ob5zYorFHRxTo80UZj-sOS2ycKDZG9QZrAb-4GDYrGV2aJGdi44nooIJ1GMM4-BT42vo58BpVv2FRA6yLHNXCkt8SvP_iy8rEncGYLDg9DxXISgEg4y1_MxP2YSRTKxTM_EcfSWBVcT7Y08IzCDDdOC0wpva5fYUefE2-9sb6XJVrwufuhlS7gbrEJpGpfg17PSuORBQlMRll1Qm5Kw568EKIyhexH6N9tMT3v0HcWGKtO49NP8veTT-R_gy2Y5CZUmtk',
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
