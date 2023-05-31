import {memo, useEffect, useRef, useState} from "react";
import {message, Radio} from "antd";
import EChartsReact from "echarts-for-react";
import fetchData from "../../../../utils/net";

const initialOption = {
  tooltip: {
    trigger: "item"
  },
  color: ["#0CAF60", "#FFD023", "#4CB6FF", "#2363E6", "#FF8635", "#F3D025"],
  series: [
    {
      name: "来源",
      type: "pie",
      data: [],
      radius: ["60%", "90%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      labelLine: {
        show: false
      },
    }
  ]
}

const SourceFrom = memo((props) => {
  const [option, setOption] = useState(initialOption)
  const [total, setTotal] = useState(0)
  const [sourceFrom, setSourceFrom] = useState([])
  const {selectYear} = props
  const year = new Date().getFullYear()
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option);
    }
  }, [option]);
  const [type, setType] = useState("month")

  useEffect(() => {
    fetchData("get", {}, `op_data/from?type=${type}&year=${selectYear}`)
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setSourceFrom(data.datas)
            let newobj = option
            option.series[0].data = data.datas
            setOption({...newobj})
            setTotal(data.total)
          }
        })
  }, [type, selectYear])

  // n1数据，n2总数据
  function getPercent(n1, n2) {
    if (n2===0) {
      return (1/6*100).toFixed(2)
    } else {
      return (n1/n2*100).toFixed(2)
    }
  }

  return (
      <div className="source-from cards-2-item">
        <div className="title">
          <div>流量来源</div>
          <div>
            <Radio.Group value={type} onChange={e => setType(e.target.value)}>
              <Radio.Button value="month">全部</Radio.Button>
              <Radio.Button
                  value="week"
                  disabled={Number(selectYear) !== Number(year)}
              >最近一周</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="content-box">
          <div className="graph">
            <EChartsReact ref={chartRef} option={option} style={{width: "100%", height: "100%"}}/>
          </div>
          <div className="text">
            <div className="line-item">
              <div className="dot-item">
                <div className="dot" style={{background: "#0CAF60"}}></div>
                <div>QQ</div>
              </div>
              <div>{getPercent(sourceFrom[0]?.value, total)}%</div>
            </div>
            <div className="line-item">
              <div className="dot-item">
                <div className="dot" style={{background: "#FFD023"}}></div>
                <div>微博</div>
              </div>
              <div>{getPercent(sourceFrom[1]?.value, total)}%</div>
            </div>
            <div className="line-item">
              <div className="dot-item">
                <div className="dot" style={{background: "#4CB6FF"}}></div>
                <div>小红书</div>
              </div>
              <div>{getPercent(sourceFrom[2]?.value, total)}%</div>
            </div>
            <div className="line-item">
              <div className="dot-item">
                <div className="dot" style={{background: "#2363E6"}}></div>
                <div>首页</div>
              </div>
              <div>{getPercent(sourceFrom[3]?.value, total)}%</div>
            </div>
            <div className="line-item">
              <div className="dot-item">
                <div className="dot" style={{background: "#FF8635"}}></div>
                <div>抖音</div>
              </div>
              <div>{getPercent(sourceFrom[4]?.value, total)}%</div>
            </div>
            <div className="line-item">
              <div className="dot-item">
                <div className="dot" style={{background: "#F3D025"}}></div>
                <div>微信</div>
              </div>
              <div>{getPercent(sourceFrom[5]?.value, total)}%</div>
            </div>
          </div>
        </div>
      </div>

  )
})

export default SourceFrom