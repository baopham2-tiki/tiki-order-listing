import React, { useEffect } from 'react'
import Detail from '../../components/detail'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getOrders } from '../../slices/orderSlice'
import { useRouter } from 'next/router'

export default function detailApp() {
  const router = useRouter()
  const { orderId } = router.query
  const { details } = useSelector((state: RootState) => state.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(
        'https://api.tala.xyz/v2/me/orders/221696256?include=items,price_summary,child_orders,status_histories',
        {
          headers: {
            'x-access-token':
              'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2NjgwNzM5NTgsImV4cCI6MTY2ODI0Njc1OCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.M3iY5dqa9f2qiHuKNNK001ROho0fSmU0TpRg_57XBFux5qjX1-SK_UGZ8flVOm7Dt_tmInJToFxTwalfXYbGfsBzbHBo_1yel73Rlt4ckB66oBryGJYyX7_ExC0pQYGeh261-vsb6rGoGsTHpFqZZo2y6ygSrlZvgL4666cuDcD8xsE8mjJqmqzfPRs4Slfr401HPDwcTAPolke9GSw5IWPhySd702toJT6lSVwJisJLMhAv1kmZhnuONoUdy5jSkllOyCb4skMQdp_3skvHUX7t07zUnQN8S7w72OO8emExkUKhdSa1NpS4R77os9rbtR2M759QzB7ms3pQ_9XrctiZtMYNtMM4d-idweUow3aNWcyRB5dPpvXbZ5Vi-TpX7Taoas7yYoV2V7iZwCdO1jk_s_k_ulRfY6kqL9neSry8lRwhNLkG6SXtuw7cSp_7GzDjWABulXvX8jJkf1WqXeV2sT2qDUaeF6iuhlkQt16G2rE7lKUWL6LQvef3Cz8h6oGv6Uw5_G4DR0FDXZAO7opexU7olnXJa4UZHs9saPPvu-Ow6dGshbEgWuzYOUjyM_DxLyuyMaOH76sgwYbu4CK0RCzIUGXJNXfFWBTUhyuCAiwPr1i4-SuvGrkLJh_iIiwTBhkJr2_kVxkZFc9VZ_KEnrVEwvF2O8gZKg3dh3Y',
          },
        }
      )
      .then((response) => {
        dispatch(getOrders(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <h1>{orderId}</h1>
      <Detail />
    </div>
  )
}
