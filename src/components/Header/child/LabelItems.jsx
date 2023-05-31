import {memo} from "react";
import {useNavigate} from "react-router-dom";
import {EyeInvisibleOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";

const Logout = memo(() => {
  const navigate = useNavigate();
  return (
      <div onClick={() => {
        localStorage.removeItem("token")
        navigate("/login")
      }
      }
           style={{color: "#FD6A6A", height: "2rem"}}
      ><LogoutOutlined style={{marginRight: ".75rem"}}/>退出登录</div>
  )
})

const ModifyInfo = memo(() => {
  const navigate = useNavigate();
  return (
      <div style={{height: "2rem"}}
        onClick={() => navigate("/modify/profile")}
      >
        <UserOutlined style={{marginRight: ".75rem"}}/>修改个人资料
      </div>
  )
})

const ModifyPassword = memo(() => {
  const navigate = useNavigate();
  return (
      <div style={{height: "2rem"}}
        onClick={() => navigate("/modify/password")}
      >
        <EyeInvisibleOutlined style={{marginRight: ".75rem"}}/>修改密码
      </div>
  )
})

export {
  Logout,
  ModifyInfo,
  ModifyPassword
}