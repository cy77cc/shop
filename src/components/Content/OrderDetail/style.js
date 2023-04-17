import styled from "styled-components";

const OrderDetailWrapper = styled.div`
  width: 100%;

  .order-detail-header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .back, .print-order {
      width: 8rem;
      height: 3.5rem;
      background: #FFFFFF;
      border-radius: 0.75rem;
      color: #718096;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  .order-detail-content {
    display: flex;
    margin-top: 2rem;

    .left-content {
      flex: 3;
      margin-right: 2rem;

      .order-info {
        height: 22rem;
        background: #fff;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        padding: 2rem;

        .order-info-title {
          flex: 1;
          display: flex;
          font-size: 1.13rem;
          color: #FE964A;
          align-items: center;

          .icon-box {
            width: 2rem;
            height: 2rem;
            background: #FFF0E6;
            border-radius: 62.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.75rem;
          }
        }

        .order-info-content {
          flex: 4;
          border-top: 0.08rem solid #F1F2F4;
          border-bottom: 0.08rem solid #F1F2F4;
          display: flex;
          align-items: center;

          .order-good-info {
            flex: 1;
            height: 5.5rem;
            background: #FAFAFA;
            border-radius: 1rem 1rem 1rem 1rem;
            padding: 1rem;
            display: flex;
            align-items: center;

            .good-img {
              flex: 1;
            }

            .good-msg {
              flex: 8;
              display: flex;
              flex-direction: column;
              height: 100%;
              padding-left: 1rem;

              div {
                flex: 1;
              }
            }

            .good-price {
              flex: 1;
              display: flex;
              flex-direction: column;
              height: 100%;

              div {
                flex: 1;
              }
            }
          }
        }

        .order-info-btn {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          button {
            width: 7.25rem;
            height: 3rem;
            border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
            border: 0.06rem solid #0CAF60;
            cursor: pointer;
          }

          .mark-finish {
            color: #0CAF60;
            background: #fff;
            margin-right: 1rem;
          }

          .send-now {
            background: #0CAF60;
            color: #fff;
          }
        }
      }

      .pay-info {
        height: 23.75rem;
        background: #fff;
        border-radius: 1rem;
        margin-top: 1rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        .pay-info-title {
          flex: 1;
          color: #0CAF60;
          display: flex;
          align-items: center;
          border-bottom: 0.08rem solid #F1F2F4;
          
        }
        .pay-info-cost {
          flex: 4;
          padding: 1.25rem 0;
          display: flex;
          flex-direction: column;
          .pay-cost-item {
            flex: 1;
            display: flex;
            align-items: center;
            color: #A0AEC0;
            .item-left {
              flex: 1;
            }
            .item-middle {
              flex: 7;
            }
            .item-right {
              flex: 1;
            }
          }
        }
        .pay-info-total {
          flex: 1;
          border-top: 0.08rem solid #F1F2F4;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }

    .right-content {
      flex: 2;

      .buyer-info {
        height: 36.88rem;
        background: #fff;
        border-radius: 1rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        .edit {
          color: #0CAF60;
          cursor: pointer;
        }
        .title {
          justify-content: space-between;
        }
        &>div {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .buyer-contact-info, 
        .buyer-address,
        .buyer-bill-address {
          border-top: 0.08rem solid #F1F2F4;
        }
        .buyer-msg {
          .title {
            font-size: 1.25rem;
          }
          .content {
            display: flex;
            padding: 0;
            align-items: center;
            height: 100%;
            .user-avatar {
              flex: 1;
            }
            .user-info {
              flex: 8;
              padding: 0 0 0 1rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              
            }
            .user-email {
              flex: 1;
            }
          }
        }
        .buyer-contact-info {
          justify-content: space-evenly;
          &>div {
            display: flex;
          }
          .contact-email,
          .contact-phone {
            color: #718096;
          }
        }
        .buyer-address,
        .buyer-bill-address {
          justify-content: space-between;
          &>div {
            display: flex;
            padding: 0;
          }
          .title {
            margin-top: 1rem;
          }
          .content {
            margin-top: 1rem;
            color: #718096;
          }
        }
      }

      .remark {
        height: 8.88rem;
        background: #fff;
        border-radius: 1rem;
        margin-top: 1rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;

        .top-box {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: space-between;

          .remark-text {
            font-size: 1.25rem;
          }

          .edit {
            cursor: pointer;
            font-size: 0.88rem;
            color: #0CAF60;
          }
        }

        .bottom-box {
          flex: 1;
          width: 100%;

          .remark-content {
            color: #A0AEC0;
          }
        }
      }
    }
  }
`

export default OrderDetailWrapper