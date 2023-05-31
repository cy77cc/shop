import {memo, useEffect, useRef, useState} from "react";
import {Dropdown, message} from "antd";
import {DownOutlined} from "@ant-design/icons";
import EChartsReact from "echarts-for-react";
import fetchData from "../../../../utils/net";

const initialData = {
  tooltip: {
    trigger: 'item'
  },
  color: ["#0CAF60", "#FFD023", "#F9FAFB"],
  series: [
    {
      name: '来源',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 30,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: []
    }
  ]
};


const SaleReport = memo(() => {
  const [selectText, setSelectText] = useState("按年")
  const [option, setOption] = useState(initialData)
  const chartRef = useRef(null);
  const items = [
    {
      label: <div onClick={e => setSelectText("按年")}>按年</div>,
      key: "year"
    }, {
      label: <div onClick={e => setSelectText("按月")}>按月</div>,
      key: "month"
    }, {
      label: <div onClick={e => setSelectText("按周")}>按周</div>,
      key: "week"
    }, {
      label: <div onClick={e => setSelectText("按天")}>按天</div>,
      key: "day"
    }
  ]

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option);
    }
  }, [option]);

  useEffect(() => {
    let newobj = option
    fetchData("post", {
      year: selectText === "按年" ? 1 : 0,
      month: selectText === "按月" ? 1 : 0,
      week: selectText === "按周" ? 1 : 0,
      day: selectText === "按天" ? 1 : 0,
    }, "data/source")
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            newobj.series[0].data = data.data
            setOption({...newobj})
          }
        })
  }, [selectText])

  return (
      <div className="sale-report">
        <div className="sale-report-msg">
          <div><span style={{fontSize: "1.25rem"}}>销售报告</span></div>
          <div style={{cursor: "pointer"}}>
            <Dropdown
                menu={{items,}}
                trigger={["click"]}
            >
              <span style={{color: "#718096", fontSize: "0.88rem"}}>{selectText}<DownOutlined/></span>
            </Dropdown>
          </div>
        </div>
        <div className="sale-report-graph">
          <EChartsReact option={option} ref={chartRef} />
        </div>
        {/*数据来源和占比*/}
        <div className="sale-report-origin">
          <div className="origin-item">
            <div style={{display: "flex"}}>
              <div className="dot" style={{background: "#0CAF60"}}></div>
              <span>淘宝平台</span>
            </div>
            <div>
              <span>{option.series[0].data[0]?.value}</span>
            </div>
          </div>
          <div className="origin-item">
            <div style={{display: "flex"}}>
              <div className="dot" style={{background: "#FFD023"}}></div>
              <span>个人网站</span>
            </div>
            <div>
              <span>{option.series[0].data[1]?.value}</span>
            </div>
          </div>
          <div className="origin-item">
            <div style={{display: "flex"}}>
              <div className="dot" style={{background: "#F1F2F4"}}></div>
              <span>其他</span>
            </div>
            <div>
              <span>{option.series[0].data[2]?.value}</span>
            </div>
          </div>
        </div>
      </div>
  )
})

export default SaleReport