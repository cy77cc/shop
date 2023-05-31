import {memo, useEffect, useRef, useState} from "react";
import {message, Radio} from "antd";
import EChartsReact from "echarts-for-react";
import numeral from "numeral"
import fetchData from "../../../../utils/net";

const initialOption = {
  grid: {
    top: 10,
    right: 0,
    bottom: 19,
    left: 35
  },
  xAxis: {
    type: 'category',
    data: [],
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
      type: "bar",
      // smooth: true,
      data: [],
      barWidth: 10
    }
  ]
}

const SaleNum = memo((props) => {
  const {selectYear} = props
  const year = new Date().getFullYear()
  const [option, setOption] = useState(initialOption)
  const chartRef = useRef(null)
  const [saleNum, setSaleNum] = useState(0)
  const [orderNum, setOrderNum] = useState(0)

  // 数据方式
  const [type, setType] = useState("month")

  useEffect(() => {
    if (type === "month") {
      let newobj = option
      newobj.xAxis.data = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
      setOption({...newobj})
    } else {
      let newobj = option
      newobj.xAxis.data = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
      setOption({...newobj})
    }
  }, [type])

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option);
    }
  }, [option]);

  useEffect(() => {
    fetchData("get", {}, `op_data/sale?type=${type}&year=${selectYear}`)
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            let newobj = option
            newobj.series[0].data = data.data.data
            setOption({...newobj})
            setSaleNum(data.data.num)
            setOrderNum(data.data.order_num)
          }
        })
  }, [type, selectYear])



  return (
      <div className="sale-num">
        <div className="title">
          <div>销售额</div>
          <div>
            <Radio.Group value={type} onChange={(e) => setType(e.target.value)}>
              <Radio.Button value="month">按月</Radio.Button>
              <Radio.Button
                  value="week"
                  disabled={Number(selectYear) !== Number(year)}
              >最近一周</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="content-box">
          <div className="num-items">
            <div className="item-box">
              <div className="text">净销售额(元)</div>
              <div className="number">{numeral(saleNum).format('0,0.00')}</div>
            </div>
            <div className="item-box">
              <div className="text">订单</div>
              <div className="number">{numeral(orderNum).format('0,0')}</div>
            </div>
          </div>
          <div className="graph">
            <EChartsReact option={option} ref={chartRef} style={{width: "100%", height: "100%"}} />
          </div>
        </div>
      </div>
  )
})

export default SaleNum