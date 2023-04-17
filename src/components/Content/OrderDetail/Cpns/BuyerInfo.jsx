import {memo} from "react";
import userAvatar from "../../../../assets/img/avatar.png"
import {EnvironmentOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";

const BuyerInfo = memo(() => {
  return (
      <div className="buyer-info">
        <div className="buyer-msg">
          <div className="title">买家信息</div>
          <div className="content">
            <div className="user-avatar">
              <img src={userAvatar} alt=""/>
            </div>
            <div className="user-info">
              <div>王小样</div>
              <div style={{color: "#718096", marginTop: ".5rem"}}>在我店铺的订单 10</div>
            </div>
            <div className="user-email">
              <MailOutlined style={{fontSize: "1.5rem", color: "#0CAF60"}}/>
            </div>
          </div>
        </div>
        <div className="buyer-contact-info">
          <div className="title">
            <div>联系信息</div>
            <div className="edit">编辑</div>
          </div>
          <div className="contact-email">
            <div><MailOutlined/></div>
            <div style={{marginLeft: ".7rem"}}>jinjinshejisucai@mail.com</div>
          </div>
          <div className="contact-phone">
            <div><PhoneOutlined/></div>
            <div style={{marginLeft: ".7rem"}}>15800000000</div>
          </div>
        </div>
        <div className="buyer-address">
          <div className="title">
            <div>收货地址</div>
            <div className="edit">编辑</div>
          </div>
          <div className="content">
            <div><EnvironmentOutlined/></div>
            <div style={{marginLeft: ".7rem"}}>
              北京市,北京市朝阳区翰林达到裕达大厦3层
            </div>
          </div>
        </div>
        <div className="buyer-bill-address">
          <div className="title">
            <div>账单地址</div>
            <div className="edit">编辑</div>
          </div>
          <div className="content">
            <div><EnvironmentOutlined/></div>
            <div style={{marginLeft: ".7rem"}}>
              与收货地址相同
            </div>
          </div>
        </div>
      </div>
  )
})

export default BuyerInfo