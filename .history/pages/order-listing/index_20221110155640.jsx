import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OderList from '../../components/OderList'
import { getOrders } from '../../slices/orderSlice'
import { RootState } from '../../store'

import { StyledOrderApp, Heading } from './styles'

export default function OrderListing() {
  const [search, setSearch] = React.useState('')
  const [dataListOrder, setDataListOrder] = React.useState([])
  const { data, error, loading } = useSelector((state) => state.orders)

  const dispatch = useDispatch()

  useEffect(async () => {
    try {
      const response = await axios.get('https://api.tala.xyz/v2/orders?page=0&limit=10', {
        headers: {
          'x-access-token':
            'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwODQwMDciLCJpYXQiOjE2Njc5MDA0NDYsImV4cCI6MTY2ODA3MzI0NiwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiIxMDAwODQwMDciLCJlbWFpbCI6ImFkbWluQHRpa2kudm4iLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsIm5hbWUiOiIxMDAwODQwMDciLCJzY29wZSI6InNzbyJ9.UQDV8aSHenERoBAuRJP-iWLU8rFW_OL625q47Yn4FQ1ZvMdzZa8Fe6DHk2PNWL-HEChxK5GRh2C3zinE4VBgJUteJSAGRg7JqHue0vkAzX1B12wU3IhX5mAW_nG-_efY5fpJ1wW_FYzlZLgvPAQwzYaArnAsQw-qzZyuM0HPrBoSh3QYRFEpFIpsx1-ISRAbZTddDp6UTvkyDcsDTECPBxRMOZWFuVUnqKoqhwxAZKYR9fb_nDWx17IhXaP4KpUuPMCKMFqsTXyD1tfTGU0U9bN5pGoOOoUJ-nBZuESJeOWzTfxpmkdT6B05EgenkvVE5uA6jBh2kzeqnolSM7MSEJL649YQMlXFhlz7szzRoxYcrqbFGnCsOqyY9Wv1EsW60UFyyl-05PdwHulW63YhpBgJN96n1tNvZMxk2AsyxCpqtHmmqMtZXI-kwIgBFkJ96FrSz3VkziNftBLl3w2yUEB4GZ8tw0EZNZg13jjwm0OeICGSjq2c6ANBnuCp6EKMnmp52EKNkZSTiW7BT-nghwKh5oJynzKZPfV1XmulEe8bOb1X9doZiC0L3hCIs4-OTJYDhO0BcHvqAgqyvZrciY0JOlNs9GcvGkkDTRt0c3a3J2-ezUqnM_aLyCWoH2_Vs2OxZuMTUXsTdkb6_rwN_6udttAGn9gAvy9YdY_rxIo',
        },
      })
      console.log('axios.then', response.data.data)
      dispatch(getOrders(response.data.data))
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
      <StyledTabs>
        <div className="tab-pend active">Tất cả các đơn</div>
        <div className="tab-pend">Chờ thanh toán</div>
        <div className="tab-pend">Đang xử lý</div>
        <div className="tab-pend">Đang vận chuyển</div>
        <div className="tab-pend">Đã giao</div>
        <div className="tab-pend">Đã huỷ</div>
      </StyledTabs>
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
