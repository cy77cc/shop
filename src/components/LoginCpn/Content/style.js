import styled from "styled-components";

const LoginContentWrapper = styled.div`
  display: flex;
  height: 100%;
  .login-item {
    width: 42.88rem;
    .login-content {
      width: 28.13rem;
      height: 34rem;
      margin: 9.75rem 0 0 6.25rem;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      .text {
        font-size: 1.88rem;
      }
      .email, .password {
        .normal {
          background-color: #FAFAFA;
          height: 82%;
        }
        .active {
          background-color: #fff;
          border: 1px solid #0CAF60;
          height: 82%;
        }
      }
      .item {
        height: 3.5rem;
        display: flex;
        align-items: center;
      }
      .forget-psw {
        display: flex;
        .forget-item {
          flex: 1;
        }
        .search-back {
          display: flex;
          justify-content: flex-end;
          .forget-text {
            color: #007E60;
            border-bottom: 1px solid #007E60;
            cursor: pointer;
          }
        }
      }
      .use-email-login {
        .login-btn {
          width: 100%;
          height: 3rem;
          border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
          outline: none;
          border: none;
          cursor: pointer;
          color: #ffffff;
        }
      }
      .register {
        color: #0CAF60;
        cursor: pointer;
      }
    }
  }
  .login-banner {
    background-color: #0caf60;
    flex: 1;
    height: 100%;
  }
`;

export default LoginContentWrapper;
