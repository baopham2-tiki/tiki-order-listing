import React from 'react';
import styled from 'styled-components'

const OrderList = styled.div`
    height: auto;
    overflow: auto;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 110px);
`

const OderList = () => {
    return (
        <OrderList>
            <StyledOrder>

            </StyledOrder>
        </OrderList>
    );
};

export default OderList;