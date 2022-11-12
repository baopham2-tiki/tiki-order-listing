import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Detail = styled.div`
    flex: 1 1 0%;
    font-size: 13px;
    color: rgb(36, 36, 36);
    line-height: 1.5;
`
const detail = () => {
    const details = useSelector((state) => state.orders.data)
    console.log(details)


    return <Detail>
        <div className="heading">
            <span>Chi tiết đơn hàng #221696256</span>
            <span className="split">-</span>
            <span classNamw="status">Đang xử lý</span></div>
    </Detail>
}

export default detail
