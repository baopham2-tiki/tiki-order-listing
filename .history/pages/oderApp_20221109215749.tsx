import React from 'react'
import styled from 'styled-components'

const StyledOrderApp = styled.div`
  background-color: #0e0707;
  height: 200px;
`

export default function oderApp() {
  return (
    <StyledOrderApp>
      <div class="tabs">
        <div class="tab-item active">
          <i class="tab-icon fas fa-code"></i>
          React
        </div>
        <div class="tab-item">
          <i class="tab-icon fas fa-cog"></i>
          Angular
        </div>
        <div class="tab-item">
          <i class="tab-icon fas fa-plus-circle"></i>
          Ember
        </div>
        <div class="tab-item">
          <i class="tab-icon fas fa-pen-nib"></i>
          Vue.JS
        </div>
        <div class="line"></div>
      </div>
    </StyledOrderApp>
  )
}
