import React, { useEffect } from 'react'
import Detail from '../../components/detail'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getOrders } from '../../slices/orderSlice'
import { useRouter } from 'next/router'
import { getDetailAPI } from '../../utils/orders'

export default function detailApp() {
  const router = useRouter()
  const { orderId } = router.query
  const { details } = useSelector((state: RootState) => state.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      ;(async () => {
        const response = await getDetailAPI(status)
        console.log('axios.then', response.data)
        dispatch(getOrders(response.data))
      })()
    } catch (error) {}
  }, [])
  return (
    <div>
      <Detail />
    </div>
  )
}
