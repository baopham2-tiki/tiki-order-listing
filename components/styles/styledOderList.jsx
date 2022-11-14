import styled from 'styled-components'

export const OrderList = styled.div`
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 110px);
  float: left;
  width: 950px;
  position: relative;
  transition-property: transform;
  left: 0px;
  transition-duration: 0ms;
  transform: translate(0px, 0px) translateZ(0px);
  overflow: hidden;
`
export const StyledOrder = styled.div`
    background: rgb(255, 255, 255);
    border-radius: 4px
    font-size: 13px;
    margin-bottom: 20px;
    padding: 16px;
    
`
export const OrderHeader = styled.div`
  border-bottom: 1px solid rgb(235, 235, 240);
  padding-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`

export const StatusOrder = styled.div`
  display: flex;
  flex-direction: column;
`
export const MainStatus = styled.div`
  color: rgb(0, 171, 86);
  ::before {
    content: '';
    display: block;
    background: url(/_desktop-next/static/img/account/delivery.png) center center / 20px 20px
      no-repeat;
    width: 20px;
    height: 20px;
    float: left;
    margin: 0px 6px 0px 0px;
  }
  .p {
    margin: 0px 0px 10px;
    .sub-state {
      font-weight: 300;
      font-size: 14px;
      color: rgb(128, 128, 137);
    }
  }
  .sub-status {
    color: rgb(56, 56, 61);
    font-weight: 500;
    font-size: 14px;
    margin-top: 4px;
    ::before {
      content: '';
      display: block;
      background: url(/_desktop-next/static/img/account/indicator.png) center center / 20px 20px
        no-repeat;
      width: 20px;
      height: 20px;
      float: left;
      margin: 0px 6px 0px 0px;
    }
  }
`
export const OrderInfor = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
  border-bottom: 1px solid rgb(235, 235, 240);
  -webkit-box-pack: justify;
  justify-content: space-between;
`
export const OderDetail = styled.div`
  display: flex;
`
export const DetailImg = styled.div`
  img {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 4px;
    border: 0.5px solid rgb(238, 238, 238);
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center center;
    position: relative;
  }
  .quantity {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgb(128, 128, 137);
    text-align: center;
    position: relative;
    top: -31px;
    left: 52px;
    width: 28px;
    height: 28px;
    background-color: rgb(235, 235, 240);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    right: 0px;
    bottom: 0px;
    border-top-left-radius: 10px;
  }
`

export const ProductInfor = styled.div`
  margin: 0px 12px;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 6px;
    margin: 0px 0px 10px;
  }
  .store {
    margin-top: 4px;
    color: rgb(128, 128, 137);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`
export const PriceDetail = styled.div`
  min-width: 120px;
  -webkit-box-pack: end;
  justify-content: flex-end;
  display: flex;
`

export const OrderFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 12px;
  width: 100%;
`
export const TotalMoney = styled.div`
  font-size: 17px;
  display: flex;
  margin-bottom: 12px;
  .title {
    font-weight: 300;
    color: rgb(128, 128, 137);
    margin-right: 8px;
  }
  .total {
    font-weight: 400;
    color: rgb(56, 56, 61);
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  div {
    padding: 12px 8px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid rgb(11, 116, 229);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: rgb(11, 116, 229);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    margin-left: 8px;
  }
  .btnSeeDetail {
    padding: 12px 8px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid rgb(11, 116, 229);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: rgb(11, 116, 229);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    margin-left: 8px;
  }
`
