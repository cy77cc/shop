import styled from "styled-components";

const IntroHeaderWrapper = styled.div`
  display: flex;

  .logo {
    flex: 1;
    height: 6rem;
    display: flex;
    align-items: center;

    img {
      width: 11.25rem;
      height: auto;
      margin-left: 6.44rem;
    }
  }

  .message {
    flex: 1;
    height: 6rem;
    background-color: #fff;
  }
`

export default IntroHeaderWrapper