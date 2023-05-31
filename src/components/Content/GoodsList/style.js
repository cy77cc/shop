import styled from "styled-components";

const GoodsListWrapper = styled.div`
  background: #fff;
  border-radius: .75rem;
  padding: 1.5rem;

  .search {
    display: flex;
    height: 5rem;
    padding-bottom: 1.5rem;

    input {
      background: #FAFAFA;
    }

    .filter-btn {
      width: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FAFAFA;
      border-radius: .5rem;
      cursor: pointer;
    }

    .add-good {
      width: 8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: .5rem;
      background: #0CAF60;
      color: #fff;
      cursor: pointer;
    }
  }

  .filter-content {
    height: 0;
    display: flex;
    align-items: center;
    transition: height 1s ease;
    overflow: hidden;
    border-bottom: .08rem solid #EEEFF2;

    > div {
      width: 15.5rem;

      .select-item {
        margin-top: .75rem;
        width: 95%;
      }
    }
  }

  .t-head {
    height: 6rem;
    display: flex;
    align-items: center;
    border-bottom: .08rem solid #EEEFF2;

    div {
      display: flex;
      justify-content: center;
      flex: 1;
    }
  }

  .t-body {
    height: 30rem;
    display: flex;
    flex-direction: column;
    border-bottom: .08rem solid #EEEFF2;
    overflow: scroll;

    ::-webkit-scrollbar {
      display: block;
      width: .5rem;
      background: #ccc;
    }

    .t-row {
      height: 6rem;
      width: 100%;
      border-bottom: .08rem solid #EEEFF2;
      display: flex;
      align-items: center;
      padding: 1rem 0;
      transition: all .6s ease;
      :hover {
        background: rgba(238, 239, 242, .4);
      }

      .t-column {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      .product-name {
        .avatar {
          width: 3.5rem;
          height: 3.5rem;
          background: #F1F2F4;
          border-radius: 0.75rem;
          overflow: hidden;
          img {
            width: 3.5rem;
          }
        }

        .message {
          display: flex;
          height: 3.5rem;
          flex-direction: column;
          justify-content: space-evenly;

          .name {
            width: 8em;
            white-space: nowrap; /* 防止文字换行 */
            overflow: hidden; /* 隐藏超出容器宽度的部分 */
            text-overflow: ellipsis; /* 显示省略号 */
          }
          .product-id {
            font-size: 0.88rem;
            color: #718096;
          }
        }
      }

      .sale-num {
        height: 3.5rem;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .title {
          font-size: 0.88rem;
          width: 60%;
          display: flex;
          justify-content: space-between;
        }

        .status {
          width: 60%;
          height: 0.63rem;
          background: #F1F2F4;
          border-radius: 0.25rem;

          .bar {
            height: 0.63rem;
            width: 50%;
            border-radius: 0.25rem;
            background: #0CAF60;
          }
        }
      }
    }
  }

  .footer {
    height: 3rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`

export default GoodsListWrapper