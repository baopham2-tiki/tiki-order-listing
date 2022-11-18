import React from 'react'
import { useSelector } from 'react-redux'
import {
  Detail,
  HeadingDetail,
  CreateDate,
  DetailGroup,
  DetailGroupSection,
  Section,
  ProductList,
  DetailList,
} from './styles/stylesDetail'
import EmptyPage from './empty/emptyPage'
import ErrorPage from './errorPage'
import LoadingPage from './loading/loadingDetail'
import { formatDate, formatMoney } from '../utils/orders'

const detail = () => {
  const { details, error, loading } = useSelector((state) => state.orders)
  const detailStreet = details?.shipping_address
  const detailShipping = details?.shipping
  const detailItems = details?.items
  const detailPrice = details?.price_summary
  if (error) {
    return <ErrorPage />
  }
  if (loading === false && details === null) {
    return <EmptyPage />
  }

  return (
    <Detail>
      <DetailList>
        <HeadingDetail>
          <span>Chi tiết đơn hàng #{details?.id}</span>
          <span className="split">-</span>
          <span className="status">Đang xử lý</span>
        </HeadingDetail>
        <CreateDate>Ngày đặt hàng: {formatDate(details?.created_at)}</CreateDate>
        <DetailGroup>
          <DetailGroupSection>
            <Section>
              <div className="title">ĐỊA CHỈ NGƯỜI NHẬN</div>
              {detailStreet === null ? (
                !details ? (
                  <LoadingPage />
                ) : (
                  <div className="content">
                    <p className="name">{details?.billing_address?.full_name}</p>
                    <p className="phone">
                      <span>Điện thoại: </span>
                      {details?.billing_address.telephone}
                    </p>
                  </div>
                )
              ) : !detailStreet ? (
                <LoadingPage />
              ) : (
                <div className="content">
                  <p className="name">Tiki Trading</p>
                  <p className="address">
                    <span>Địa chỉ: </span>
                    {detailStreet?.street}, {detailStreet?.ward}, {detailStreet?.city},{' '}
                    {detailStreet?.region}, {detailStreet?.country}
                  </p>
                  <p className="phone">
                    <span>Điện thoại: </span>
                    {detailStreet?.telephone}
                  </p>
                </div>
              )}
            </Section>
          </DetailGroupSection>

          {detailShipping === null ? null : (
            <DetailGroupSection>
              <Section>
                <div className="title">HÌNH THỨC GIAO HÀNG</div>
                {!detailShipping ? (
                  <LoadingPage />
                ) : (
                  <div className="content">
                    <p>
                      <img src="/iconTikiNow.svg" />
                      <span>{detailShipping?.method_name}</span>
                    </p>
                    <p>{detailShipping?.short_method_text}</p>
                    <p>{detailShipping?.method_text}</p>
                    <p>{detailShipping?.method_fee_text}</p>
                    <p class="warning-mess">{detailShipping?.warning_message}</p>
                  </div>
                )}
              </Section>
            </DetailGroupSection>
          )}
          <DetailGroupSection>
            <Section>
              <div className="title">HÌNH THỨC THANH TOÁN</div>
              {!details?.payment ? (
                <LoadingPage />
              ) : (
                <div className="content">
                  <p>{details?.payment?.method_text}</p>
                </div>
              )}
            </Section>
          </DetailGroupSection>
        </DetailGroup>
        <ProductList>
          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Giảm giá</th>
                <th>Tạm tính</th>
              </tr>
            </thead>
            <tbody>
              {!detailItems ? (
                <tr>
                  <td>
                    <LoadingPage />
                  </td>
                </tr>
              ) : (
                detailItems?.map((items) => {
                  return (
                    <tr key={items?.id}>
                      <td>
                        <div className="product-item">
                          <img
                            src={items.thumbnail_url}
                            alt="Máy lạnh Toshiba new - ThuPhung - 4.10.21"
                          />
                          <div className="product-info">
                            <a className="product-name" href="/product-p2411778.html?spid=2411779">
                              {items.product_name}
                            </a>
                            <p className="product-seller">
                              Cung cấp bởi{' '}
                              <a href={items?.current_seller?.link}>
                                {items?.current_seller?.name}
                              </a>
                            </p>
                            <p className="product-sku">Sku: {items?.product_sku}</p>
                            <div className="product-review"></div>
                          </div>
                        </div>
                      </td>
                      <td className="price">{formatMoney(items?.grand_total)}</td>
                      <td className="quantity">{items.qty}</td>
                      <td className="discount-amount">{formatMoney(items?.discount)}</td>
                      <td className="raw-total">{formatMoney(items?.subtotal)}</td>
                    </tr>
                  )
                })
              )}
            </tbody>
            <tfoot>
              {detailPrice?.map((item) => {
                return (
                  <tr key={item?.name}>
                    <td colspan="4">
                      <span>{item?.name}</span>
                    </td>
                    <td>{formatMoney(item?.value)}</td>
                  </tr>
                )
              })}
              <tr>
                <td colspan="4">
                  <span>Tổng cộng</span>
                </td>
                <td>
                  <span className="sum">{formatMoney(details?.grand_total)}</span>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div className="astra-summary">
                    <div className="styles__StyledAstraSummary-sc-108xqhy-0 cGuauH">
                      <div className="sub-data"></div>
                      <div className="styles__FlexRow-sc-108xqhy-2 bVUYjq">
                        <div className="label label--main">Thưởng Astra*</div>
                        <div className="value">
                          <span className="value__main">
                            <img src="/iconTikiAstra.svg" />
                            {details?.asa_summary?.asa_cashback}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td className="footer-table">
                  <a title="Hủy đơn hàng" className="cancel-order">
                    Hủy đơn hàng
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </ProductList>
      </DetailList>
    </Detail>
  )
}

export default detail
