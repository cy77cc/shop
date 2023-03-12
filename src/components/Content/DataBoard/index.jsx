import {memo} from "react";
import DataBoardWrapper from "./style";
import BoardItem1 from "./Item";
import {EyeOutlined, PayCircleOutlined, ShoppingCartOutlined, TagOutlined} from "@ant-design/icons";
import SaleReport from "./SaleReport";
import AllSale from "./AllSale";
import History from "./History";

const DataBoard = memo(() => {
  return (<DataBoardWrapper>
    <div className="data-board-item data-board-top">
      <div className="board-top-left">
        {/*新增净收入*/}
        <BoardItem1
            title="新增净收入"
            icon={<PayCircleOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}/>
        {/*客单量*/}
        <BoardItem1
            title="客单量"
            icon={<TagOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}/>
        {/*订单总数*/}
        <BoardItem1
            title="订单总数"
            icon={<ShoppingCartOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}/>
        {/*商品浏览量*/}
        <BoardItem1
            title="商品浏览量"
            icon={<EyeOutlined style={{color: "#0CAF60", fontSize: "1.25rem", marginRight: ".63rem"}}/>}/>
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