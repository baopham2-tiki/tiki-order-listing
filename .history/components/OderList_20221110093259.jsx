import React from 'react';
import styled from 'styled-components'

const OrderList = styled.div`
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
    position: relative;
`
const StyledOrder = styled.div`
    background: rgb(255, 255, 255);
    border-radius: 4px
    font-size: 13px;
    margin-bottom: 20px;
    padding: 16px;
    
`
const OrderHeader = styled.div`
    border-bottom: 1px solid rgb(235, 235, 240);
    padding-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;`

const StatusOrder = styled.div`
display: flex;
    flex-direction: column;
`
const MainStatus = styled.div`
    color: #red;
    ::before {
    content: "";
    display: block;
    background: url(/_desktop-next/static/img/account/delivery.png) center center / 20px 20px no-repeat;
    width: 20px;
    height: 20px;
    float: left;
    margin: 0px 6px 0px 0px;
    }
    .p{
        margin: 0px 0px 10px;
        
    }
    .sub-status{
        color: rgb(56, 56, 61)!important;
        font-weight: 500;
        font-size: 14px;
        margin-top: 4px;}
`

const OderList = () => {
    return (
        <OrderList>
            <StyledOrder>
                <OrderHeader>
                    <StatusOrder>
                        <MainStatus>Giao trước 18:00 ngày 09/11/2022</MainStatus>
                        <p><span className='sub-status'>Đang xử lý</span> &nbsp;
                            <span>Sẵn sàng lấy hàng | 15:54, Thứ Tư 09/11/2022</span></p></StatusOrder>
                </OrderHeader>
            </StyledOrder>
        </OrderList>
    );
};

export default OderList;