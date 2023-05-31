import styled from "styled-components";

const MyStoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  .mystore-content {
    width: 46.94rem;
    height: 44.81rem;
    background: #FFFFFF;
    border-radius: 1rem 1rem 1rem 1rem;
    padding: 1.75rem 2rem;
    
    .title {
      font-size: 1.13rem;
      margin-bottom: .25rem;
    }
    
    .hint {
      font-size: 0.88rem;
      font-weight: normal;
      color: #718096;
      margin-bottom: 1.5rem;
    }

    .name-industry {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.25rem;
      .store-name, .industry {
        width: 20.97rem;
        .text {
          color: #718096;
          font-size: .88rem;
          margin-bottom: 1rem;
        }
        select {
          width: 100%;
        }
      }
    }
    
    .address {
      margin-bottom: 1.25rem;
      .text {
        color: #718096;
        font-size: .88rem;
        margin-bottom: 1rem;
      }
      .select-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        .select-item {
          width: 13.63rem;
          height: 3.5rem;
        }
      }
    }
    
    .store-intro {
      margin-bottom: 2rem;
      .text {
        color: #718096;
        font-size: .88rem;
        margin-bottom: 1rem;
      }
    }
    
    .save-btn {
      display: flex;
      justify-content: flex-end;
      .btn {
        width: 6rem;
        height: 3rem;
        background: #86D7B0;
        border-radius: 0.75rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`

export default MyStoreWrapper