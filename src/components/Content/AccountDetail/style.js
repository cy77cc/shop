import styled from "styled-components";

const AccountDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .detail-nav {
    width: 100%;
    height: 5rem;

    .back-btn {
      width: 8rem;
      height: 3.5rem;
      background: #FFFFFF;
      border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #718096;
    }
  }

  .detail-box-wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .detail-left-box {
      width: 66%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .account-data-overview {
        width: 100%;
        height: 26rem;
        background: #fff;
        border-radius: 1rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;

        .overview-title {
          height: 2.5rem;
          font-size: 1.13rem;
          border-bottom: .08rem solid #F1F2F4;
        }

        .overview-content {
          flex: 1;
          display: flex;
          align-items: center;

          .overview-content-left {
            width: 10rem;
            display: flex;
            height: 90%;
            flex-direction: column;
            justify-content: space-between;

            .overview-left-item {
              height: 6.2rem;
              border: 0.06rem solid #EEEFF2;
              border-radius: .75rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: .75rem;

              .down {
                color: #0CAF60;
              }

              .up {
                color: #FD6A6A;
              }

              .item-title, .item-other {
                font-size: 0.63rem;
                color: #718096;
              }

              .item-content {
                font-size: 1.13rem;
                color: #111827;
              }
            }
          }

          .overview-content-right {
            flex: 1;
            height: 90%;
            margin-left: .75rem;
            border: 0.06rem solid #EEEFF2;
            border-radius: .75rem;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            .overview-graph-title {
              height: 1rem;
            }
            .overview-graph {
              flex: 1;
            }
          }
        }
      }

      .recent-order {
        margin-top: 1rem;
        width: 100%;
        height: 20rem;
        background: #fff;
        border-radius: 1rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;

        .title {
          font-size: 1.13rem;
          height: 3rem;
          border-bottom: .08rem solid #F1F2F4;
        }

        .order-content {
          flex: 1;
          display: flex;
          flex-direction: column;

         .order-item {
           flex: 1;
           display: flex;
           align-items: center;
           
           
           .good-img {
             width: 4rem;
             height: 4rem;
             border-radius: 0.75rem;
             background: #F1F2F4;
             display: flex;
             align-items: flex-end;
             justify-content: center;
             img {
               width: 3.5rem;
             }
           }
           
           .good-message {
             flex: 1;
             display: flex;
             height: 4rem;
             flex-direction: column;
             justify-content: space-evenly;
           }
           
           .order-status {
             width: 4rem;
             display: flex;
             height: 4rem;
             flex-direction: column;
             justify-content: space-evenly;
             
             .status-btn {
               width: 4rem;
               height: 2rem;
               border-radius: .5rem;
               display: flex;
               justify-content: center;
               align-items: center;
               color: #0CAF60;
               background: #E7F7EF;
               font-size: 0.75rem;
             }
             
             .status-text {
               font-size: 0.75rem;
               color: #718096;
               display: flex;
               justify-content: flex-end;
             }
           }
         }
          
          .item-1 {
            border-bottom: .08rem solid #F1F2F4;
          }
        }
      }
    }

    .detail-right-box {
      width: 32%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .buyer-detail {
        width: 100%;
        height: 37rem;
        background-color: #fff;
        border-radius: 1rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;

        .detail-item {
          flex: 1;
          display: flex;
          flex-direction: column;

          .title {
            flex: 2;
            display: flex;
            align-items: center;
            font-size: 1.13rem;
          }

          .detail-content {
            flex: 4;
            display: flex;
            align-items: center;
          }
        }

        .buyer-message {
          border-bottom: .08rem solid #F1F2F4;

          .detail-content {
            .avatar {
              flex: 1.4;
              border-radius: 2.5rem;

              img {
                width: 2.5rem;
              }
            }

            .name {
              flex: 8;
            }
          }
        }

        .contact-message {
          border-bottom: .08rem solid #F1F2F4;

          .detail-content {
            color: #718096;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
          }
        }

        .delivery-address {
          border-bottom: .08rem solid #F1F2F4;

          .detail-content {
            color: #718096;
          }
        }

        .note {
          .detail-content {
            color: #718096;
          }
        }
      }

      .buyer-tag {
        width: 100%;
        height: 8rem;
        background-color: #fff;
        border-radius: 1rem;
        margin-top: 1rem;
        padding: 1.5rem;

        .title {
          font-size: 1.13rem;
        }

        .tag-content {
          height: 100%;
          display: flex;
          align-items: center;

          .tag-item {
            height: 2rem;
            background: #F4F0FF;
            border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
            padding: .5rem 1rem;
            color: #8C62FF;
          }
        }
      }
    }
  }
`

export default AccountDetailWrapper