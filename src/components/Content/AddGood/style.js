import styled from "styled-components";

const AddGoodWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .item-1 {
    height: 28rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;

    .base-info {
      width: 49%;
      height: 28rem;
      background: #fff;
      border-radius: .75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      .title {
        font-size: 1.13rem;
      }
      
      .info-item {
        height: 5.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .good-image {
      width: 49%;
      height: 28rem;
      background: #fff;
      border-radius: .75rem;
      padding: 1.5rem;
      
      .title {
        font-size: 1.13rem;
        margin-bottom: 1.5rem;
      }
      
      .tip {
        font-size: .88rem;
        color: #718096;
        margin: 1.5rem 0;
      }
      
      .upload-images {
        height: 14.13rem;
        .upload-content {
          display: flex;
          flex-direction: column;
          color: #718096;
          .icon {
            font-size: 1.5rem;
          }
          .text {
            font-size: .3rem;
          }
        }
      }
    }
  }

  .item-2 {
    height: 31rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;

    .good-detail {
      width: 54%;
      height: 31rem;
      background: #fff;
      border-radius: .75rem;
      padding: 1.5rem;
    }

    .good-spec {
      width: 44%;
      height: 31rem;
      background: #fff;
      border-radius: .75rem;
      padding: 1.5rem;
    }
  }

  .item-3 {
    height: 6rem;
    display: flex;
    justify-content: flex-end;

    .cancel {
      width: 7.5rem;
      height: 3rem;
      background: #FFFFFF;
      border-radius: 0.75rem;
      opacity: 1;
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

export default AddGoodWrapper