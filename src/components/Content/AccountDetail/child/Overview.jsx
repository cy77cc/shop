import {memo, useEffect, useRef, useState} from "react";
import {BarChartOutlined} from "@ant-design/icons";
import EChartsReact from "echarts-for-react";
import {useParams} from "react-router-dom";
import fetchData from "../../../../utils/net";
import {message} from "antd";
import dayjs from "dayjs";

const initialOption = {
  grid: {
    top: 10,
    right: 0,
    bottom: 19,
    left: 35
  },
  xAxis: {
    type: 'category',
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
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
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        type: "dashed"
      }
    },
    axisLabel: {
      formatter: function (value) {
        if (value >=1000) {
          return value/1000+'k';
        }
        return value
      }
    }
  },
  series: [
    {
      type: "line",
      // smooth: true,
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
      }
    }
  ]
}

const Overview = memo(() => {
  const [option, setOption] = useState(initialOption)
  const [dealNum, setDealNum] = useState(0)
  const [dealTime, setDealTime] = useState("2023-01-19T01:20:17Z")
  const [amount, setAmount] = useState(0)
  const [average, setAverage] = useState(0)
  const {id} = useParams()
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option);
    }
  }, [option]);

  useEffect(() => {
    fetchData("get", {}, `account/overview?id=${id}`)
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setDealNum(data.data.deal_num)
            setDealTime(data.data.last_deal_time)
            setAverage(data.data.average_num)
            setAmount(data.data.amount)
            let newobj = option
            newobj.series[0].data = data.data.option_data
            setOption({...newobj})
          }
        })
  }, [id])

  return (
      <div className="account-data-overview">
        <div className="overview-title">
          <BarChartOutlined
              style={{color: "#A0AEC0"}} /> 客户数据概览
        </div>
        <div className="overview-content">
          <div className="overview-content-left">
            <div className="overview-left-item">
              <div className="item-title">交易次数</div>
              <div className="item-content">{dealNum}</div>
              <div className="item-other">最后订单：{dayjs(dealTime).utc().format("YYYY.MM.DD")}</div>
            </div>
            <div className="overview-left-item">
              <div className="item-title">交易额</div>
              <div className="item-content">￥{amount.toFixed(2)}</div>
              <div className="item-other">
                <span className={true ? 'up' : 'down'}>+12,0%</span> 较上月
              </div>
            </div>
            <div className="overview-left-item">
              <div className="item-title">平均订单金额</div>
              <div className="item-content">￥{average.toFixed(2)}</div>
              <div className="item-other">
                <span className={true ? 'up' : 'down'}>+12,0%</span> 较上月
              </div>
            </div>
          </div>
          <div className="overview-content-right">
            <div className="overview-graph-title">
              数据统计
            </div>
            <div className="overview-graph">
              <EChartsReact ref={chartRef} option={option} />
            </div>
          </div>
        </div>
      </div>
  )
})

export default Overview