import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Detail = styled.div`
    max-width: 950px;
    margin: 0px auto;
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
    
    .split{
        margin: 0px 5px;
    }
    .status{
        font-size: 19px;
        color: rgb(36, 36, 36);
        font-weight: bolder;
    }
`
const CreateDate = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;`

const DetailGroup = styled.div`
    display: flex;
    margin: 10px 0px 20px;
    
    :first-child{
        margin-left: 0px;
    }`
const DetailGroupSection = styled.div`
   width: 33.3333%;
    margin: 0px 5px;
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.65);
`
const Section = styled.div`
 
 .title{
    font-size: 13px;
    text-transform: uppercase;
    margin: 0px 0px 15px;
    color: rgb(36, 36, 36);
 }
 .content{
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    height: 100%;
    .name{
        margin: 5px 0px 0px;
    }
 }
`
const ProductList = styled.div`
    width: 100%;
    color: rgb(66, 66, 66);
    display: table;
    font-size: 13px;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    border-collapse: collapse;
    border-spacing: 0px;
    line-height: 1.5;
    word-break: break-word;
`
const detail = () => {
    const details = useSelector((state) => state.orders.data)
    console.log(details)


    return <Detail>
        <HeadingDetail>
            <span>Chi tiết đơn hàng #221696256</span>
            <span className="split">-</span>
            <span className="status">Đang xử lý</span></HeadingDetail>
        <CreateDate>Ngày đặt hàng: 15:54 09/11/2022</CreateDate>
        <DetailGroup>
            <DetailGroupSection>
                <Section>
                    <div className="title">Thông tin người nhận</div>
                    <div className="content"><p className="name">Tiki Trading</p><p className="address"><span>Địa chỉ: </span>285 Toà Nhà Viettel, CMT8, Phường 12, Quận 10, Hồ Chí Minh, Việt Nam</p><p className="phone"><span>Điện thoại: </span>0909811211</p></div></Section>
            </DetailGroupSection>
            <DetailGroupSection>
                <Section><div className="title">Thông tin người nhận</div>
                    <div className="content"><p className="name">Tiki Trading</p><p className="address"><span>Địa chỉ: </span>285 Toà Nhà Viettel, CMT8, Phường 12, Quận 10, Hồ Chí Minh, Việt Nam</p><p className="phone"><span>Điện thoại: </span>0909811211</p></div></Section>
            </DetailGroupSection>
            <DetailGroupSection>
                <Section><div className="title">Thông tin người nhận</div>
                    <div className="content"><p className="name">Tiki Trading</p><p className="address"><span>Địa chỉ: </span>285 Toà Nhà Viettel, CMT8, Phường 12, Quận 10, Hồ Chí Minh, Việt Nam</p><p className="phone"><span>Điện thoại: </span>0909811211</p></div></Section>
            </DetailGroupSection>

        </DetailGroup>
        <ProductList></ProductList>
    </Detail>
}

export default detail
