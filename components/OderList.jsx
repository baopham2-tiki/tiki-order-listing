import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import EmptyPage from './empty/emptyPage'
import ErrorPage from './errorPage'
import LoadingPage from './loading/loading'
import {
  OrderList,
  StyledOrder,
  OrderHeader,
  StatusOrder,
  MainStatus,
  OrderInfor,
  OderDetail,
  DetailImg,
  ProductInfor,
  PriceDetail,
  OrderFooter,
  TotalMoney,
  ButtonGroup,
} from './styles/styledOderList'
const OderList = () => {
  const orders = useSelector((state) => state.orders.data)
  const { data, error, loading } = useSelector((state) => state.orders)
  console.log(20, data)

  const handleSeeDetail = (order) => {
    console.log(22, order.id)
  }
  if (error) {
    return <ErrorPage />
  }

  if (loading) {
    return <LoadingPage />
  }

  if (data?.length === 0) {
    return <EmptyPage />
  }

  return (
    <OrderList>
      {orders?.map((order, index) => {
        const orderItem = order?.items?.[0]

        return (
          <StyledOrder>
            <OrderHeader>
              <StatusOrder>
                <MainStatus>Giao trước 18:00 ngày 09/11/2022</MainStatus>
                <p>
                  <span className="sub-status">Đang xử lý</span> &nbsp;
                  <span className="sub-state">Sẵn sàng lấy hàng | 15:54, Thứ Tư 09/11/2022</span>
                </p>
              </StatusOrder>
            </OrderHeader>
            <OrderInfor>
              <OderDetail>
                <DetailImg>
                  <img src={orderItem.thumbnail_url}></img>
                  <span className="quantity">x{orderItem.qty}</span>
                </DetailImg>
                <ProductInfor>
                  <p>{order.description}</p>
                  <div className="store">{orderItem.current_seller.store.name}</div>
                </ProductInfor>
              </OderDetail>
              <PriceDetail>
                <span>{orderItem.price.toLocaleString()} ₫</span>
              </PriceDetail>
            </OrderInfor>
            <OrderFooter>
              <TotalMoney>
                <div className="title">Tổng tiền:</div>
                <div className="total">{orderItem.price.toLocaleString()} ₫</div>
              </TotalMoney>
              <ButtonGroup>
                <Link className="btnSeeDetail" href={`/detail/${order.id}`}>
                  Xem chi tiết
                </Link>
                <div>Theo dõi đơn</div>
              </ButtonGroup>
            </OrderFooter>
          </StyledOrder>
        )
      })}
    </OrderList>
  )
}

export default OderList
