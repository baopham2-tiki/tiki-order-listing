import React, { useEffect } from 'react'
import Detail from '../../../components/detail'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import {
  getOrderDetails,
  getOrderDetailsSuccess,
  getOrderDetailsError,
} from '../../../slices/orderSlice'
import { useRouter } from 'next/router'
import { getDetailAPI as getDetailById } from '../../../utils/orders'

export default function detailApp() {
  const router = useRouter()
  const { orderId } = router.query
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      dispatch(getOrderDetails())
      try {
        if (!orderId) {
          return
        }
        const response = await getDetailById({ orderId })
        console.log(response.data)
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
