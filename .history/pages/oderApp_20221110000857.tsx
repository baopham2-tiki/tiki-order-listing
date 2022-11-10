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
export default function oderApp() {
  return (
    <StyledOrderApp>
      <Heading>Đơn hàng của tôi</Heading>
    </StyledOrderApp>
  )
}
