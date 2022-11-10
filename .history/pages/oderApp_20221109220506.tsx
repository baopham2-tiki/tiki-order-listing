import React from 'react'
import styled from 'styled-components'

const StyledOrderApp = styled.div`
  max-width: 950px;
  margin-left: 200px;
`
const TabOrder = styled.div`
  display: flex;
  position: relative;
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
        <div className="line"></div>
      </TabOrder>
    </StyledOrderApp>
  )
}
