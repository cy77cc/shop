import {memo, useEffect, useState} from "react";
import {EllipsisOutlined} from "@ant-design/icons";
import {message, Tooltip} from "antd";
import fetchData from "../../../../utils/net";
import SHA256 from "crypto-js/sha256";
import {useNavigate} from "react-router-dom";

const NewAccount = memo(() => {
  const [accounts, setAccounts] = useState([{
    avatar: "",
    name: "",
    address: "",
    id: -1
  }])

  const navigate = useNavigate();

  useEffect(() => {
    fetchData("get", {}, "op_data/new_account")
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setAccounts(data.accounts)
          }
        })
  }, [])

  return (
      <div className="new-account">
        <div className="title">新客户</div>
        <div className="content-box">
          {
            accounts.map((v, i) => {
              return (
                  <div className="account-item" key={SHA256(v.name+i).toString()}>
                    <div className="left">
                      <div className="avatar">
                        <img src={v.avatar} alt=""/>
                      </div>
                      <div className="name-address">
                        <div className="name">{v.name}</div>
                        <div className="address">{v.address}</div>
                      </div>
                    </div>
                    <div
                        className="more"
                        onClick={() => navigate(`/account/detail/${v.id}`)}
                    >
                      <Tooltip title="更多">
                        <EllipsisOutlined />
                      </Tooltip>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </div>

  )
})

export default NewAccount