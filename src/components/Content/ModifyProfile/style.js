import styled from "styled-components";

const ModifyProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .modify-content {
    width: 46.94rem;
    height: 53.5rem;
    background: #FFFFFF;
    border-radius: 1rem 1rem 1rem 1rem;
    padding: 2rem;

    .person-info {
      font-size: 1.25rem;
      padding-bottom: 1.63rem;
      border-bottom: .08rem solid #F1F2F4;
    }

    .modify-avatar {
      height: 10rem;
      display: flex;
      padding: 2rem 0 2.5rem 0;

      .ant-upload-list-item {
        display: none;
      }

      .avatar {
        width: 5.5rem;
        height: 5.5rem;
        margin-right: 1.5rem;
        border-radius: 10rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .88rem;
        color: #718096;

        img {
          width: 5.5rem;
          height: 5.5rem;
        }
      }

      .upload {
        height: 5.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .hint {
          font-size: .88rem;
          color: #718096;
        }

        .btn {
          width: 6rem;
          height: 3rem;
          background: #0CAF60;
          border-radius: 0.75rem;
          color: #fff;
        }
      }
    }

    .name-username, .email-phone, .address, .detail-code {
      display: flex;
      justify-content: space-between;

      .name, .username, .email,
      .phone, .province, .city,
      .detail, .area {
        width: 20.66rem;
        margin-bottom: 1.5rem;

        .text {
          color: #718096;
          margin-bottom: .75rem;
        }

        select {
          width: 100%;
        }
      }
    }

    .sell-address {
      font-size: 1.25rem;
      margin-bottom: 1.75rem;
    }
    
    .save {
      display: flex;
      justify-content: flex-end;
      .btn {
        width: 6rem;
        height: 3rem;
        background: #86D7B0;
        border-radius: 0.75rem;
        color: #fff;
      }
    }
  }
`

export default ModifyProfileWrapper