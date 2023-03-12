import styled from "styled-components";

const SiderWrapper = styled.div`
  width: 16rem;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .nav {
    flex: 1;
    border-bottom: 0.03rem solid #EEEFF2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo {
      width: 16rem;
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-item {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 1.63rem;
      cursor: pointer;
      transition: all .5s;
    }

    .nav-slogan {
      font-size: 0.75rem;
      color: #A0AEC0;
    }
  }

  .sale-chan {
    flex: 1;
    border-top: 0.03rem solid #EEEFF2;

    .sale-slogan {
      font-size: 0.75rem;
      color: #A0AEC0;
    }

    .sale-item {
      width: 16rem;
      height: 3rem;
      display: flex;
      align-items: center;
      padding-left: 1.63rem;
      cursor: pointer;
      transition: all .5s;
    }
  }

  .active {
    color: #0CAF60;
  }
  
  .nav-hover:hover {
    background: #FAFAFA;
    border-radius: .7rem;
    padding: 0 0 0 2.5rem;
  }

  
`

export default SiderWrapper