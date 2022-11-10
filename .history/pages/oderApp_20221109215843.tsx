import React from 'react'
import styled from 'styled-components'

const StyledOrderApp = styled.div``

export default function oderApp() {
  return (
    <StyledOrderApp>
      <div className="tabs">
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
      </div>
    </StyledOrderApp>
  )
}
