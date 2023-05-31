import styled from "styled-components";

const AddAccountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .top-box {
    width: 100%;
    height: 40rem;
    margin-bottom: 2rem;

    .left-box {
      .base-info {
        width: 100%;
        height: 100%;
        border-radius: .75rem;
        background: #fff;
        padding: 1.5rem;
        .title {
          font-size: 1.13rem;
          margin-bottom: 2rem;
        }
        .name-sex {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          .name, .sex {
            width: 49%;
          }
        }
      }
      .phone {
        border-bottom: .08rem solid #F1F2F4;
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .hint {
        width: 100%;
        height: 3.5rem;
        background: #FAFAFA;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        padding-left: 1.5rem;
        color: #A0AEC0;
        font-size: 0.75rem;
      }
    }

    .right-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .avatar {
        width: 100%;
        height: 26rem;
        padding: 1.5rem;
        border-radius: .75rem;
        background: #fff;
        font-size: 1.13rem;
        display: flex;
        flex-direction: column;
        .ant-upload-list-item {
          display: none;
        }
        .avatar-item {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          div {
            width: 10rem;
            height: 10rem;
            overflow: hidden;
            border-radius: 10rem;
            background: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 10rem;
              height: 10rem;
            }
          }
        }
        .upload-area {
          display: flex;
          justify-content: center;
          .btn {
            width: 9rem;
            height: 3rem;
          }
        }
      }

      .remark {
        width: 100%;
        height: 12rem;
        padding: 1.5rem;
        border-radius: .75rem;
        background: #fff;
        
        .title {
          font-size: 1.13rem;
          margin-bottom: .5rem;
        }
        
        .hint {
          color: #718096;
          font-size: 0.88rem;
          margin-bottom: 2rem;
        }
      }
    }
  }

  .middle-box {
    width: 100%;
    height: 35rem;
    margin-bottom: 2rem;

    .left-box {
      .address {
        width: 100%;
        height: 100%;
        background: #fff;
        padding: 1.5rem;
        border-radius: .75rem;
        .name-sex {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          .name, .sex {
            width: 49%;
          }
        }
      }
    }

    .right-box {
      .tag {
        width: 100%;
        height: 12rem;
        background: #fff;
        border-radius: .75rem;
        padding: 1.5rem;

        .title {
          font-size: 1.13rem;
          margin-bottom: .5rem;
        }

        .hint {
          color: #718096;
          font-size: 0.88rem;
          margin-bottom: 2rem;
        }
      }
    }
  }

  .top-box, .middle-box {
    display: flex;
    justify-content: space-between;

    .left-box {
      width: 68%;
    }

    .right-box {
      width: 30%;
    }
  }

  .bottom-box {
    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: flex-end;

    .cancel {
      width: 7.5rem;
      height: 3rem;
      background: #FFFFFF;
      border-radius: 0.75rem;
      border: 0.06rem solid #0CAF60;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0CAF60;
      cursor: pointer;
    }

    .save {
      width: 7.5rem;
      height: 3rem;
      background: #86D7B0;
      border-radius: 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      cursor: pointer;
    }
  }
`

export default AddAccountWrapper