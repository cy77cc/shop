import {memo, useEffect, useRef, useState} from "react";
import {DatePicker} from "antd"
import EChartsReact from "echarts-for-react";
import fetchData from "../../../../utils/net";

const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const initialData = {
  grid: {
    top: 10,
    right: 0,
    bottom: 19,
    left: 35
  },
  xAxis: {
    type: 'category',
    data: [],
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
      show: false
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
      smooth: true,
      data: [],
      symbol: "circle",
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
    }
  ]
}

const AllSale = memo(() => {
  const [option, setOption] = useState(initialData)
  const chartRef = useRef(null);
  const [startYear, setStartYear] = useState(2023)
  const [endYear, setEndYear] = useState(2023)
  // 开始月份
  const [startMonth, setStartMonth] = useState(1)
  // 结束月份
  const [endMonth, setEndMonth] = useState(new Date().getMonth()+1)
  const [startDay, setStartDay] = useState(1)
  const [endDay, setEndDay] = useState(new Date().getDay())

  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option);
    }
  }, [option]);

  // 处理时间
  const handleTime = (time, timeString) => {
    let startTime = timeString[0]
    let endTime = timeString[1]
    let startTimeArr = startTime.split("/")
    let endTimeArr = endTime.split("/")
    setStartYear(Number(startTimeArr[0]))
    setStartMonth(Number(startTimeArr[1]))
    setStartDay(Number(startTimeArr[2]))
    setEndYear(Number(endTimeArr[0]))
    setEndMonth(Number(endTimeArr[1]))
    setEndDay(Number(endTimeArr[2]))
  }

  useEffect(() => {
    fetchData("get",
        {},
        `data/all_sale?start_year=${startYear}&end_year=${endYear}&start_month=${startMonth}&end_month=${endMonth}&start_day=${startDay}&end_day=${endDay}`)
        .then(res => {
          let data = res.data
          let newobj = option
          newobj.xAxis.data = data.xAxisData
          newobj.series[0].data = data.seriesData
          setTotal(data.total)
          setOption({...newobj})
        })
  }, [startYear, endYear, startMonth, endMonth, startDay, endDay, total])

  return (
      <>
        <div className="all-sale-top all-sale-item">
          <div className="all-sale-title">
            <div className="title">整体销售额 (元)</div>
            <div className="">
              <div className="sum">{total}</div>
            </div>
          </div>
          <div>
            <RangePicker
                format={dateFormat}
                onChange={handleTime}
            />
          </div>
        </div>
        <div className="all-sale-bottom all-sale-item">
          <EChartsReact ref={chartRef} option={option} style={{width: "100%", height: "100%"}}/>
        </div>
      </>
  )
})

export default AllSale