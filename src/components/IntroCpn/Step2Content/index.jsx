import {memo} from "react";
import Step2ContentCpnWrapper from "./style";
import {Cascader, Input} from "antd";

const Step1ContentCpn = memo(() => {
  return (
      <Step2ContentCpnWrapper>
        <div className="bar">
          <div className="bar-left"></div>
          <div className="bar-right"></div>
        </div>
        <div className="content-box">
          <div className="intro-tip">
            <div><span className="tip-message intro-tip-item">请添加一个地址</span></div>
            <div><span className="tip-message2 intro-tip-item">这将用作您的默认营业地址，您可以稍后更改</span></div>
          </div>
          <div className="select-information-box">
            <div className="info-item">
              <span>地址信息</span>
            </div>
            <div className="info-item">
              {/*TODO 省市区三级联动*/}
              <Cascader style={{width: "100%"}} />
            </div>
            <div className="info-item">
              <span>详细地址</span>
            </div>
            <div className="info-item">
              <Input placeholder="请输入详细地址" />
            </div>
            <div className="info-item">
              <span>邮政编码</span>
            </div>
            <div className="info-item">
              <Input placeholder="请输入邮政编码" />
            </div>
            <div className="info-item name-box">
              <div className="name-item">姓氏</div>
              <div className="name-item">名字</div>
            </div>
            <div className="info-item name-box">
              <div className="name-item">
                <Input placeholder="请输入姓氏" />
              </div>
              <div className="name-item">
                <Input placeholder="请输入名字" />
              </div>
            </div>
            <div className="info-item">
              <span>手机号</span>
            </div>
            <div className="info-item">
              <Input placeholder="请输入手机号" />
            </div>
          </div>
        </div>
      </Step2ContentCpnWrapper>)
})

export default Step1ContentCpn