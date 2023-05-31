import {memo, useEffect, useState} from "react";
import DataBoardWrapper from "./style";
import BoardItem1 from "./child/Item";
import {EyeOutlined, PayCircleOutlined, ShoppingCartOutlined, TagOutlined} from "@ant-design/icons";
import SaleReport from "./child/SaleReport";
import AllSale from "./child/AllSale";
import History from "./child/History";
import shouru from "../../../assets/img/shouru.png"
import kedan from "../../../assets/img/kedan.png"
import order_total from "../../../assets/img/order_total.png"
import watch from "../../../assets/img/watch.png"
import fetchData from "../../../utils/net";
import {message} from "antd";

const initData = {
    num: -1,
    up: -1,
    percent: -1
}

const DataBoard = memo(() => {

  const [income, setIncome] = useState(initData)
  const [orderNum, setOrderNum] = useState(initData)
  const [accountOrderNum, setAccountOrderNum] = useState(initData)
  const [watchNum, setWatchNum] = useState(initData)

  useEffect(() => {
    fetchData("get", {}, "data/income").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setIncome(data.income)
      }
    })
    fetchData("get", {}, "data/order_num").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setOrderNum(data.income)
      }
    })

    fetchData("get", {}, "data/account_order").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setAccountOrderNum(data.account_order_num)
      }
    })
    fetchData("get", {}, "data/watch").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setWatchNum(data.watch)
      }
    })
  }, [])

  return (<DataBoardWrapper>
    <div className="data-board-item data-board-top">
      <div className="board-top-left">
        {/*新增净收入*/}
        <BoardItem1
            title="新增净收入"
            icon={<PayCircleOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}
            img={shouru}
            data={income}
        />
        {/*客单量*/}
        <BoardItem1
            title="客单量"
            icon={<TagOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}
            img={kedan}
            data={accountOrderNum}
        />
        {/*订单总数*/}
        <BoardItem1
            title="订单总数"
            icon={<ShoppingCartOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}
            img={order_total}
            data={orderNum}
        />
        {/*商品浏览量*/}
        <BoardItem1
            title="商品浏览量"
            icon={<EyeOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}
            img={watch}
            data={watchNum}
        />
      </div>
      <div className="board-top-right">
        <SaleReport/>
      </div>
    </div>
    <div className="data-board-item data-board-bottom">
      {/* 整体销售额*/}
      <div className="all-sale">
        <AllSale/>
      </div>
      {/* 历史订单*/}
      <div className="history-order">
        <History/>
      </div>
    </div>
  </DataBoardWrapper>)
})

export default DataBoard