import {memo, useEffect, useState} from "react";
import Step1ContentCpnWrapper from "./style";
import {message, Radio} from "antd";
import fetchData from "../../../utils/net";
import SHA256 from "crypto-js/sha256";
import {useNavigate, useParams} from "react-router-dom";

const Step1ContentCpn = memo(() => {
  const [isSale, setIsSale] = useState(0)
  const [income, setIncome] = useState("￥6000-￥8000")
  const [industryId, setIndustryId] = useState(1)
  const [industries, setIndustries] = useState([])
  const [pingxixi, setPingxixi] = useState(false)
  const [taobao, setTaobao] = useState(false)
  const [selfWeb, setSelfWeb] = useState(false)
  const [more, setMore] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetchData("post", {}, "industry").then(res => {
      let data = res.data
      if (data.status === 0) {
        messageApi.error(data.message)
      } else {
        setIndustries([...data.industries])
      }
    })
  }, [messageApi])


  function handleIsSale(e) {
    setIsSale(e.target.value)
  }

  function handleIncome(e) {
    setIncome(e.target.value)
  }

  function handleIndustry(e) {
    setIndustryId(e.target.value)
  }

  function handleStep1(type) {
    let moreChan = ""
    if (pingxixi) {
      moreChan += "拼夕夕;"
    }
    if (taobao) {
      moreChan += "淘宝;"
    }
    if (selfWeb) {
      moreChan += "个人网站;"
    }
    if (more) {
      moreChan += "其他;"
    }
    fetchData("post", {
      admin_id: Number(params.id),
      is_sale: Number(isSale),
      more_chan: moreChan,
      income: income,
      industry_id: Number(industryId)
    }, "introduce/step1").then(res => {
      let data = res.data
      if (type === 0) {
        navigate(`/introduce/${params.id}/step2`)
      } else {
        if (data.status !== 1) {
          messageApi.error(data.message)
        } else {
          navigate(`/introduce/${params.id}/step2`)
        }
      }
    })
  }

  return (<Step1ContentCpnWrapper>
    {contextHolder}
    <div className="bar">
      <div className="bar-left"></div>
      <div className="bar-right"></div>
    </div>
    <div className="content-box">
      <div className="intro-tip">
        <div><span className="tip-message intro-tip-item">请你介绍一下自己</span></div>
        <div><span className="tip-message2 intro-tip-item">我们将根据您的介绍来帮助您更好的开始</span></div>
      </div>
      <div className="select-information-box">
        <div className="info-item">您已经在卖产品了吗？</div>
        <div className="info-item select-item">
          <select className="info-item-select" value={isSale} onChange={handleIsSale}>
            <option value={0}>我还没有</option>
            <option value={1}>正在卖</option>
          </select>
        </div>
        <div className="info-item">您还想在哪里在线销售？</div>
        <div className="info-item"
             style={{color: "#718096", fontSize: "0.88rem"}}>
          用我们的平台，您可以通过多个销售渠道接触
        </div>
        <div className="info-item radio-group">
          <div className="radio-group-item radio-group-top">
            <Radio style={{marginRight: "5rem"}}
                   checked={pingxixi}
                   onClick={e => setPingxixi(!pingxixi)}>拼多多</Radio>
            <Radio checked={taobao} onClick={e => setTaobao(!taobao)}>淘宝</Radio>
          </div>
          <div className="radio-group-item radio-group-bottom">
            <Radio style={{marginRight: "5rem"}}
                   checked={selfWeb}
                   onClick={e => setSelfWeb(!selfWeb)}>个人网站</Radio>
            <Radio checked={more} onClick={e => setMore(!more)}>其他</Radio>
          </div>
        </div>
        <div className="info-item">
          您目前收入是多少？
        </div>
        <div className="info-item select-item">
          <select className="info-item-select" value={income} onChange={handleIncome}>
            <option value="￥6000以下">￥6000以下</option>
            <option value="￥6000-￥8000">￥6000-￥8000</option>
            <option value="￥8000-￥10000">￥8000-￥10000</option>
            <option value="￥10000-￥12000">￥10000-￥12000</option>
            <option value="￥12000以上">￥12000以上</option>
          </select>
        </div>
        <div className="info-item">您将在哪个行业运营？</div>
        <div className="info-item select-item">
          <select className="info-item-select" value={industryId} onChange={handleIndustry}>
            {industries.map((v, i) => {
              return (<option key={SHA256(v.name).toString()} value={v.industry_id}>{v.name}</option>)
            })}
          </select>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="empty"></div>
      <div className="btn-group">
        <button className="btn-item-left" onClick={() => handleStep1(0)}>跳过</button>
        <button className="btn-item-right" onClick={() => handleStep1(1)}>继续</button>
      </div>
    </div>

  </Step1ContentCpnWrapper>)
})

export default Step1ContentCpn