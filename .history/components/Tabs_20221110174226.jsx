import React from 'react';

const Tabs = () => {
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