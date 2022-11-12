import styled from 'styled-components'

export const Detail = styled.div`
  max-width: 950px;
  margin: 0px auto;
  font-size: 13px;
  color: rgb(36, 36, 36);
  line-height: 1.5;
`
export const DetailList = styled.div``
export const HeadingDetail = styled.div`
  font-size: 19px;
  font-weight: 300;
  margin: 20px 0px 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  .split {
    margin: 0px 5px;
  }
  .status {
    font-size: 19px;
    color: rgb(36, 36, 36);
    font-weight: bolder;
  }
`
export const CreateDate = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

export const DetailGroup = styled.div`
  display: flex;
  margin: 10px 0px 58px;
`
export const DetailGroupSection = styled.div`
  width: 33.3333%;
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.65);
  :first-child {
    margin-left: 0px;
  }
`
export const Section = styled.div`
  .title {
    font-size: 13px;
    text-transform: uppercase;
    margin: 0px 0px 15px;
    color: rgb(36, 36, 36);
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    height: 100%;
    .name {
      margin: 5px 0px 0px;
      color: rgb(36, 36, 36);
      font-weight: bold;
    }
    p {
      margin: 5px 0px 0px;
    }
  }
`
export const ProductList = styled.div`
  table {
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
    thead {
      display: table-header-group;
      tr {
        display: table-row;
        padding: 10px;
        th {
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
    tbody {
      tr {
        border-top: none;
        border-bottom: 1px solid rgb(244, 244, 244);
        display: table-row;
        padding: 10px;
        td {
          border-top: none;
          border-left: none;
          border: none;
          position: relative;
          display: table-cell;
          padding: 20px 15px;
          color: rgb(36, 36, 36);
          vertical-align: top;
          min-width: 100px;
          .product-item {
            display: flex;
            img {
              width: 60px;
              height: 60px;
              margin-right: 15px;
              max-width: 100%;
              border-style: none;
            }
            .product-info {
              .product-name {
                font-size: 14px;
                color: rgb(36, 36, 36);
              }
              .product-seller {
                font-size: 11px;
                margin: 12px 0px 0px;
                a {
                  color: rgb(11, 116, 229);
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }
    tfoot {
      tr {
        td {
          text-align: right;
          display: table-cell;
          padding: 5px 20px;
          max-width: 550px;
          min-width: 125px;
          color: rgb(36, 36, 36);
          span {
            color: rgb(120, 120, 120);
            font-size: 14px;
          }
          .sum {
            color: rgb(255, 59, 39);
            font-size: 18px;
          }
        }
        .astra-summary {
          float: right;
          width: 35%;
          .styles__StyledAstraSummary-sc-108xqhy-0 {
            background-color: rgb(242, 240, 254);
            padding: 12px;
            border-radius: 8px;
            .sub-data {
              display: grid;
              gap: 8px;
            }
            .styles__FlexRow-sc-108xqhy-2 {
              display: flex;
              align-items: flex-start;
              -webkit-box-pack: justify;
              justify-content: space-between;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              .label {
                color: rgb(64, 45, 161);
              }
              .value {
                .value__main {
                  display: flex;
                  -webkit-box-align: center;
                  align-items: center;
                  -webkit-box-pack: end;
                  justify-content: end;
                  font-weight: 500;
                  color: rgb(111, 85, 237);
                  .value__astra-icon {
                    margin-right: 4px;
                  }
                }
              }
            }
          }
        }
        .footer-table {
          padding-bottom: 30px;
        }
        td {
          .cancel-order {
            background-color: rgb(253, 216, 53);
            color: rgb(74, 74, 74);
            display: inline-block;
            margin-bottom: 0px;
            font-weight: 400;
            text-align: center;
            cursor: pointer;
            border: 1px solid rgb(253, 216, 53);
            padding: 6px 12px;
            font-size: 14px;
            border-radius: 4px;
          }
        }
      }
    }
  }
`
