import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import styled from 'styled-components'

const AppSkeleton = styled.div`
  width: 950px;
  height: auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 110px);
  float: left;
  position: relative;
  left: 0px;
  transition-property: transform;
  transition-duration: 0ms;
  transform: translate(0px, 0px) translateZ(0px);
  overflow: hidden;
`

const Orderlist = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  font-size: 13px;
  margin-bottom: 20px;
  padding: 12px;
  .one {
    margin-bottom: 10px;
  }
  .two {
    margin-bottom: 10px;
    margin-right: 12px;
  }
  .three {
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .four {
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`
const Flex = styled.div`
  display: flex;
`
const Footer = styled.div`
  display: flex;
  float: right;
  .six {
    margin-left: 10px;
  }
`
const LoadingOrderList = () => {
  return (
    <AppSkeleton>
      <Orderlist>
        <Skeleton className="one" variant="rectangular" width={926} height={20} />
        <Flex>
          <Skeleton className="two" variant="rectangular" width={80} height={80} />
          <div>
            <Skeleton className=" three" variant="rectangular" width={834} height={20} />
            <Skeleton className=" four" variant="rectangular" width={400} height={20} />
          </div>
        </Flex>
        <Footer>
          <Skeleton className="five" variant="rectangular" width={100} height={32} />
          <Skeleton className="six" variant="rectangular" width={100} height={32} />
        </Footer>
      </Orderlist>
    </AppSkeleton>
  )
}

export default LoadingOrderList
