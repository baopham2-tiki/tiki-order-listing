import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Detail = styled.div`
`
const detail = () => {
    const details = useSelector((state) => state.orders.data)
    console.log(details)


    return <Detail>

    </Detail>
}

export default detail
