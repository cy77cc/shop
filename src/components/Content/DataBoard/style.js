import styled from "styled-components";

const DataBoardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .data-board-item {
    display: flex;
  }

  .data-board-top {
    height: 30rem;
    width: 100%;
    display: flex;

    .board-top-left {
      // width: 27rem;
      //height: 12.5rem;
      width: 55rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .board-item1 {
        height: 14.5rem;
        width: 27rem;
        background: #fff;
        padding: 1.5rem;
        border-radius: 1rem 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;

        .data-item {
          display: flex;
        }

        .data-item-top {
          height: 3rem;
          border-bottom: .06rem solid #EEEFF2;
        }

        .data-item-bottom {
          height: 7rem;
          display: flex;
          align-items: center;

          .number-data {
            flex: 1;

            .down {
              color: #0CAF60;
              margin-right: .3rem;
            }

            .up {
              color: #FD6A6A;
              margin-right: .3rem;
            }
          }

          .graph-data {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;
          }
        }
      }
    }

    .board-top-right {
      flex: 1;
      margin-left: 1rem;
      margin-bottom: .5rem;
      background: #fff;
      border-radius: 1rem 1rem 1rem 1rem;
      padding: 1.5rem;

      .sale-report {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .sale-report-msg {
          display: flex;
          justify-content: space-between;
        }

        .sale-report-graph {
          height: 18rem;
          margin-top: 1rem;
        }

        .sale-report-origin {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .origin-item {
            display: flex;
            justify-content: space-between;

            .dot {
              width: 0.63rem;
              height: 0.63rem;
              border-radius: 3.13rem 3.13rem 3.13rem 3.13rem;
              margin-right: .5rem;
            }
          }
        }
      }
    }
  }

  .data-board-bottom {
    height: 30rem;
    display: flex;

    .all-sale {
      width: 55rem;
      height: 100%;
      background: #fff;
      border-radius: 1rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;

      .all-sale-top {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          font-size: 0.88rem;
          color: #718096;
        }

        .sum {
          color: #111827;
          font-size: 1.5rem;
        }
      }

      .all-sale-bottom {
        flex: 1;
      }
    }

    .history-order {
      flex: 1;
      margin-left: 1rem;
      background: #fff;
      border-radius: 1rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;

      .history-order-title {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title-item {
          font-size: 1.25rem;
          color: #111827;
        }

        .more {
          cursor: pointer;
        }
      }

      .history-order-content {
        flex: 1;
        display: flex;
        flex-direction: column;

        .history-order-item {
          flex: 1;
          display: flex;
          align-items: center;
          border-bottom: 2px solid #F1F2F4;

          .item-img {
            margin-right: 1rem;

            img {
              width: 4rem;
              height: 4rem;
              background: #F1F2F4;
              border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
            }
          }

          .item-detail {
            .detail-title {
              font-size: 1.13rem;
              white-space: nowrap; /* 防止文字换行 */
              overflow: hidden; /* 隐藏超出容器宽度的部分 */
              text-overflow: ellipsis; /* 显示省略号 */
              width: 14em;
            }

            .detail-content {
              font-size: 0.88rem;
              margin-top: 1rem;

              .price {
                color: #FE964A;
                margin-right: 1rem;
              }

              .time {
                color: #718096;
              }
            }
          }
        }
      }
    }
  }
`
export default DataBoardWrapper