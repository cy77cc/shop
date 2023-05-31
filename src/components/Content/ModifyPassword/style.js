import styled from "styled-components";

const ModifyPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;

  .modify-password {
    width: 46.94rem;
    background: #FFFFFF;
    border-radius: 1rem;
    padding: 2rem;
    
    .title {
      font-size: 1.13rem;
      margin-bottom: .25rem;
    }
    
    .hint {
      font-size: 0.88rem;
      color: #718096;
      margin-bottom: 1.75rem;
    }

    .text {
      font-size: 0.88rem;
      color: #718096;
      margin-bottom: .75rem;
    }
    .item {
      margin-bottom: 1.5rem;
      input {
        background: #FAFAFA;
      }
    }
    
    .btn-item {
      display: flex;
      justify-content: flex-end;
      .btn {
        width: 6rem;
        height: 3rem;
        background: #86D7B0;
        border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
        color: #fff;
      }
    }
  }
`

export default ModifyPasswordWrapper