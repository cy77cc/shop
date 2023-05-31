import {memo, useEffect, useRef, useState} from "react";
import EChartsReact from "echarts-for-react";
import fetchData from "../../../../utils/net";
import {message} from "antd";

const initialData = {
  tooltip: {
    trigger: "item"
  },
  color: ["#0CAF60", "#FFD023"],
  series: [
    {
      name: "性别",
      type: "pie",
      radius: ["60%", "90%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '男' },
        { value: 735, name: '女' },
      ],
    }
  ]
}

const Gender = memo(() => {
  const [option, setOption] = useState(initialData)
  const [male, setMale] = useState(0)
  const [female, setFemale] = useState(0)
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(option);
    }
  }, [option]);

  useEffect(() => {
    fetchData("get", {}, "op_data/gender")
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data.message)
          } else {
            let newobj = option
            option.series[0].data = data.option_data
            setOption({...newobj})
            setMale(data.option_data[0].value)
            setFemale(data.option_data[1].value)
          }
        })
  }, [])

  function malePercent() {
    if (male === 0 && female === 0) {
      return 50
    } else {
      return ((male/(male+female))*100).toFixed(2)
    }
  }

  function femalePercent() {
    if (male === 0 && female === 0) {
      return 50
    } else {
      return ((female/(male+female))*100).toFixed(2)
    }
  }

  return (
      <div className="gender cards-2-item">
        <div className="title">客户性别分布</div>
        <div className="content-box">
          <div className="graph">
            <EChartsReact ref={chartRef} option={option} style={{width: "100%", height: "100%"}} />
          </div>
          <div className="text">
            <div className="male-line">
              <div className="dot-item">
                <div className="dot male"></div>
                <div>男士</div>
              </div>
              <div>{malePercent()}%</div>
            </div>
            <div className="female-line">
              <div className="dot-item">
                <div className="dot female"></div>
                <div>女士</div>
              </div>
              <div>{femalePercent()}%</div>
            </div>
          </div>
        </div>
      </div>

  )
})

export default Gender