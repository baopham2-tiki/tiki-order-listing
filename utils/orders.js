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
          'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2NjgyNDcwNjAsImV4cCI6MTY2ODQxOTg2MCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.AX8wbWh4TKuezoNGTSHWjwVrcOfJdJk6gk14HM2uxdxPyGNJUI5S-QsOvPoHrvw-4hZYeBTBnr9QkzYx6O3GsGlNxJ_tQKbYwgcdf7E8zGyqJSI5vYKYAZzCL4cjS4WBUUIdMWSADSnkJakLFFJL4LV9zv78efew4ftHWNakjt_pB30nPjHKucJ7_gJPRTBY3Kc1jfLLNhI2rWISOj27AN3ErDiiVoWU053i19eqUjL42jkN1KPdNceKY9Auxeh5Td2cyYFTbPp2-bLChxi-LKZuPb0dTVD4g5gC5-UuOgsyqoSvh3b0NkkNnzhzLWQE5r1n8qlYFYZ0-bOaonkovSAq0fvesZlHVKIgpdRZYt1Gy_hf5-WZO_kYK-n2zMHsAnODe3tK62lzyBAJWRrGJAJ9qr0131dE0mPksGI1GAArUI6dzqf2RmKdTJfzxl9Ms2hoW76OPRiwztCDvwfNgDh0yQ2Tmv2BjuQStoxdm6x5k2moTxHSxI-WqyvQ1DV9tVjWutBtyc2U4wGnZmqHX4pmwiOXPVDw99n6iwRl23FukZY8nGHa0A6iJogaLeri1xVwHr7yaSN5Mxy49qzvaHRKY7qNsp-S5imeCj0XI5vHrTTjJ9S9oLEo5Zo5pTmhG88NJHXsGVmobTdwBC-6Hy9vDXhglKCMKS_hFETITx0',
      },
    }
  )
}

export const getDetailAPI = (params = {}) => {
  return axios.get(
    `https://api.tala.xyz/v2/me/orders/221696256?include=items,price_summary,child_orders,status_histories`,
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
          'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2NjgyNDcwNjAsImV4cCI6MTY2ODQxOTg2MCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.AX8wbWh4TKuezoNGTSHWjwVrcOfJdJk6gk14HM2uxdxPyGNJUI5S-QsOvPoHrvw-4hZYeBTBnr9QkzYx6O3GsGlNxJ_tQKbYwgcdf7E8zGyqJSI5vYKYAZzCL4cjS4WBUUIdMWSADSnkJakLFFJL4LV9zv78efew4ftHWNakjt_pB30nPjHKucJ7_gJPRTBY3Kc1jfLLNhI2rWISOj27AN3ErDiiVoWU053i19eqUjL42jkN1KPdNceKY9Auxeh5Td2cyYFTbPp2-bLChxi-LKZuPb0dTVD4g5gC5-UuOgsyqoSvh3b0NkkNnzhzLWQE5r1n8qlYFYZ0-bOaonkovSAq0fvesZlHVKIgpdRZYt1Gy_hf5-WZO_kYK-n2zMHsAnODe3tK62lzyBAJWRrGJAJ9qr0131dE0mPksGI1GAArUI6dzqf2RmKdTJfzxl9Ms2hoW76OPRiwztCDvwfNgDh0yQ2Tmv2BjuQStoxdm6x5k2moTxHSxI-WqyvQ1DV9tVjWutBtyc2U4wGnZmqHX4pmwiOXPVDw99n6iwRl23FukZY8nGHa0A6iJogaLeri1xVwHr7yaSN5Mxy49qzvaHRKY7qNsp-S5imeCj0XI5vHrTTjJ9S9oLEo5Zo5pTmhG88NJHXsGVmobTdwBC-6Hy9vDXhglKCMKS_hFETITx0',
      },
    }
  )
}

// export const formatDate = (date, format = 'DD/MM/YYYY') => dayjs(date).format(format)
// //https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}
