import styled from "styled-components";

const Step2ContentCpnWrapper = styled.div`
  width: 100vw;

  .bar {
    display: flex;
    width: 100vw;
    height: 0.25rem;

    .bar-left {
      flex: 1;
      background: #55C790;
    }

    .bar-right {
      flex: 1;
      background: #55C790;
    }
  }

  .content-box {
    margin-top: 2rem;

    .intro-tip {
      width: 51.13rem;

      .intro-tip-item {
        width: 51.13rem;
      }

      .tip-message {
        font-size: 1.88rem;
        height: 2.63rem;
        display: flex;
        justify-content: center;
        color: #111827;
      }

      .tip-message2 {
        height: 2.63rem;
        display: flex;
        font-size: 1.13rem;
        color: #718096;
        justify-content: center;
      }
    }

    .select-information-box {
      width: 51.13rem;
      height: 35.56rem;
      background: #FFFFFF;
      border-radius: 1.5rem 1.5rem 1.5rem 1.5rem;
      opacity: 1;
      border: 0.06rem solid #EEEFF2;
      padding: 1.75rem 2rem;

      .info-item {
        width: 100%;
        font-size: 1rem;
        margin: 1rem 0;
        input {
          background-color: #FAFAFA;
        }
      }

      .select-item {
        .info-item-select {
          width: 100%;
          height: 3.5rem;
          background: #FAFAFA;
          border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
          border: none;
          outline: none;
          padding: 0 1rem;
        }
      }
      
      .name-box {
        display: flex;
        .name-item {
          flex: 1;
        }
      }
    }
  }
`

export default Step2ContentCpnWrapper