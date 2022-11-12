import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Detail = styled.div`
    flex: 1 1 0%;
    font-size: 13px;
    color: rgb(36, 36, 36);
    line-height: 1.5;
`
const HeadingDetail = styled.div`
font-size: 19px;
    font-weight: 300;
    margin: 20px 0px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`
const detail = () => {
    const details = useSelector((state) => state.orders.data)
    console.log(details)


    return <Detail>
        <HeadingDetail>
            <span>Chi tiết đơn hàng #221696256</span>
            <span className="split">-</span>
            <span className="status">Đang xử lý</span></HeadingDetail>
        <div class="created-date">Ngày đặt hàng: 15:54 09/11/2022</div>
    </Detail>
}

export default detail
