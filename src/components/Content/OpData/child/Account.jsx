import {memo, useEffect, useRef, useState} from "react";
import EChartsReact from "echarts-for-react";
import fetchData from "../../../../utils/net";
import {message} from "antd";

const initialOption = {
  grid: {
    top: 10,
    right: 0,
    bottom: 19,
    left: 0
  },
  xAxis: {
    type: 'category',
    data: ["07:00", "10:00", "13:00", "16:00", "19:00", "22:00"],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  tooltip: {
    trigger: "axis"
  },
  color: ["#0CAF60"],
  yAxis: {
    show: false
  },
  series: [
    {
      type: "line",
      smooth: true,
      data: [],
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(11,162,89,0.2)'
          }, {
            offset: 1, color: 'rgba(11,162,89,0)'
          }],
        }
      },
      symbol: "circle"
    },
  ]
}

const Account = memo(() => {
  const [option, setOption] = useState(initialOption)
  const chartRef = useRef(null)

  useEffect(() => {
    fetchData("get", {}, "op_data/time")
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data?.message)
          } else {
            let newobj = option
            newobj.series[0].data = data.data
            setOption({...newobj})
          }
        })
  }, [])

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option)
    }
  }, [option])

  return (
      <div className="account cards-2-item">
        <div className="title">
          <div>客户</div>
        </div>
        <div className="content-box">
          <EChartsReact option={option} ref={chartRef} style={{width: "100%", height: "100%"}}/>
        </div>
      </div>
  )
})
export default Account