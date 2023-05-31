import styled from "styled-components";

const AccountWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  background: #fff;
  display: flex;
  flex-direction: column;

  .clear-style {
    border: none;
    outline: none;
  }

  .item {
    display: block;
  }

  .search {
    display: flex;

    input {
      background: #FAFAFA;
    }

    .search-input {
      background: #FAFAFA;
    }

    .filter-btn {
      margin: 0 .5rem;
      color: #718096;
      height: 3.5rem;
      background: #FAFAFA;
    }

    .add-account {
      margin: 0 .5rem;
      background: #0CAF60;
      color: #fff;
      height: 3.5rem;
    }
  }

  .filter {
    height: 0;
    display: flex;
    transition: height .8s ease;
    align-items: flex-end;
    overflow: hidden;
    
    .filter-item {
      flex: 1;
      margin: 0 1rem;

      .item-bottom {
        width: 15.5rem;
        height: 3rem;
        margin-top: .5rem;

        .whb {
          width: 100%;
        }
      }
    }
  }

  .content {
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0!important;
    display: flex;
    flex-direction: column;
    .thead {
      height: 5rem;
      display: flex;
      align-items: center;
      border-bottom: 0.08rem solid #EEEFF2;
      padding-right: 3rem;
      
      div {
        flex: 1;
        text-align: center;
      }
    }
    .tbody {
      flex: 1;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: block;
        width: .5rem;
        background: #ccc;
      }
      .t-row {
        height: 5rem;
        width: 100%;
        display: flex;
        border-bottom: 0.08rem solid #EEEFF2;
        transition: background .5s ease;
        :hover {
          background: rgba(238, 239, 242, .4);
        }
        
        .username {
          padding-left: 4rem;
          justify-content: flex-start!important;
          .avatar {
            margin-right: 1rem;
          }
        }
        
        .more {
          width: 3rem;
          height: 5rem;
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .t-item {
          flex: 1;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 3rem;
    border-top: 0.08rem solid #EEEFF2;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`

export default AccountWrapper