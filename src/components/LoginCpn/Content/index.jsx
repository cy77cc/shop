import {Input, Radio} from "antd";
import React, {memo, useState} from "react";
import LoginContentWrapper from "./style";
import {MobileOutlined, AlipayOutlined} from "@ant-design/icons"
import LoginBanner from "../Banner";
import {useNavigate} from "react-router-dom";

const LoginContent = memo(() => {
  // 判断是否在输入
  const [keyin, setKeyin] = useState([false, false])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  // handleInputStyle: 用于处理输入框的样式
  function handleInputStyle(index, value) {
    const newArr = keyin
    newArr[index] = value
    setKeyin([...newArr])
  }

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  return (
      <LoginContentWrapper>
        <div className="login-item">
          <div className="login-content">
            <div className="item text">登录您的账号</div>
            <div className="item username">
              <Input
                  size="large"
                  placeholder="请输入您的Email"
                  bordered={false}
                  className={!keyin[0] ? 'normal' : 'active'}
                  onFocus={() => handleInputStyle(0, true)}
                  onBlur={() => handleInputStyle(0, false)}
                  value={username}
                  onChange={(e) => handleUsername(e)}
              />
            </div>
            <div className="item password">
              <Input.Password
                  size="large"
                  placeholder="请输入您的密码"
                  bordered={false}
                  className={!keyin[1] ? 'normal' : 'active'}
                  onFocus={() => handleInputStyle(1, true)}
                  onBlur={() => handleInputStyle(1, false)}
                  value={password}
                  onChange={(e) => handlePassword(e)}
              />
            </div>
            <div className="item forget-psw">
              <div className="forget-item">
                {/*TODO 持久化*/}
                <Radio>记住我</Radio>
              </div>
              <div className="forget-item search-back">
                {/* //TODO 忘记密码弹出页面 */}
                <span className="forget-text">忘记密码?</span>
              </div>
            </div>
            <div className="item use-email-login">
              {/* // TODO 设置输入完成前后的背景颜色 */}
              <button
                  className="login-btn"
                  style={
                    (username !== "" && password !== "")
                        ? {backgroundColor: "#0CAF60"}
                        : {backgroundColor: "#86D7B0"}
                  }
              >
                使用电子邮件登录
              </button>
            </div>
            <div className="item">
              <span>登录其他方式</span>
            </div>
            <div className="item other-login-type">
              <button><MobileOutlined/> 手机号</button>
              <button><AlipayOutlined/> 支付宝</button>
            </div>
            <div className="item">
              还没有账号？
              <span className="register" onClick={() => navigate("/register")}>去注册</span>
            </div>
          </div>
        </div>
        <div className="login-banner">
          <LoginBanner/>
        </div>
      </LoginContentWrapper>
  );
});

export default LoginContent;
