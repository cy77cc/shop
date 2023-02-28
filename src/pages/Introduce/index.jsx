import {memo} from "react";
// import {useParams} from "react-router-dom";
import IntroHeader from "../../components/IntroCpn/Header";
import IntroduceWrapper from "./style";
import {Outlet} from "react-router-dom";

const Introduce = memo(() => {
  // 获取url传递的参数，用于追踪注册用户
  // const {username} = useParams();
  return (
      <IntroduceWrapper>
        <div className="intro-item intro-header">
          <IntroHeader/>
        </div>
        <div className="intro-item intro-content">
          <Outlet/>
        </div>
      </IntroduceWrapper>
  )
})

export default Introduce