import React from 'react'
import styled from 'styled-components'

const StyledOrderApp = styled.div`
  max-width: 950px;
  margin: 0 auto;
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
`
const StyledOrderTabs = styled.div`
  width: 16.6667%;
  padding: 12px 0px;
  text-align: center;
  color: rgb(13, 92, 182);
  border-bottom: 2px solid rgb(13, 92, 182);
`
export default function oderApp() {
  return (
    <StyledOrderApp>
      <Heading>Đơn hàng của tôi</Heading>
      <StyledTabs>
        <StyledOrderTabs>Tất cả đơn</StyledOrderTabs>
        <StyledOrderTabs className="active">Tất cả đơn</StyledOrderTabs>
        <StyledOrderTabs>Tất cả đơn</StyledOrderTabs>
        <StyledOrderTabs>Tất cả đơn</StyledOrderTabs>
        <StyledOrderTabs>Tất cả đơn</StyledOrderTabs>
        <StyledOrderTabs>Tất cả đơn</StyledOrderTabs>
      </StyledTabs>
    </StyledOrderApp>
  )
}
