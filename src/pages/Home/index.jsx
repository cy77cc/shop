import {memo} from "react";
import Header from "../../components/Header";
import {Outlet} from "react-router-dom";
import HomeWrapper from "./style";
import Sider from "../../components/Sider"

const Home = memo(() => {
  return (
      <HomeWrapper>
        <div className="sider">
          <Sider />
        </div>
        <div className="content-box">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </HomeWrapper>
  )
})

export default Home