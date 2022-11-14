import React from 'react';
import { StyledTabs } from '../pages/order-listing/styles'
const Tabs = () => {
    const tabs = [{ label: 'Tất cả các đơn', active: true }, { label: 'Chờ thanh toán', active: true }, { label: 'Đang xử lý', active: true }, { label: 'Đã giao', active: true }, { label: 'Đã huỷ', active: true }]
    return (
        <StyledTabs>
            <div className="tab-pend active">Tất cả các đơn</div>
            <div className="tab-pend">Chờ thanh toán</div>
            <div className="tab-pend">Đang xử lý</div>
            <div className="tab-pend">Đang vận chuyển</div>
            <div className="tab-pend">Đã giao</div>
            <div className="tab-pend">Đã huỷ</div>
        </StyledTabs>

    );
};

export default Tabs;