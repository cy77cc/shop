import {lazy} from "react"
import Introduce from "../pages/Introduce";
import {
  DataBoard,
  Order,
  OrderDetail,
  GoodsList,
  AccountList,
  AccountDetail,
  AddGood,
  AddAccount,
  OpData, Promotion, MyStore, ModifyProfile, ModifyPassword
} from "../components/Content";

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
        path: "/order/:id",
        element: <OrderDetail/>
      }, {
        path: "/goods",
        element: <GoodsList/>
      }, {
        path: "/account",
        element: <AccountList/>,
      }, {
        path: "/goods/add",
        element: <AddGood/>
      }, {
        path: "/account/detail/:id",
        element: <AccountDetail/>
      }, {
        path: "/account/add",
        element: <AddAccount/>
      }, {
        path: "/opdata",
        element: <OpData/>
      }, {
        path: "/promotion",
        element: <Promotion/>
      }, {
        path: "/mystore",
        element: <MyStore/>
      }, {
        path: "/modify/profile",
        element: <ModifyProfile/>
      }, {
        path: "/modify/password",
        element: <ModifyPassword/>
      }
    ]
  }, {
    path: "/login",
    element: <Login/>
  }, {
    path: "/register",
    element: <Register/>,
  }, {
    path: "/introduce/:id",
    element: <Introduce/>,
    children: [
      {
        path: "/introduce/:id/step1",
        element: <Step1Content/>
      }, {
        path: "/introduce/:id/step2",
        element: <Step2Content/>
      }
    ]
  }
]

export default routes