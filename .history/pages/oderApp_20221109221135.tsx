import React from 'react'
import styled from 'styled-components'

const StyledOrderApp = styled.div`
  max-width: 950px;
  margin-left: 200px;
`
const TabOrder = styled.div`
  display: flex;
  position: relative;
  .tab-item {
    min-width: 80px;
    padding: 16px 20px 11px 20px;
    font-size: 20px;
    text-align: center;
    color: #c23564;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 5px solid transparent;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
    &.active {
      opacity: 1;
    }
  }
  .
`

const TabsLine = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 6px;
  border-radius: 15px;
  background-color: #c23564;
  transition: all 0.2s ease;
`

export default function oderApp() {
  return (
    <StyledOrderApp>
      <TabOrder>
        <div className="tab-item active">
          <i className="tab-icon fas fa-code"></i>
          React
        </div>
        <div className="tab-item">
          <i className="tab-icon fas fa-cog"></i>
          Angular
        </div>
        <div className="tab-item">
          <i className="tab-icon fas fa-plus-circle"></i>
          Ember
        </div>
        <div className="tab-item">
          <i className="tab-icon fas fa-pen-nib"></i>
          Vue.JS
        </div>
        <TabsLine></TabsLine>
      </TabOrder>
    </StyledOrderApp>
  )
}
