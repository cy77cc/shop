import {memo, useEffect, useState} from "react";
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import {useParams} from "react-router-dom";
import fetchData from "../../../../utils/net";
import {message} from "antd";

const initialData = {
  name: "",
  avatar: "",
  email: "",
  phone: "",
  address: "",
  remark: "",
  order_num: 0
}

const BuyerDetail = memo(() => {
  const {id} = useParams()
  const [info, setInfo] = useState(initialData)

  useEffect(() => {
    fetchData("get", {}, `account/info?id=${id}`)
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setInfo(data.info)
          }
        })
  }, [id])

  return (
      <div className="buyer-detail">
        <div className="buyer-message detail-item">
          <div className="title">客户信息</div>
          <div className="detail-content">
            <div className="avatar">
              <img src={info.avatar} alt=""/>
            </div>
            <div className="name">
              <div>{info.name}</div>
              <div style={{color: "#718096", fontSize: "0.88rem"}}>在我店铺的订单 {info.order_num}</div>
            </div>
          </div>
        </div>
        <div className="contact-message detail-item">
          <div className="title">联系信息</div>
          <div className="detail-content">
            <div><MailOutlined className="mr-75" /> {info.email}</div>
            <div><PhoneOutlined className="mr-75" /> {info.phone}</div>
          </div>
        </div>
        <div className="delivery-address detail-item">
          <div className="title">收货地址</div>
          <div className="detail-content">
            <EnvironmentOutlined className="mr-75" /> {info.address}
          </div>
        </div>
        {/*备注*/}
        <div className="note detail-item">
          <div className="title">备注信息</div>
          <div className="detail-content">
            {info.remark}
          </div>
        </div>
      </div>
  )
})

export default BuyerDetail