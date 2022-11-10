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
export default function oderApp() {
  return (
    <StyledOrderApp>
      <Heading>Đơn hàng của tôi</Heading>
      <StyledTabs>
        <StyledOrderTabs></StyledOrderTabs>
      </StyledTabs>
    </StyledOrderApp>
  )
}
