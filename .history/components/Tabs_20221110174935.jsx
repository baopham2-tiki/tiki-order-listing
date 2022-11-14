import React from 'react';
import { StyledTabs } from '../pages/order-listing/styles'
const Tabs = () => {
    const tabs = [{ label: 'Tất cả các đơn', active: true }, { label: 'Chờ thanh toán', active: true }, { label: 'Đang xử lý', active: true }, { label: 'Đã giao', active: true }, { label: 'Đã huỷ', active: true }]
    return (
        <StyledTabs>
            {tabs.map((tab, index) => (

                <div className="tab-pend active">Tất cả các đơn</div>
            )
            
        </StyledTabs>

    );
};

export default Tabs;