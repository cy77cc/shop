import styled from "styled-components";

const OpDataWrapper = styled.div`
  width: 100%;

  .time-select {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  }

  .cards-1 {
    height: 18rem;
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;

    .sale-num, .visitor {
      width: 49%;
      height: 100%;
      background: #fff;
      padding: 1.5rem;
      border-radius: .75rem;
      display: flex;
      flex-direction: column;

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.5rem;
        font-size: 1.13rem;
      }

      .content-box {
        flex: 1;
        display: flex;
        flex-direction: row;

        .num-items {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .item-box {
            width: 9.38rem;
            height: 5.44rem;
            background: #FAFAFA;
            border-radius: .75rem;
            padding: .75rem;

            .text {
              color: #718096;
              font-size: 0.63rem;
              margin-bottom: .75rem;
            }

            .number {
              font-size: 1.13rem;
            }
          }
        }
        
        .graph {
          flex: 1
        }
      }
    }

    .visitor {

    }
  }

  .cards-2 {
    height: 15rem;
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;

    .cards-2-item {
      width: 32%;
      height: 100%;
      padding: 1.5rem;
      background: #fff;
      border-radius: .75rem;
    }

    .source-from {
      display: flex;
      flex-direction: column;

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.5rem;
        font-size: 1.13rem;
      }

      .content-box {
        flex: 1;
        display: flex;
        flex-direction: row;
        .graph {
          width: 8.13rem;
          height: 8.13rem;
          margin-right: 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .line-item {
            display: flex;
            justify-content: space-between;

            .dot-item {
              display: flex;
              align-items: center;
            }
          }

          .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 3.13rem;
            margin-right: .75rem;
          }

        }
      }
    }

    .account {
      display: flex;
      flex-direction: column;

      .title {
        height: 2.5rem;
        display: flex;
        align-items: center;
        font-size: 1.13rem;
      }

      .content-box {
        flex: 1;
      }
    }

    .gender {
      display: flex;
      flex-direction: column;

      .title {
        height: 2.5rem;
        display: flex;
        align-items: center;
        font-size: 1.13rem;
      }

      .content-box {
        flex: 1;
        display: flex;
        flex-direction: row;

        .graph {
          width: 8.13rem;
          height: 8.13rem;
          margin-right: 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          .male-line, .female-line {
            display: flex;
            justify-content: space-between;

            .dot-item {
              display: flex;
              align-items: center;
            }
          }

          .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 3.13rem;
            margin-right: .75rem;
          }

          .male {
            background: #0CAF60;
          }

          .female {
            background: #FFD023;
          }
        }
      }
    }
  }

  .cards-3 {
    height: 25rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .area-distribution, .new-account {
      border-radius: .75rem;
      background: #fff;
      padding: 1.5rem;
    }

    .area-distribution {
      width: 64%;
      display: flex;

      .left-content {
        display: flex;
        width: 14rem;
        height: 100%;
        border-right: .08rem solid #EEEFF2;
        flex-direction: column;
        padding-right: 1rem;

        .provinces {
          margin-top: 2rem;
          height: 10rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .province-item {
            width: 100%;
            height: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: #F9FAFB;
            border-radius: .75rem;
            font-size: .75rem;
            padding: 0 .5rem;

            .dot-name {
              display: flex;
              align-items: center;

              .dot {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 3.13rem;
                margin-right: .75rem;
              }
            }
          }
        }
      }

      .right-content {
        flex: 1;
        padding: 0;
        margin: 0;
      }
    }

    .new-account {
      width: 34%;

      .title {
        font-size: 1.13rem;
        margin-bottom: 1rem;
      }

      .content-box {
        .account-item {
          height: 2.5rem;
          display: flex;
          margin-top: 1.2rem;
          justify-content: space-between;

          .left {
            display: flex;

            .avatar {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 2.5rem;
              overflow: hidden;
              margin-right: .75rem;

              img {
                width: 2.5rem;
                height: 2.5rem;
              }
            }

            .name-address {
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;

              .name {
                font-size: 0.88rem;
              }

              .address {
                font-size: 0.75rem;
              }
            }
          }

          .more {
            cursor: pointer;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`

export default OpDataWrapper