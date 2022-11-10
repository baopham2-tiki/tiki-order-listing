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
    color: rgb(0, 171, 86);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;`

const OderList = () => {
    return (
        <OrderList>
            <StyledOrder>
                <OrderHeader></OrderHeader>
            </StyledOrder>
        </OrderList>
    );
};

export default OderList;