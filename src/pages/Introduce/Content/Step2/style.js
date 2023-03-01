import styled from "styled-components";

const Step2Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  align-items: center;

  .content-box {
    width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer {
    width: 100vw;
    display: flex;
    height: 8rem;
    box-shadow: 0rem -0.5rem 2rem 0.06rem rgba(113, 128, 150, 0.04);

    .empty {
      width: 50.81rem;
    }

    .btn-group {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;

      .btn-item-left, .btn-item-right {
        width: 9.38rem;
        height: 3.5rem;
        border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
        cursor: pointer;
      }

      .btn-item-left {
        margin-right: 2rem;
        border: 0.06rem solid #0CAF60;
        color: #0CAF60;
        background-color: #fff;
      }

      .btn-item-right {
        color: #fff;
        background-color: #0CAF60;
      }
    }
  }
`

export default Step2Wrapper