import {memo, useEffect, useState} from "react";
import ModifyPasswordWrapper from "./style";
import {Button, Input, message} from "antd";
import {useSelector} from "react-redux";
import SHA256 from "crypto-js/sha256";
import fetchData from "../../../utils/net";
import {useNavigate} from "react-router-dom";

const ModifyPassword = memo((props) => {
  const [newPassword, setNewPassword] = useState("")
  const [tempPassword, setTempPassword] = useState("")
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {admin} = useSelector((state) => {
    return {
      admin: state.admin
    }
  })
  const {id} = admin

  function handleSubmit() {
    setIsLoading(true)
    if (newPassword !== tempPassword) {
      message.error("输入密码不一致, 请重新输入")
      setTempPassword("")
    } else {
      let password = SHA256(newPassword).toString()
      fetchData("put", {"password": password}, `update/admin/password?admin_id=${id}`)
          .then(res => {
            let status = res.data.status
            if (status === 2) {
              setIsLoading(false)
              message.error(res.data.message)
            } else if (status === 0) {
              message.error("请勿输入与之前相同的密码")
            } else {
              localStorage.removeItem("token")
              message.success("密码修改成功，请重新登录")
              navigate("/login")
            }
          })
    }
  }

  useEffect(() => {
    if (newPassword !== "" && tempPassword !== "") {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [newPassword, tempPassword])

  return (
      <ModifyPasswordWrapper>
        <div className="modify-password">
          <div className="title">密码安全</div>
          <div className="hint">更改或查看密码。</div>
          <div className="item">
            <div className="text">新密码</div>
            <div>
              <Input.Password
                  className="clear-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="item">
            <div className="text">再次输入</div>
            <div>
              <Input.Password
                  className="clear-input"
                  value={tempPassword}
                  onChange={(e) => setTempPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text">最小六个字符</div>
          <div className="btn-item">
            <Button
                className="btn"
                style={{background: flag ? "#0CAF60" : "#86D7B0"}}
                disabled={!flag}
                loading={isLoading}
                onClick={handleSubmit}
            >保存更改</Button>
          </div>
        </div>
      </ModifyPasswordWrapper>
  )
})

export default ModifyPassword