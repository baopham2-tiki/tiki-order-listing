import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from 'styled-components'

const StyledOrderApp = styled.div`
  max-width: 950px;
  margin-left: 200px;
`

export default function oderApp() {
  const [activeTab, setActiveTab] = React.useState('1')
  const [tabsLine, setTabsLine] = React.useState({
    left: 0,
    width: 0,
  })

  return <StyledOrderApp></StyledOrderApp>
}
