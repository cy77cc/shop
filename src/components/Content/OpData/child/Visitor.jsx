import {memo, useEffect, useRef, useState} from "react";
import {message, Radio} from "antd";
import numeral from "numeral";
import EChartsReact from "echarts-for-react";
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
  color: ["#0CAF60", "#FFD023"],
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      formatter: function (value) {
        if (value >= 1000) {
          return value / 1000 + 'k';
        }
        return value
      }
    }
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
            offset: 0, color: 'rgba(255, 208, 35, .2)'
          }, {
            offset: 1, color: 'rgba(255, 208, 35,0)'
          }],
        }
      },
      symbol: "circle"
    }
  ]
}

const Visitor = memo((props) => {
  const [option, setOption] = useState(initialOption)
  const chartRef = useRef(null)
  const {selectYear} = props
  const year = new Date().getFullYear()
  const [maleNum, setMaleNum] = useState(0)
  const [femaleNum, setFemaleNum] = useState(0)

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option);
    }
  }, [option]);

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
    fetchData("get", {}, `op_data/visitor?type=${type}&year=${selectYear}`)
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            setMaleNum(data.data.male_num)
            setFemaleNum(data.data.female_num)
            let newobj = option
            newobj.series[0].data = data.data.male_data
            newobj.series[1].data = data.data.female_data
            setOption({...newobj})
          }
        })
  }, [type, selectYear])

  return (
      <div className="visitor">
        <div className="title">
          <div>访客</div>
          <div>
            <Radio.Group value={type} onChange={e => setType(e.target.value)}>
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
              <div className="text">男</div>
              <div className="number">{numeral(maleNum).format('0,0')}</div>
            </div>
            <div className="item-box">
              <div className="text">女</div>
              <div className="number">{numeral(femaleNum).format('0,0')}</div>
            </div>
          </div>
          <div className="graph">
            <EChartsReact option={option} ref={chartRef} style={{width: "100%", height: "100%"}}/>
          </div>
        </div>
      </div>
  )
})

export default Visitor