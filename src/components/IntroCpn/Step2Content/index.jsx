import {memo, useEffect, useState} from "react";
import Step2ContentCpnWrapper from "./style";
import {Cascader, Input, message} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import fetchData from "../../../utils/net";

const Step1ContentCpn = memo(() => {
  const navigate = useNavigate();
  const [options, setOptions] = useState()
  const [messageApi, contentHolder] = message.useMessage()
  const [provinceCode, setProvinceCode] = useState()
  const [cityCode, setCityCode] = useState()
  const [areaCode, setAreaCode] = useState()
  const [detail, setDetail] = useState()
  const [phone, setPhone] = useState()
  const params = useParams()
  const {id} = params

  useEffect(() => {
    fetchData("get", {}, "locate").then(res => {
      if (res.data.status === 1) {
        setOptions(res.data.locate)
      } else {
        messageApi.error(res.data.message)
      }
    })
  }, [messageApi])

  const filter = (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)

  function handleFinish(e) {
    fetchData("post", {
      admin_id: Number(id),
      province_code: provinceCode,
      city_code: cityCode,
      area_code: areaCode,
      phone: phone,
      detail_address: detail
    }, "introduce/step2").then(res => {
      let data = res.data
      if (data.status !== 1) {
        messageApi.error(data.message)
      } else {
        localStorage.setItem("token", data.token)
        navigate("/")
      }
    })
  }

  return (
      <Step2ContentCpnWrapper>
        {contentHolder}
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
              <Cascader
                  style={{width: "100%"}}
                  options={options}
                  placeholder="下拉选择"
                  showSearch={{filter}}
                  onChange={(value, selectedOptions) => {
                    setProvinceCode(value[0])
                    setCityCode(value[1])
                    setAreaCode(value[2])
                  }}
              />
            </div>
            <div className="info-item">
              <span>详细地址</span>
            </div>
            <div className="info-item">
              <Input
                  placeholder="请输入详细地址"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)} />
            </div>
            <div className="info-item">
              <span>手机号</span>
            </div>
            <div className="info-item">
              <Input
                  placeholder="请输入手机号"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="empty"></div>
          <div className="btn-group">
            <button className="btn-item-left" onClick={() => navigate(`/introduce/${id}/step1`)}>返回</button>
            <button className="btn-item-right" onClick={handleFinish}>完成</button>
          </div>
        </div>
      </Step2ContentCpnWrapper>)
})

export default Step1ContentCpn