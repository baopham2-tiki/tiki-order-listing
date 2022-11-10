import React from 'react'
import styled from 'styled-components'

const StyledOrderApp = styled.div`
  max-width: 950px;
  margin: 0 auto;
  background-color: #f5f5fa;
`
const Heading = styled.div`
  font-size: 19px;
  line-height: 21px;
  font-weight: 300;
  margin: 20px 0px 15px;
`
const StyledTabs = styled.div`
  cursor: pointer;
  background: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: sticky;
  top: 0px;
  z-index: 10;
  .styledOderTabs {
    width: 16.6667%;
    padding: 12px 0px;
    text-align: center;
    color: rgb(13, 92, 182);
  }
  .styledOderTabs.active {
    border-bottom: 2px solid rgb(13, 92, 182);
  }
`
export default function oderApp() {
  return (
    <Order>
      <StyledOrderApp>
        <Heading>Đơn hàng của tôi</Heading>
        <StyledTabs>
          <div className="styledOderTabs active">Tất cả các đơn</div>
          <div className="styledOderTabs">Chờ thanh toán</div>
          <div className="styledOderTabs">Đang xử lý</div>
          <div className="styledOderTabs">Đang vận chuyển</div>
          <div className="styledOderTabs">Đã giao</div>
          <div className="styledOderTabs">Đã huỷ</div>
        </StyledTabs>
      </StyledOrderApp>
    </Order>
  )
}
