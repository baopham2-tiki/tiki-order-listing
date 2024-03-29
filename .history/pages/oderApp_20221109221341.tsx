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
      <TabContent>
        <div className="tab-pane active">
          <h2>React</h2>
          <p>
            React makes it painless to create interactive UIs. Design simple views for each state in
            your application, and React will efficiently update and render just the right components
            when your data changes.
          </p>
        </div>
        <div className="tab-pane">
          <h2>Angular</h2>
          <p>
            Angular is an application design framework and development platform for creating
            efficient and sophisticated single-page apps.
          </p>
        </div>
        <div className="tab-pane">
          <h2>Ember</h2>
          <p>
            Ember.js is a productive, battle-tested JavaScript framework for building modern web
            applications. It includes everything you need to build rich UIs that work on any device.
          </p>
        </div>
        <div className="tab-pane">
          <h2>Vue.js</h2>
          <p>
            Vue (pronounced /vjuː/, like view) is a progressive framework for building user
            interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be
            incrementally adoptable.{' '}
          </p>
        </div>
      </TabContent>
    </StyledOrderApp>
  )
}
