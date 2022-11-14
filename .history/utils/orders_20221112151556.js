import axios from 'axios'

export const getOrdersAPI = (params = {}) => {
  const { page = 0, limit = 10 } = params || {}
  return axios.get(`https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}`, {
    headers: {
      'x-access-token':
        'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2NjgwNzM5NTgsImV4cCI6MTY2ODI0Njc1OCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.M3iY5dqa9f2qiHuKNNK001ROho0fSmU0TpRg_57XBFux5qjX1-SK_UGZ8flVOm7Dt_tmInJToFxTwalfXYbGfsBzbHBo_1yel73Rlt4ckB66oBryGJYyX7_ExC0pQYGeh261-vsb6rGoGsTHpFqZZo2y6ygSrlZvgL4666cuDcD8xsE8mjJqmqzfPRs4Slfr401HPDwcTAPolke9GSw5IWPhySd702toJT6lSVwJisJLMhAv1kmZhnuONoUdy5jSkllOyCb4skMQdp_3skvHUX7t07zUnQN8S7w72OO8emExkUKhdSa1NpS4R77os9rbtR2M759QzB7ms3pQ_9XrctiZtMYNtMM4d-idweUow3aNWcyRB5dPpvXbZ5Vi-TpX7Taoas7yYoV2V7iZwCdO1jk_s_k_ulRfY6kqL9neSry8lRwhNLkG6SXtuw7cSp_7GzDjWABulXvX8jJkf1WqXeV2sT2qDUaeF6iuhlkQt16G2rE7lKUWL6LQvef3Cz8h6oGv6Uw5_G4DR0FDXZAO7opexU7olnXJa4UZHs9saPPvu-Ow6dGshbEgWuzYOUjyM_DxLyuyMaOH76sgwYbu4CK0RCzIUGXJNXfFWBTUhyuCAiwPr1i4-SuvGrkLJh_iIiwTBhkJr2_kVxkZFc9VZ_KEnrVEwvF2O8gZKg3dh3Y',
    },
  })
}

export const getDetailAPI = (params = {}) => {
  const { page = 0, limit = 10 } = params || {}
  return axios.get(`https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}`, {
    headers: {
      'x-access-token':
        'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2NjgwNzM5NTgsImV4cCI6MTY2ODI0Njc1OCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.M3iY5dqa9f2qiHuKNNK001ROho0fSmU0TpRg_57XBFux5qjX1-SK_UGZ8flVOm7Dt_tmInJToFxTwalfXYbGfsBzbHBo_1yel73Rlt4ckB66oBryGJYyX7_ExC0pQYGeh261-vsb6rGoGsTHpFqZZo2y6ygSrlZvgL4666cuDcD8xsE8mjJqmqzfPRs4Slfr401HPDwcTAPolke9GSw5IWPhySd702toJT6lSVwJisJLMhAv1kmZhnuONoUdy5jSkllOyCb4skMQdp_3skvHUX7t07zUnQN8S7w72OO8emExkUKhdSa1NpS4R77os9rbtR2M759QzB7ms3pQ_9XrctiZtMYNtMM4d-idweUow3aNWcyRB5dPpvXbZ5Vi-TpX7Taoas7yYoV2V7iZwCdO1jk_s_k_ulRfY6kqL9neSry8lRwhNLkG6SXtuw7cSp_7GzDjWABulXvX8jJkf1WqXeV2sT2qDUaeF6iuhlkQt16G2rE7lKUWL6LQvef3Cz8h6oGv6Uw5_G4DR0FDXZAO7opexU7olnXJa4UZHs9saPPvu-Ow6dGshbEgWuzYOUjyM_DxLyuyMaOH76sgwYbu4CK0RCzIUGXJNXfFWBTUhyuCAiwPr1i4-SuvGrkLJh_iIiwTBhkJr2_kVxkZFc9VZ_KEnrVEwvF2O8gZKg3dh3Y',
    },
  })
}

// export const formatDate = (date, format = 'DD/MM/YYYY') => dayjs(date).format(format)
// //https://api.tala.xyz/v2/orders?page=${page}&limit=${limit}
