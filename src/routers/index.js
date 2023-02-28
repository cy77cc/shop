import {lazy} from "react"
import Introduce from "../pages/Introduce";

const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Step1Content = lazy(() => import("../pages/Introduce/Content/Step1"))
const Step2Content = lazy(() => import("../pages/Introduce/Content/Step2"))

const routes = [
  {
    path: "*",
    element: "暂时没开发"
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
        element: <Step1Content />
      }, {
        path: "/introduce/:username/step2",
        element: <Step2Content />
      }
    ]
  }
]

export default routes