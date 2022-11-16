import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  Detail,
  HeadingDetail,
  CreateDate,
  DetailGroup,
  DetailGroupSection,
  Section,
  ProductList,
  DetailList,
} from '../styles/stylesDetail'

const bounceLoader = keyframes`
to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
`
const BounceLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  p {
    font-size: 10px;
    position: absolute;
    top: -40px;
    left: -80px;
  }
  div {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem;
    background: #8385aa;
    border-radius: 50%;
    animation: ${bounceLoader} 0.6s infinite alternate;
    :nth-child(2) {
      animation-delay: 0.15s;
    }

    :nth-child(3) {
      animation-delay: 0.3s;
    }
  }
`
const BoxBounceLoader = styled.div`
  width: 286px;
  height: 144px;
  background: #fff;
  position: relative;
`
const loadingDetail = () => {
  return (
    <Detail>
      <DetailList>
        <HeadingDetail>
          <span>Chi tiết đơn hàng</span>
          <span className="split">-</span>
          <span className="status">Đang xử lý</span>
        </HeadingDetail>
        <CreateDate>Ngày đặt hàng: </CreateDate>
        <DetailGroup>
          <DetailGroupSection>
            <Section>
              <div className="title">ĐỊA CHỈ NGƯỜI NHẬN</div>
              <div className="content">
                <BoxBounceLoader>
                  <BounceLoading>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </BounceLoading>
                </BoxBounceLoader>
              </div>
            </Section>
          </DetailGroupSection>

          <DetailGroupSection>
            <Section>
              <div className="title">HÌNH THỨC GIAO HÀNG</div>
              <div className="content">
                <BoxBounceLoader>
                  <BounceLoading>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </BounceLoading>
                </BoxBounceLoader>
              </div>
            </Section>
          </DetailGroupSection>
          <DetailGroupSection>
            <Section>
              <div className="title">HÌNH THỨC THANH TOÁN</div>
              <div className="content">
                <BoxBounceLoader>
                  <BounceLoading>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </BounceLoading>
                </BoxBounceLoader>
              </div>
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
              <BoxBounceLoader>
                <BounceLoading>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </BounceLoading>
              </BoxBounceLoader>
            </tbody>
          </table>
        </ProductList>
      </DetailList>
    </Detail>
  )
}

export default loadingDetail
