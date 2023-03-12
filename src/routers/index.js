import {lazy} from "react"
import Introduce from "../pages/Introduce";
import {DataBoard, Order} from "../components/Content";

const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Step1Content = lazy(() => import("../pages/Introduce/Content/Step1"))
const Step2Content = lazy(() => import("../pages/Introduce/Content/Step2"))
const Home = lazy(() => import("../pages/Home"))

const routes = [
  {
    path: "*",
    element: "暂时没开发"
  }, {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <DataBoard/>
      }, {
        path: "/order",
        element: <Order/>,
      }, {
        path: "/goods",
        element: "商品列表"
      }, {
        path: "/client",
        element: "客户",
      }, {
        path: "/opdata",
        element: "运营数据"
      }, {
        path: "/promotion",
        element: "促销营销"
      }, {
        path: "/mystore",
        element: "我的店铺"
      }
    ]
  }, {
    path: "/login",
    element: <Login/>
  }, {
    path: "/register",
    element: <Register/>,
  }, {
    path: "/introduce/:username",
    element: <Introduce/>,
    children: [
      {
        path: "/introduce/:username/step1",
        element: <Step1Content/>
      }, {
        path: "/introduce/:username/step2",
        element: <Step2Content/>
      }
    ]
  }
]

export default routes