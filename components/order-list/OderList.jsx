import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import EmptyPage from '../empty/emptyPage'
import ErrorPage from '../errorPage'
import { formatDate, formatMoney } from '../../utils/orders'
import Loading from '../loading/loading'
// import LoadingSkeleton from '../loading/loadingSkeleton'
import LoadingOrderList from '../loading/loadingOrderList'

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
  OderInforPointer,
} from '../styles/styledOderList'

const OderList = () => {
  const { data, error, loading } = useSelector((state) => state.orders)
  console.log(data)
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
            <img src="./assets/block.png" />
            <span className="main-status">{text}</span>
          </div>
        )

        const StatusWaitingPayment = ({ text }) => (
          <div color="#FF9F41" className="styles__imCNgm">
            <span class="main-status">{text}</span>
          </div>
        )

        const StatusWaitForConfirmation = ({ text, time, status }) => (
          <div className="waitting_confirm">
            {' '}
            {!time ? null : <MainStatus>{time || ''}</MainStatus>}
            <div color="#808089" className="styles__jSGPXD">
              <span className="main-status">{text}</span>
              <span className="sub-state">Sẵn sàng lấy hàng | {status}</span>
            </div>
          </div>
        )

        const StatusDeliverySuccess = ({ text }) => (
          <div color="#808089" className="styles__hBDqMZ">
            <span class="main-status">{text}</span>
          </div>
        )

        return (
          <StyledOrder key={order?.id}>
            <OrderHeader>
              {order?.main_state === `Đã hủy` ? (
                <StatusText text="Đã hủy" />
              ) : order?.main_state === `Chờ xác nhận` ? (
                <StatusWaitForConfirmation
                  text="Chờ xác nhận"
                  time={order?.delivery_commitment_time?.text}
                  status={formatDate(order?.latest_status)}
                />
              ) : order?.main_state === `Giao hàng thành công` ? (
                <StatusDeliverySuccess text="Giao hàng thành công" />
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
            <OderInforPointer>
              <div>
                <OrderInfor>
                  <OderDetail>
                    <DetailImg>
                      <img src={orderItem?.thumbnail_url}></img>
                    </DetailImg>
                    <span className="quantity">x{orderItem?.qty}</span>
                    <ProductInfor>
                      <p>{order?.description}</p>
                      <div className="store">{orderItem?.current_seller?.store?.name}</div>
                    </ProductInfor>
                  </OderDetail>
                  <PriceDetail>
                    <span>{formatMoney(orderItem?.price)}</span>
                  </PriceDetail>
                </OrderInfor>
              </div>
            </OderInforPointer>
            <OrderFooter>
              <TotalMoney>
                <div className="title">Tổng tiền:</div>
                <div className="total">{formatMoney(order?.grand_total)}</div>
              </TotalMoney>
              <ButtonGroup>
                <div>Mua lại</div>
                <Link className="btnSeeDetail" href={`/detail/${order?.id}`}>
                  Xem chi tiết
                </Link>
                {order?.main_state === `Đã hủy` ? null : <div>Theo dõi đơn</div>}
              </ButtonGroup>
            </OrderFooter>
          </StyledOrder>
        )
      })}
      {loading ? <LoadingOrderList /> : null}
    </OrderList>
  )
}

export default OderList
