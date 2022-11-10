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

const TabContent = styled.div`
  padding: 28px 0;
  .tab-pane {
    color: #333;
    display: none;
  }
  .tab-pane.active {
    display: block;
  }
`

export default function oderApp() {
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)

  const tabs = $$('.tab-item')
  const panes = $$('.tab-pane')

  const tabActive = $('.tab-item.active')
  const line = $('.tabs .line')

  // SonDN fixed - Active size wrong size on first load.
  // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
  requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
  })

  tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {
      $('.tab-item.active').classList.remove('active')
      $('.tab-pane.active').classList.remove('active')

      line.style.left = this.offsetLeft + 'px'
      line.style.width = this.offsetWidth + 'px'

      this.classList.add('active')
      pane.classList.add('active')
    }
  })
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
            Vue (pronounced /vju/, like view) is a progressive framework for building user
            interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be
            incrementally adoptable.{' '}
          </p>
        </div>
      </TabContent>
    </StyledOrderApp>
  )
}
