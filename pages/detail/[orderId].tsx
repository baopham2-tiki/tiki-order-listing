import React, { useEffect } from 'react'
import Detail from '../../components/detail'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  getOrders,
  getOrderDetails,
  getOrderDetailsSuccess,
  getOrderDetailsError,
} from '../../slices/orderSlice'
import { useRouter } from 'next/router'
import { getDetailAPI } from '../../utils/orders'

export default function detailApp() {
  const router = useRouter()
  const { orderId } = router.query
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        const response = await getDetailAPI({ orderId })
        dispatch(getOrderDetailsSuccess(response.data))
        console.log(30, response.data)
      } catch (error) {
        dispatch(getOrderDetailsError(error))
      }
    })()
  }, [orderId])
  return (
    <div>
      <Detail />
    </div>
  )
}
