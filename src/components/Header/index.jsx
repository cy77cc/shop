import {memo, useState} from "react";
import HeaderWrapper from "./style";
import {Avatar, Badge, Drawer, Input} from "antd";
import {BellOutlined, MailOutlined, SearchOutlined} from "@ant-design/icons";

const Header = memo(() => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
      <HeaderWrapper>
        <div className="header-item"></div>
        <div className="header-item">
          <div className="search-item">
            <Input
                prefix={<SearchOutlined style={{fontSize: "1rem"}}/>}
                style={{height: "2.5rem",
                  background: "#FAFAFA",
                  border: "none"
                }}/>
          </div>
          <div className="mail-item"><MailOutlined/></div>
          <div className="bell-item">
            <Badge dot={true}>
              <BellOutlined style={{fontSize: "1.5rem"}} onClick={() => setModalOpen(true)}/>
            </Badge>
            <Drawer open={modalOpen} onClose={() => setModalOpen(false)}>
              {/*  TODO 通知*/}
            </Drawer>
          </div>
          <div className="avatar">
            <Avatar/>
            <span style={{marginLeft: "1rem"}}>店铺名称</span>
          </div>
        </div>
      </HeaderWrapper>
  )
})

export default Header