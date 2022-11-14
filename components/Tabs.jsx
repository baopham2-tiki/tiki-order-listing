import React, { useState } from 'react'
import { StyledTabs } from '../pages/order-listing/styles'
const Tabs = (props) => {
  const { tabs, handleClick } = props

  return (
    <StyledTabs>
      {tabs.map((tab, index) => (
        <div
          onClick={() => handleClick(index)}
          className={'tab-pend' + (tab.active ? ' active' : '')}
        >
          {tab.label}
        </div>
      ))}
    </StyledTabs>
  )
}

export default Tabs
