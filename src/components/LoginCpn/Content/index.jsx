import {Input, message, Radio} from "antd";
import React, {memo, useEffect, useState} from "react";
import LoginContentWrapper from "./style";
import LoginBanner from "../Banner";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import SHA256 from "crypto-js/sha256";
import fetchData from "../../../utils/net";
import {addInfo} from "../../../store";

const LoginContent = memo(() => {
  // 判断是否在输入
  const [keyin, setKeyin] = useState([false, false])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetchData("post", {}, "check_token").then(res => {
      let data = res.data
      if (data.status === 1) {
        navigate("/")
      }
    })
  })
  // handleInputStyle: 用于处理输入框的样式
  function handleInputStyle(index, value) {
    const newArr = keyin
    newArr[index] = value
    setKeyin([...newArr])
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleRemember(e) {
    setRemember(!remember)
  }

  function handleLogin(e) {
    fetchData("post", {
      "email": email,
      "password": SHA256(password).toString()
    }, "login").then(res => {
      let data = res.data
      if (data.status === 1) {
        if (remember) {
          localStorage.setItem("token", data.token)
        }
        dispatch(addInfo(data))
        message.success("欢迎回来")
        navigate("/")
      } else {
        setEmail("")
        setPassword("")
        message.error("邮箱或密码错误")
      }
    })
  }

  return (
      <LoginContentWrapper>
        <div className="login-item">
          <div className="login-content">
            <div className="item text">登录您的账号</div>
            <div className="item email">
              <Input
                  size="large"
                  placeholder="请输入您的Email"
                  bordered={false}
                  className={!keyin[0] ? 'normal' : 'active'}
                  onFocus={() => handleInputStyle(0, true)}
                  onBlur={() => handleInputStyle(0, false)}
                  value={email}
                  onChange={(e) => handleEmail(e)}
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
                <Radio
                    checked={remember}
                    onClick={handleRemember}
                >记住我</Radio>
              </div>
              <div className="forget-item search-back">
                {/* //TODO 忘记密码弹出页面 */}
                <span className="forget-text">忘记密码?</span>
              </div>
            </div>
            <div className="item use-email-login">
              <button
                  className="login-btn"
                  style={
                    (email !== "" && password !== "")
                        ? {backgroundColor: "#0CAF60"}
                        : {backgroundColor: "#86D7B0"}
                  }
                  onClick={handleLogin}
                  disabled={(email === "" || password === "")}
              >
                使用电子邮件登录
              </button>
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
