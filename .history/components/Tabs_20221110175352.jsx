import React from 'react'
import { StyledTabs } from '../pages/order-listing/styles'
const Tabs = () => {
  const [tabs, setTabs] = [
    { label: 'Tất cả các đơn', active: true },
    { label: 'Chờ thanh toán', active: false },
    { label: 'Đang xử lý', active: false },
    { label: 'Đã giao', active: false },
    { label: 'Đã huỷ', active: false },
  ]
  const handleClick = (index) => {}
  return (
    <StyledTabs>
      {tabs.map((tab, index) => (
        <div onClick={handleClick} className={'tab-pend' + (tab.active ? ' active' : '')}>
          {tab.label}
        </div>
      ))}
    </StyledTabs>
  )
}

export default Tabs
