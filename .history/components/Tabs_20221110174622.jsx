import React from 'react';
import { StyledTabs } from '../pages/order-listing/styles'
const Tabs = () => {
    const tabs = ['Tất cả các đơn', 'Đang chờ xử lý', 'Đang giao hàng', 'Đã giao hàng', 'Đã hủy']
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