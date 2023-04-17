import {memo, useEffect} from "react";
import Header from "../../components/Header";
import {Outlet, useNavigate} from "react-router-dom";
import HomeWrapper from "./style";
import Sider from "../../components/Sider"
import {useDispatch} from "react-redux";
import fetchData from "../../utils/net";
import {addInfo} from "../../store";

const Home = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    fetchData("post", {}, "check_token").then(res => {
      let data = res.data
      if (data.status === 1) {
        dispatch(addInfo(data))
      } else {
        navigate("/login")
      }
    })
  })
  return (
      <HomeWrapper>
        <div className="sider">
          <Sider/>
        </div>
        <div className="content-box">
          <div className="header">
            <Header/>
          </div>
          <div className="content">
            <Outlet/>
          </div>
        </div>
      </HomeWrapper>
  )
})

export default Home