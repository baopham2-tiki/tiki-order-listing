import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OderList from '../../components/OderList'
import { getOrders } from '../../slices/orderSlice'
import { RootState } from '../../store'
import { getOrdersAPI } from '../../utils/orders'

import { StyledOrderApp, Heading, StyledTabs, StyledInput } from './styles'
import Tabs from '../../components/Tabs'

export default function OrderListing() {
  const [search, setSearch] = React.useState('')
  const { data, error, loading } = useSelector((state) => state.orders)

  const dispatch = useDispatch()

  useEffect(() => {
    try {
      // (async () => {
      //   const response = await getOrdersAPI();
      //   console.log('axios.then', response.data.data)
      //   dispatch(getOrders(response.data.data))
      // })()
    } catch (error) { }

    const activeTabs = document.querySelectorAll('.tab-pend')
    console.log(activeTabs)

    activeTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        activeTabs.forEach((styledOderTabs) => {
          styledOderTabs.classList.remove('active')
        })
        tab.classList.add('active')
      })
    })
  }, [])

  return (
    <StyledOrderApp>
      <Heading>Đơn hàng của tôi</Heading>
      <Tabs />
      <StyledInput>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          color="#808089"
          className="icon-left"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          name="search"
          placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
          type="search"
          className="input with-icon-left"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-right">Tìm đơn hàng</div>

      </StyledInput>
      <OderList />
    </StyledOrderApp>
  )
}
