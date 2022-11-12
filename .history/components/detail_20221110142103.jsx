import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const detail = () => {
    const detail = useSelector((state) => state.orders)
    console.log(detail)


    return <div></div>
}

export default detail
