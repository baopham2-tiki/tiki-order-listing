import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OderList from '../../components/OderList'
import { getOrders, getMoreOrders } from '../../slices/orderSlice'
import { RootState } from '../../store'
import { getOrdersAPI, getOrderBySearch } from '../../utils/orders'

import { StyledOrderApp, Heading, StyledTabs, StyledInput } from './styles'
import Tabs from '../../components/Tabs'

export default function OrderListing() {
  const [search, setSearch] = React.useState('')
  const [text, setText] = React.useState('')
  const [status, setStatus] = React.useState()
  const [paging, setPaging] = React.useState({ page: 0, limit: 10 })
  const { data, error, loading } = useSelector((state) => state.orders)

  const dispatch = useDispatch()

  useEffect(() => {
    try {
      ;(async () => {
        console.log(24, status)
        if (!text) {
          const response = await getOrdersAPI({ ...paging, status })
          console.log('axios.then', response.data.data)
          if (paging.page === 0) {
            dispatch(getOrders(response.data.data))
          } else {
            dispatch(getMoreOrders(response.data.data))
          }
        } else {
          const response = await getOrderBySearch({ ...paging, text, status })
          dispatch(getOrders(response.data.data))
        }
      })()
    } catch (error) {}
  }, [paging, text, status])

  const handeLoading = () => {
    setPaging({ ...paging, page: paging.page + 1 })
  }

  const handleSearch = () => {
    setText(search)
  }

  const [tabs, setTabs] = React.useState([
    { label: 'Tất cả các đơn', active: true, code: '' },
    { label: 'Chờ thanh toán', active: false, code: 'awaiting_payment' },
    { label: 'Đang xử lý', active: false, code: 'processing' },
    { label: 'Đang vận chuyển', active: false, code: 'shipping' },
    { label: 'Đã giao', active: false, code: 'completed' },
    { label: 'Đã huỷ', active: false, code: 'canceled' },
  ])

  const handleClick = (index) => {
    setTabs(
      tabs.map((tab, i) => {
        if (i === index) {
          setStatus(tab.code)
          return { ...tab, active: true }
        }
        return { ...tab, active: false }
      })
    )
  }
  return (
    <StyledOrderApp>
      <Heading>Đơn hàng của tôi</Heading>
      <Tabs handleClick={handleClick} tabs={tabs} />
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
        <div className="search-right" onClick={handleSearch}>
          Tìm đơn hàng
        </div>
      </StyledInput>
      <OderList />
      <button onClick={handeLoading}>Tải thêm</button>
    </StyledOrderApp>
  )
}
