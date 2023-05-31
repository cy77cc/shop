import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  
  .header-item {
    flex: 1;
    display: flex;
    align-items: center;

    .search-item {
      display: flex;
      justify-content: center;
      flex: 6;

      input {
        background: #FAFAFA;
      }
    }

    .mail-item {
      display: flex;
      justify-content: center;
      flex: 1;
      font-size: 1.3rem;
    }

    .bell-item {
      display: flex;
      justify-content: center;
      flex: 1;
    }

    .avatar {
      flex: 3;
      height: 80%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`

export default HeaderWrapper