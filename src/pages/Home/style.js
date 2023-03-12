import styled from "styled-components";

const HomeWrapper = styled.div`
  background-color: #FAFAFA;
  display: flex;
  height: 100vh;
  .sider {
    width: 16rem;
    height: 100vh;
  }
  .content-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      height: 6rem;
      width: 100%;
      background-color: #fff;
      border-left: 0.06rem solid #F1F2F4;
    }
    .content {
      flex: 1;
      padding: 2.5rem;
      overflow: scroll;
    }
  }
`

export default HomeWrapper