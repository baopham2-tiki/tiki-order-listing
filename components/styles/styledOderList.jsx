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
  border-radius: 4px;
  font-size: 13px;
  margin-bottom: 20px;
  padding: 16px;
`
export const OrderHeader = styled.div`
  border-bottom: 1px solid rgb(235, 235, 240);
  padding-bottom: 12px;
  color: rgb(128, 128, 137);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  .waitting_confirm {
    display: flex;
    flex-direction: column;
    .sub-state {
      font-weight: 300;
      font-size: 14px !important;
      color: rgb(128, 128, 137) !important;
      margin-left: 10px;
    }
  }
  .styles__hBDqMZ {
    color: rgb(128, 128, 137);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    ::before {
      content: '';
      display: block;
      background: url(./public/assets/delivery_done.png) center center / 20px 20px no-repeat;
      width: 20px;
      height: 20px;
      float: left;
      margin: 0px 6px 0px 0px;
    }
  }
  .styles__jSGPXD {
    color: rgb(56, 56, 61);
    font-weight: 500;
    font-size: 14px;
    margin-top: 4px;
    ::before {
      content: '';
      display: block;
      background: url(./assets/indicator.png) center center / 20px 20px no-repeat;
      width: 20px;
      height: 20px;
      float: left;
      margin: 0px 6px 0px 0px;
    }
  }
  .styles__imCNgm {
    border-bottom: 1px solid rgb(235, 235, 240);
    padding-bottom: 12px;
    color: rgb(255, 159, 65);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
  .styles__OrderHeader-sc-1vf2n1c-1 {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    img {
      content: '';
      display: block;
      background: url('../../public/assets/block.png') center center / 20px 20px no-repeat;
      width: 20px;
      height: 20px;
      float: left;
      margin: 0px 6px 0px 0px;
    }
  }
`

export const StatusOrder = styled.div`
  display: flex;
  flex-direction: column;
  .sub-text {
    margin: 0px 0px 10px;
    .sub-state {
      font-weight: 300;
      font-size: 14px !important;
      color: rgb(128, 128, 137) !important;
    }
    .sub-status {
      color: rgb(56, 56, 61);
      font-weight: 500;
      font-size: 14px;
      margin-top: 4px;
      ::before {
        content: '';
        display: block;
        background: url(./assets/indicator.png) center center / 20px 20px no-repeat;
        width: 20px;
        height: 20px;
        float: left;
        margin: 0px 6px 0px 0px;
      }
    }
  }
`
export const MainStatus = styled.div`
  color: rgb(0, 171, 86);
  ::before {
    content: '';
    display: block;
    background: url(./assets/delivery.png) center center / 20px 20px no-repeat;
    width: 20px;
    height: 20px;
    float: left;
    margin: 0px 6px 0px 0px;
  }
`
export const OderInforPointer = styled.div`
  cursor: pointer;
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
  .quantity {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgb(128, 128, 137);
    text-align: center;
    position: relative;
    top: 52px;
    left: -28px;
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
`

export const ProductInfor = styled.div`
  margin: 0px -14px;
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
