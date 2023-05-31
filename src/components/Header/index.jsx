import {memo, useState} from "react";
import HeaderWrapper from "./style";
import {Avatar, Badge, Drawer, Dropdown} from "antd";
import {BellOutlined, MailOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {Logout, ModifyInfo, ModifyPassword} from "./child/LabelItems";

const items = [
  {
    label: <ModifyInfo/>,
    key: '0'
  },
  {
    label: <ModifyPassword/>,
    key: '1'
  },
  {
    label: <Logout/>,
    key: '2'
  }
]

const Header = memo(() => {
  const [modalOpen, setModalOpen] = useState(false)
  const {admin} = useSelector((state) => {
    return {
      admin: state.admin
    }
  })
  return (
      <HeaderWrapper>
        <div className="header-item"></div>
        <div className="header-item">
          <div className="search-item">
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
          <Dropdown
              menu={{items,}}
              trigger={['click']}
          >
            <div className="avatar">
              <Avatar src={admin.avatar}/>
              <span style={{marginLeft: "1rem"}}>{admin.shop_name}</span>
            </div>
          </Dropdown>
        </div>
      </HeaderWrapper>
  )
})

export default Header