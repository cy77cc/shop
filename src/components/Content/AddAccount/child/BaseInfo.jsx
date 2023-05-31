import {memo, useState} from "react";
import {Input, Radio} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

const BaseInfo = memo((props) => {
  const {name, gender, email, phone} = props.infoState
  const {setName, setGender, setEmail, setPhone} = props.infoMethod
  const [receiveEmail, setReceiveEmail] = useState(false)
  const [receiveMessage, setReceiveMessage] = useState(false)
  return (
      <div className="base-info">
        <div className="title">客户基础信息</div>
        {/*姓名和性别*/}
        <div className="name-sex">
          <div className="name">
            <div style={{marginBottom: "1rem"}}>姓名</div>
            <div>
              <Input
                  className="clear-input"
                  placeholder="请输入姓名"
                  value={name}
                  onChange={e => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="sex">
            <div style={{marginBottom: "1rem"}}>性别</div>
            <div>
              <select
                  className="clear-input"
                  style={{width: "100%"}}
                  defaultValue={0}
                  value={gender}
                  onChange={e => setGender(e.target.value)}
              >
                <option value={0}>女</option>
                <option value={1}>男</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{marginBottom: "1.5rem"}}>
          <div style={{marginBottom: "1rem"}}>Email</div>
          <div>
            <Input
                className="clear-input"
                placeholder="请输入邮箱"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="phone">
          <div style={{marginBottom: "1rem"}}>手机号</div>
          <div>
            <Input
                className="clear-input"
                placeholder="请输入手机号"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div style={{marginBottom: "1.5rem"}}>
          <div style={{marginBottom: "1rem"}}>
            <Radio className="mr-75" checked={receiveEmail} onClick={e => setReceiveEmail(!receiveEmail)}/>客户同意接收营销电子邮件。
          </div>
          <div>
            <Radio className="mr-75" checked={receiveMessage} onClick={e => setReceiveMessage(!receiveMessage)}/>客户同意接收短信营销短信。
          </div>
        </div>
        <div className="hint"><ExclamationCircleOutlined className="mr-75"/>在订阅营销电子邮件或短信之前，您应该征求客户的同意
        </div>
      </div>
  )
})

export default BaseInfo