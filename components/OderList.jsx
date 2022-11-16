import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import EmptyPage from './empty/emptyPage'
import ErrorPage from './errorPage'
import LoadingPage from './loading/loading'
import { formatDate } from '../utils/orders'
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

  if (loading === false && data?.length === 0) {
    return <EmptyPage />
  }

  return (
    <OrderList>
      {orders?.map((order, index) => {
        const orderItem = order?.items?.[0]

        return (
          <StyledOrder>
            <OrderHeader>
              {order.main_state === `Đã huỷ` ? (
                <div>Pending</div>
              ) : (
                <StatusOrder>
                  {order.delivery_commitment_time == null ? (
                    <MainStatus>Giao trước {formatDate(order.created_at)}</MainStatus>
                  ) : (
                    <MainStatus>{order?.delivery_commitment_time?.text}</MainStatus>
                  )}
                  <p>
                    <span className="sub-status">{order.main_state}</span> &nbsp;
                    <span className="sub-state">
                      Sẵn sàng lấy hàng | {formatDate(order.latest_status)}
                    </span>
                  </p>
                </StatusOrder>
              )}
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
