import React from 'react'
import { useSelector } from 'react-redux'
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
  console.log(20, orders)

  //   if (error) {
  //     return <ErrorPage />
  //   }

  //   if (loading) {
  //     return <LoadingPage />
  //   }

  //   if (data?.length === 0) {
  //     return <EmptyPage />
  //   }

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
                <div>Mua lại</div>
                <div>Xem chi tiết</div>
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
