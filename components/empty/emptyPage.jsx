import React from 'react'
import styled from 'styled-components'
const EmptyPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 35px;
  img {
    width: 200px;
    height: 200px;
    max-width: 100%;
  }
  p {
    margin-top: 15px;
    color: rgb(56, 56, 61);
    font-size: 16px;
    font-weight: 400;
    margin: 0px 0px 10px;
  }
`
const EmptyPage = () => {
  return (
    <EmptyPageStyled>
      <img src="/assets/empty-order.png" />
      <p>Chưa có đơn hàng</p>
    </EmptyPageStyled>
  )
}

export default EmptyPage
