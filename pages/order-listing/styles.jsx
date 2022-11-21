import styled from 'styled-components'

export const StyledOrderApp = styled.div`
  max-width: 950px;
  margin: 0 auto;
  .btnLoadMore {
    padding: 12px 8px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid rgb(11, 116, 229);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: rgb(11, 116, 229);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    margin-left: 8px;
    position: relative;
    transform: translate(600%, 50%);
    margin-bottom: 80px;
  }
`
export const Heading = styled.div`
  font-size: 19px;
  line-height: 21px;
  font-weight: 300;
  margin: 20px 0px 15px;
`
export const StyledTabs = styled.div`
  cursor: pointer;
  background: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: sticky;
  top: 0px;
  z-index: 10;
  .tab-pend {
    width: 16.6667%;
    padding: 12px 0px;
    text-align: center;
  }
  .tab-pend.active {
    border-bottom: 2px solid rgb(13, 92, 182);
    color: rgb(13, 92, 182);
  }
`

export const StyledInput = styled.div`
  width: 100%;
  position: relative;
  margin: 12px 0px;
  .icon-left {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }
  .input {
    padding-left: 40px !important;

    padding-right: 140px !important;

    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s,
      -webkit-box-shadow 0.15s ease-in-out 0s;
    height: 36px;
    width: 100%;
    border-radius: 4px;
    padding: 10px 12px;
    line-height: 20px;
    outline: none;
    flex: 1 1 0%;
    border: 1px solid rgb(196, 196, 207);
  }
  .search-right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(11, 116, 229);
    padding: 0px 6px 0px 16px;
    border-left: 2px solid rgb(221, 221, 227);
    cursor: pointer;
  }
`
