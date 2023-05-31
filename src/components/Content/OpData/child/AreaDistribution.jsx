import {memo, useEffect, useRef, useState} from "react";
import * as echarts from "echarts"
import EChartsReact from "echarts-for-react";
import geoJson from "./chain.json"
import fetchData from "../../../../utils/net";
import {message} from "antd";
import numeral from "numeral";

const initialOption = {
  grid: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  color: ["#0CAF60"],
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}个客户'
  },
  roam: true,
  series: [{
    type: 'map',
    mapType: 'china',
    itemStyle: {
      emphasis: {
        areaColor: "#4CB6FF"
      }
    },
    label: {
      show: false
    },
    data: []
  }]
}

const AreaDistribution = memo(() => {
  const [option, setOption] = useState(initialOption)
  const [topProvince, setTopProvince] = useState([])

  const chartRef = useRef(null)

  echarts.registerMap('china', geoJson)


  useEffect(() => {
    fetchData("get", {}, "op_data/distribution")
        .then(res => {
          let data = res.data
          if (data.status !== 1) {
            message.error(data?.message)
          } else {
            let newobj = option
            newobj.series[0].data = data.data
            setTopProvince(data.data)
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
      <div className="area-distribution">
        <div className="left-content">
          <div style={{marginBottom: ".5rem", color: "#718096"}}>地域分布</div>
          <div style={{fontSize: "1.5rem"}}>76,345</div>
          <div className="provinces">
            <div className="province-item">
              <div className="dot-name">
                <div className="dot" style={{background: "#4CB6FF"}}></div>
                <div className="name">{topProvince[0]?.name}</div>
              </div>
              <div className="number">{numeral(topProvince[0]?.value).format('0,0')}</div>
            </div>
            <div className="province-item">
              <div className="dot-name">
                <div className="dot" style={{background: "#2363E6"}}></div>
                <div className="name">{topProvince[1]?.name}</div>
              </div>
              <div className="number">{numeral(topProvince[1]?.value).format('0,0')}</div>
            </div>
            <div className="province-item">
              <div className="dot-name">
                <div className="dot" style={{background: "#FF8635"}}></div>
                <div className="name">{topProvince[2]?.name}</div>
              </div>
              <div className="number">{numeral(topProvince[2]?.value).format('0,0')}</div>
            </div>
            <div className="province-item">
              <div className="dot-name">
                <div className="dot" style={{background: "#F3D025"}}></div>
                <div className="name">{topProvince[3]?.name}</div>
              </div>
              <div className="number">{numeral(topProvince[3]?.value).format('0,0')}</div>
            </div>
          </div>
        </div>
        <div className="right-content">
          <EChartsReact ref={chartRef} option={option} style={{width: "100%", height: "100%"}}/>
        </div>
      </div>

  )
})

export default AreaDistribution