import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const detail = () => {
    const details = useSelector((state) => state.orders.data)
    console.log(details)


    return <div></div>
}

export default detail
