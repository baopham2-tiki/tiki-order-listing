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
    margin: 10px 0px 58px;
    
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
    table{
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
    thead{
        display: table-header-group;
        tr{
            display: table-row;
            padding: 10px;
            th{
                display: table-cell;
                padding: 20px 15px;
                border-top: none;
                min-width: 100px;
                position: relative;
                background: 0px 0px;
                color: rgb(120, 120, 120);
                font-size: 15px;
                font-weight: 400;
                border-bottom: 1px solid rgb(244, 244, 244);
                text-align: left;
            }
        }
    }
    tbody{
        tr{
            border-top: none;
            border-bottom: 1px solid rgb(244, 244, 244);
            display: table-row;
            padding: 10px;
            td{
                border-top: none;
                border-left: none;
                border: none;
                position: relative;
                display: table-cell;
                padding: 20px 15px;
                color: rgb(36, 36, 36);
                vertical-align: top;
                min-width: 100px;
                .product-item{
                    display: flex;
                    img{
                        width: 60px;
                        height: 60px;
                        margin-right: 15px;
                        max-width: 100%;
                        border-style: none;
                    }
                    .product-info{
                        .product-name{
                            font-size: 14px;
                            color: rgb(36, 36, 36);
                        }
                        .product-seller{
                            font-size: 11px;
                            margin: 12px 0px 0px;
                            a{
                                color: rgb(11, 116, 229);
    text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
    }
    }
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
        <ProductList>
            <table>
                <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Giảm giá</th>
                        <th>Tạm tính</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="product-item">
                                <img src="https://uat.tikicdn.com/cache/200x200/ts/product/ed/77/34/5ac094603998b37254d2c149d5d4f658.jpeg" alt="Máy lạnh Toshiba new - ThuPhung - 4.10.21" />
                                <div className="product-info">
                                    <a className="product-name" href="/product-p2411778.html?spid=2411779">Máy lạnh Toshiba new - ThuPhung - 4.10.21</a>
                                    <p className="product-seller">Cung cấp bởi <a href="/cua-hang/tiki-trading">Tiki trading</a></p>
                                    <p className="product-sku">Sku: 1304711755694</p>
                                    <div className="product-review"></div>
                                </div></div>
                        </td>
                        <td className="price">3.100.000 ₫</td>
                        <td className="quantity">1</td>
                        <td className="discount-amount">0 ₫</td>
                        <td className="raw-total">3.100.000 ₫</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4"><span>Tạm tính</span></td>
                        <td>3.100.000 ₫</td>
                    </tr>
                    <tr>
                        <td colspan="4"><span>Phí vận chuyển</span></td>
                        <td>39.300 ₫</td>
                    </tr>
                    <tr>
                        <td colspan="4"><span>Tổng cộng</span></td>
                        <td><span className="sum">3.139.300 ₫</span>
                        </td></tr><tr>
                        <td colspan="5"><div className="astra-summary">
                            <div className="styles__StyledAstraSummary-sc-108xqhy-0 cGuauH"><div className="sub-data"></div>
                                <div className="styles__FlexRow-sc-108xqhy-2 bVUYjq">
                                    <div className="label label--main">Thưởng Astra*</div>
                                    <div className="value"><span className="value__main">
                                        <svg className="value__astra-icon" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="10" fill="non"></circle><g clip-path="url(#clip0_17203_537963)"><path d="M11.4017 8.33958H12.9358L10 1L7.06418 8.33958H8.76754C8.97199 8.33958 9.15584 8.2151 9.23177 8.02527L10 6.1047L10.7054 7.86812C10.8193 8.15286 11.0951 8.33958 11.4017 8.33958Z" fill="url(#paint0_linear_17203_537963)"></path><path d="M12.6745 12.7909L10 11.2125L7.3255 12.7909L8.20759 10.5857C8.29842 10.3586 8.21168 10.0992 8.00256 9.97243L6.72163 9.19591L3.5 17.25L10 13.4139L16.5 17.25L13.2784 9.19591L11.9974 9.97243C11.7883 10.0992 11.7016 10.3586 11.7924 10.5857L12.6745 12.7909Z" fill="url(#paint1_linear_17203_537963)"></path></g><defs><linearGradient id="paint0_linear_17203_537963" x1="10" y1="6.5" x2="10" y2="17" gradientUnits="userSpaceOnUse"><stop stop-color="#FF424E"></stop><stop offset="1" stop-color="#5E5CE6"></stop></linearGradient><linearGradient id="paint1_linear_17203_537963" x1="10" y1="6.5" x2="10" y2="17" gradientUnits="userSpaceOnUse"><stop stop-color="#FF424E"></stop><stop offset="1" stop-color="#5E5CE6"></stop></linearGradient><clipPath id="clip0_17203_537963"><rect width="13" height="16.25" fill="white" transform="translate(3.5 1)"></rect></clipPath></defs></svg>62,00</span></div>
                                </div></div></div>
                        </td>
                    </tr><tr>
                        <td colspan="4"></td>
                        <td><a title="Hủy đơn hàng" className="cancel-order">Hủy đơn hàng</a></td>
                    </tr>
                </tfoot>
            </table>
        </ProductList>
    </Detail>
}

export default detail
