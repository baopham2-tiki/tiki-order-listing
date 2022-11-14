import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const detail = () => {
    const details = useSelector((state) => state.orders.data)
    console.log(details)


    return <div></div>
}

export default detail
