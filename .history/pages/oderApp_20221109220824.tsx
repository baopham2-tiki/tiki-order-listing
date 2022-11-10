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
