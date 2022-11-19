import React from 'react'
import styled from 'styled-components'
const ErrorPage2 = styled.div`
  width: 950px;
  height: 400px;
  img {
    width: 950px;
    height: 400px;
  }
`
const ErrorPage = () => {
  return (
    <ErrorPage2>
      <img src="./assets/Error.png" />
    </ErrorPage2>
  )
}

export default ErrorPage
