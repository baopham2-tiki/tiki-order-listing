import React from 'react'
import PropTypes from 'prop-types'
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
  return <StyledOrderApp></StyledOrderApp>
}
