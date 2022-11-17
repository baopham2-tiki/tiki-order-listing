import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderList from '../../components/OderList'
import {
  getOrders,
  getOrdersError,
  getOrdersSuccess,
  getMoreSuccess,
  getLoadingTrue,
  getLoadingFalse,
} from '../../slices/orderSlice'
import { getOrdersAPI, getOrderBySearch } from '../../utils/orders'

import { StyledOrderApp, Heading, StyledInput } from './styles'
import Tabs from '../../components/Tabs'

const SearchIcon = () => (
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
)

export default function OrderListing() {
  const [search, setSearch] = React.useState('')
  const [text, setText] = React.useState('')
  const [status, setStatus] = React.useState()
  const [paging, setPaging] = React.useState({ page: 0, limit: 10 })

  const [isShowMore, setShowMoreBtn] = React.useState(false)

  const dispatch = useDispatch()

  const handleUpdateDataFromResponse = (response) => {
    const data = response.data // đặt biến cho data dùng lại >= 3 lần
    const hasLastPage = data.paging.last_page > 0 // self-comment code (code tự giải thích)
    setShowMoreBtn(hasLastPage)
    const isFirstPage = paging.page === 0 // đặt biến cho các toán tử dieu kiện & so sanh
    if (isFirstPage) {
      dispatch(getOrdersSuccess(data.data))
    } else {
      dispatch(getMoreSuccess(data.data))
    }
    dispatch(getLoadingFalse())
  }

  useEffect(() => {
    async function getDataFromAPI() {
      // dat ten cho job
      try {
        dispatch(getLoadingTrue())
        if (!text) {
          const ordersResponse = await getOrdersAPI({ ...paging, status })
          handleUpdateDataFromResponse(ordersResponse) // đặt tên hàm theo input
        } else {
          dispatch(getOrders())
          const response = await getOrderBySearch({ ...paging, text, status }) // co the dat thanh getOrderByTextAndStatus
          handleUpdateDataFromResponse(response)
        }
      } catch (error) {
        dispatch(getOrdersError(error))
        // submitLog(error); // analytic, logs, ...
      }
    }
    getDataFromAPI()
  }, [paging, text, status])

  const handleLoadMoreClick = () => {
    setPaging({ ...paging, page: paging.page + 1 })
  }
  const updateSearchText = (search) => {
    setText(search)
  }
  const resetPaging = () => {
    setPaging({ ...paging, page: 0 })
  }
  const handleSearchClick = () => {
    updateSearchText(search)
    resetPaging()
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
          resetPaging()
          dispatch(getOrders())
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
        <SearchIcon />
        <input
          name="search"
          placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
          type="search"
          className="input with-icon-left"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-right" onClick={handleSearchClick}>
          Tìm đơn hàng
        </div>
      </StyledInput>
      <OrderList />
      {isShowMore ? (
        <button className="btnLoadMore" onClick={handleLoadMoreClick}>
          Tải thêm
        </button>
      ) : null}
    </StyledOrderApp>
  )
}
