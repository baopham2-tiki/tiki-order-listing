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
  }
  .styledOderTabs.active {
    border-bottom: 2px solid rgb(13, 92, 182);
    color: rgb(13, 92, 182);
  }
`
export default function oderApp() {
  return (
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
      <div>
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
          style="color: rgb(128, 128, 137);"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          name="search"
          placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
          type="search"
          className="input with-icon-left"
        ></input>
      </div>
    </StyledOrderApp>
  )
}
