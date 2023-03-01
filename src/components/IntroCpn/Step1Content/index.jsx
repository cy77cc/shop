import {memo} from "react";
import Step1ContentCpnWrapper from "./style";
import {Radio} from "antd";

const Step1ContentCpn = memo(() => {
  return (<Step1ContentCpnWrapper>
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
              <select className="info-item-select">
                <option value="我还没有">我还没有</option>
                <option value="正在卖">正在卖</option>
              </select>
            </div>
            <div className="info-item">您还想在哪里在线销售？</div>
            <div className="info-item"
                 style={{color: "#718096", fontSize: "0.88rem"}}>
              用我们的平台，您可以通过多个销售渠道接触
            </div>
            <div className="info-item radio-group">
              <div className="radio-group-item radio-group-top">
                <Radio style={{marginRight: "5rem"}}>拼多多</Radio>
                <Radio>淘宝</Radio>
              </div>
              <div className="radio-group-item radio-group-bottom">
                <Radio style={{marginRight: "5rem"}}>个人网站</Radio>
                <Radio>其他</Radio>
              </div>
            </div>
            <div className="info-item">
              您目前收入是多少？
            </div>
            <div className="info-item select-item">
              <select name="" id="" className="info-item-select">
                <option value="">￥800-￥8000</option>
              </select>
            </div>
            <div className="info-item">您将在哪个行业运营？</div>
            <div className="info-item select-item">
              <select name="" id="" className="info-item-select">
                <option value="服装">服装</option>
              </select>
            </div>
          </div>
        </div>

      </Step1ContentCpnWrapper>)
})

export default Step1ContentCpn