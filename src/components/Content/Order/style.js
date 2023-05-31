import styled from "styled-components";

const OrderWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 1rem 1rem 1rem 1rem;
  padding: 1.5rem;
  .order-nav {
    width: 100%;
    height: 4.5rem;
    border-bottom: 1px solid #EEEFF2;
    display: flex;
    position: relative;
    .line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 8rem;
      height: 0.13rem;
      background: #0CAF60;
      transition: all .7s ease;
    }
    .nav-item {
      width: 8rem;
      height: 4.5rem;
      line-height: 4.5rem;
      font-size: 1rem;
      color: #718096;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    .active {
      color: #0CAF60;
    }
  }
  .search-item {
    height: 6.5rem;
    display: flex;
    align-items: center;
    margin-right: 10rem;
    .input-search {
      flex: 5;
      input {
        background: #FAFAFA;
      }
    }
    .date-choose {
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
    }
    .download {
      height: 3.5rem;
      width: 6rem;
      border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
      background: #FAFAFA;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #718096;
      margin-left: 1rem;
      cursor: pointer;
    }
  }
  
  .radio {
    width: 1rem;
    height: 1rem;
  }
  
  .list-item {
    .t-header{
      height: 4.5rem;
      display: flex;
      align-items: center;
      border-bottom: .1rem solid #EEEFF2;
      padding-left: 1.5rem;
      .check-all {
        flex: 1;
      }
      .order-name {
        flex: 4;
        
      }
      .order-date {
        flex: 3;
      }
      .order-buyer {
        flex: 4;
      }
      .order-pay-status {
        flex: 3;
      }
      .order-status {
        flex: 3;
      }
      .order-price {
        flex: 3;
      }
    }
    .t-body {
      height: ${8*4.5}rem;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: block;
        width: .5rem;
        background: #ccc;
      }
      .order-item {
        height: 6rem;
        display: flex;
        align-items: center;
        border-bottom: .1rem solid #EEEFF2;
        padding-left: 1.5rem;
        
        .check-all {
          flex: 1;
          
        }
        .order-name {
          flex: 4;
          cursor: pointer;
          .order-id {
            color: #718096;
          }
          .name {
            white-space: nowrap; /* 防止文字换行 */
            overflow: hidden; /* 隐藏超出容器宽度的部分 */
            text-overflow: ellipsis; /* 显示省略号 */
            width: 13em;
          }
        }
        .order-date {
          flex: 3;
        }
        .order-buyer {
          flex: 4;
        }
        .order-pay-status {
          flex: 3;
        }
        .order-status {
          flex: 3;
        }
        .order-price {
          flex: 3;
        }
      }
      .order-item:hover {
        background: #FAFAFA;
      }
    }
  }
  
  .page-control {
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;
  }
`

export default OrderWrapper