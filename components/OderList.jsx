import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import EmptyPage from './empty/emptyPage'
import ErrorPage from './errorPage'
import { formatDate, formatMoney } from '../utils/orders'
import Loading from './loading/loading'
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
  const { data, error, loading } = useSelector((state) => state.orders)

  if (error) {
    return <ErrorPage />
  }

  if (loading === false && data?.length === 0) {
    return <EmptyPage />
  }

  return (
    <OrderList>
      {data?.map((order, index) => {
        const orderItem = order?.items?.[0]

        const StatusText = ({ text }) => (
          <div color="#808089" className="styles__OrderHeader-sc-1vf2n1c-1 jSGPXD">
            <span className="main-status">{text}</span>
          </div>
        )

        return (
          <StyledOrder key={order?.id}>
            <OrderHeader>
              {order?.main_state === `Đã hủy` ? (
                <StatusText text="Đã hủy" />
              ) : (
                <StatusOrder>
                  {!order.delivery_commitment_time == null ? (
                    <MainStatus>Giao trước {formatDate(order?.created_at)}</MainStatus>
                  ) : (
                    <MainStatus>{order?.delivery_commitment_time?.text || ''}</MainStatus>
                  )}
                  <p className="sub-text">
                    <span className="sub-status">{order?.main_state}</span> &nbsp;
                    <span className="sub-state">
                      Sẵn sàng lấy hàng | {formatDate(order?.latest_status)}
                    </span>
                  </p>
                </StatusOrder>
              )}
            </OrderHeader>
            <OrderInfor>
              <OderDetail>
                <DetailImg>
                  <img src={orderItem?.thumbnail_url}></img>
                  <span className="quantity">x{orderItem?.qty}</span>
                </DetailImg>
                <ProductInfor>
                  <p>{order?.description}</p>
                  <div className="store">{orderItem?.current_seller?.store?.name}</div>
                </ProductInfor>
              </OderDetail>
              <PriceDetail>
                <span>{formatMoney(orderItem?.price)}</span>
              </PriceDetail>
            </OrderInfor>
            <OrderFooter>
              <TotalMoney>
                <div className="title">Tổng tiền:</div>
                <div className="total">{formatMoney(orderItem?.price)}</div>
              </TotalMoney>
              <ButtonGroup>
                <Link className="btnSeeDetail" href={`/detail/${order?.id}`}>
                  Xem chi tiết
                </Link>
                <div>Theo dõi đơn</div>
              </ButtonGroup>
            </OrderFooter>
          </StyledOrder>
        )
      })}
      {loading ? <Loading /> : null}
    </OrderList>
  )
}

export default OderList
