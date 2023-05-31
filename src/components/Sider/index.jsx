import {memo} from "react";
import SiderWrapper from "./style";
import {ClientIcon, DataBoardIcon, GoodsListIcon, MyStoreIcon, OpDataIcon, OrderIcon, PromotionIcon} from "../IconSvg";
import logoPic from "../../assets/img/logo.png"
import SHA256 from "crypto-js/sha256"
import classNames from "classnames";
import {useLocation, useNavigate} from "react-router-dom";

const list = [{
  title: "数据看板",
  icon: <DataBoardIcon/>,
  name: "data-board",
  path: "/",
  active: true
}, {
  title: "订单",
  icon: <OrderIcon/>,
  name: "order",
  path: "/order?page=1&pageSize=10&type=6",
  active: false
}, {
  title: "商品列表",
  icon: <GoodsListIcon/>,
  name: "goods-list",
  path: "/goods?page=1&pageSize=10",
  active: false
}, {
  title: "客户",
  icon: <ClientIcon/>,
  name: "account",
  path: "/account?page=1&pageSize=10",
  active: false
}, {
  title: "运营数据",
  icon: <OpDataIcon/>,
  name: "op-data",
  path: "/opdata",
  active: false
}, {
  title: "促销营销",
  icon: <PromotionIcon/>,
  name: "promotion",
  path: "/promotion",
  active: false
}]

const Sider = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
      <SiderWrapper>
        {/*导航*/}
        <div className="nav">
          {/*logo*/}
          <div className="logo">
            <img src={logoPic} alt=""/>
          </div>
          <div className="nav-item nav-slogan">导航</div>
          {list.map((item, index) => {
            return (
                // 解析路径
                <div
                    className={classNames("nav-item nav-hover",
                        {'active': location.pathname.split('/')[1] === item.path.split('/')[1].split('?')[0]})}
                    key={SHA256(item.title + index)}
                    onClick={() => navigate(item.path)}
                >{item.icon} <span style={{marginLeft: "1rem"}}>{item.title}</span></div>)
          })}
        </div>
        {/*销售渠道*/}
        <div className="sale-chan">
          <div className="sale-item sale-slogan">销售渠道</div>
          <div
              className={classNames("sale-item nav-hover", {"active": location.pathname === "/mystore"})}
              onClick={() => navigate("/mystore")}
          >
            <MyStoreIcon/>
            <span
                style={{marginLeft: "1rem"}}>我的店铺</span></div>
        </div>
      </SiderWrapper>
  )
})

export default Sider