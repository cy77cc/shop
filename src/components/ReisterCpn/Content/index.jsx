import {Input, message, Radio} from "antd";
import React, {memo, useEffect, useState} from "react";
import RegisterContentWrapper from "./style";
import RegisterBanner from "../Banner";
import {useNavigate} from "react-router-dom";
import SHA256 from "crypto-js/sha256";
import fetchData from "../../../utils/net";

const RegisterContent = memo(() => {
  // 判断是否在输入
  const [keyin, setKeyin] = useState([false, false, false, false])
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [read, setRead] = useState(false)
  const [isDisable, setIsDisable] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  // handleInputStyle: 用于处理输入框的样式
  function handleInputStyle(index, value) {
    const newArr = keyin
    newArr[index] = value
    setKeyin([...newArr])
  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  useEffect(() => {
    if (name !== "" && email !== "" && username !== "" && password !== "" && read) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [name, email, username, password, read])

  function handleRegister(e) {
    if (name !== "" && email !== "" && username !== "" && password !== "" && read) {
      fetchData("post", {
        name: name,
        username: username,
        email: email,
        admin_password: SHA256(password).toString(),
      }, "register").then(res => {
        let data = res.data
        if (data.status === 0) {
          messageApi.error(data.message)
        } else {
          navigate(`/introduce/${data.id}/step1`)
        }
      })
    } else {
      messageApi.error("请输入完整信息")
    }
  }

  return (<RegisterContentWrapper>
    {contextHolder}
    <div className="register-item">
      <div className="register-content">
        <div className="item text">创建您的账号</div>
        <div className="item name-email">
          <Input
              size="large"
              placeholder="请输入您的名字"
              bordered={false}
              className={!keyin[0] ? 'normal' : 'active'}
              onFocus={() => handleInputStyle(0, true)}
              onBlur={() => handleInputStyle(0, false)}
              value={name}
              onChange={(e) => handleName(e)}
              style={{marginRight: "0.5rem"}}
          />
          <Input
              size="large"
              placeholder="请输入您的用户名"
              bordered={false}
              className={!keyin[1] ? 'normal' : 'active'}
              onFocus={() => handleInputStyle(1, true)}
              onBlur={() => handleInputStyle(1, false)}
              value={username}
              onChange={(e) => handleUsername(e)}
              style={{marginLeft: "0.5rem"}}
          />
        </div>
        <div className="item username">
          <Input
              size="large"
              placeholder="请输入您的Email"
              bordered={false}
              className={!keyin[2] ? 'normal' : 'active'}
              onFocus={() => handleInputStyle(2, true)}
              onBlur={() => handleInputStyle(2, false)}
              value={email}
              onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="item password">
          <Input.Password
              size="large"
              placeholder="请输入您的密码"
              bordered={false}
              className={!keyin[3] ? 'normal' : 'active'}
              onFocus={() => handleInputStyle(3, true)}
              onBlur={() => handleInputStyle(3, false)}
              value={password}
              onChange={(e) => handlePassword(e)}
          />
        </div>
        <div className="item forget-psw">
          <div className="forget-item">
            <Radio checked={read} onClick={() => setRead(!read)}>勾选以继续，即表示您同意<span
                style={{color: "#0CAF60"}}>条款和条件</span></Radio>
          </div>
        </div>
        <div className="item use-email-register">
          <button
              className="register-btn"
              style={(read && name !== "" && email !== "" && username !== "" && password !== "") ? {backgroundColor: "#0CAF60"} : {backgroundColor: "#86D7B0"}}
              onClick={handleRegister}
              disabled={isDisable}
          >
            使用电子邮件注册
          </button>
        </div>
        <div className="item">
          已有账号？
          <span className="register" onClick={() => navigate("/login")}>去登录</span>
        </div>
      </div>
    </div>
    <div className="register-banner">
      <RegisterBanner/>
    </div>
  </RegisterContentWrapper>);
});

export default RegisterContent;
