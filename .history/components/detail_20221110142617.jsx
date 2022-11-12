import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Detail = styled.div`
font-size: 13px;
    color: rgb(36, 36, 36);
    line-height: 1.5;
`
const detail = () => {
    const details = useSelector((state) => state.orders.data)
    console.log(details)


    return <Detail>

    </Detail>
}

export default detail
