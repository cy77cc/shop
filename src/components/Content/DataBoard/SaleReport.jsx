import {memo, useState} from "react";
import {Dropdown} from "antd";
import {DownOutlined} from "@ant-design/icons";

const SaleReport = memo(() => {
  const [selectText, setSelectText] = useState("按年")
  const items = [
    {
      label: <div onClick={e => setSelectText(e.target.innerHTML)}>按年</div>,
      key: "year"
    }, {
      label: <div onClick={e => setSelectText(e.target.innerHTML)}>按月</div>,
      key: "month"
    }, {
      label: <div onClick={e => setSelectText(e.target.innerHTML)}>按周</div>,
      key: "week"
    }, {
      label: <div onClick={e => setSelectText(e.target.innerHTML)}>按天</div>,
      key: "day"
    }
  ]
  return (
      <div className="sale-report">
        <div className="sale-report-msg">
          <div><span style={{fontSize: "1.25rem"}}>销售报告</span></div>
          <div style={{cursor: "pointer"}}>
            <Dropdown
                menu={{items,}}
                trigger={["click"]}
            >
              <span style={{color: "#718096", fontSize: "0.88rem"}}>{selectText}<DownOutlined /></span>
            </Dropdown>
          </div>
        </div>
        <div className="sale-report-graph"></div>
        {/*数据来源和占比*/}
        <div className="sale-report-origin">
          <div className="origin-item">
            <div style={{display: "flex"}}>
              <div className="dot" style={{background: "#0CAF60"}}></div><span>淘宝平台</span>
            </div>
            <div>
              <span>65.8%</span>
            </div>
          </div>
          <div className="origin-item">
            <div style={{display: "flex"}}>
              <div className="dot" style={{background: "#FFD023"}}></div><span>个人网站</span>
            </div>
            <div>
              <span>65.8%</span>
            </div>
          </div>
          <div className="origin-item">
            <div style={{display: "flex"}}>
              <div className="dot" style={{background: "#F1F2F4"}}></div><span>其他</span>
            </div>
            <div>
              <span>65.8%</span>
            </div>
          </div>
        </div>
      </div>
  )
})

export default SaleReport