import {memo, useEffect, useState} from "react";
import {Cascader, Input, message} from "antd";
import fetchData from "../../../../utils/net";

const Address = memo((props) => {
  const [options, setOptions] = useState()

  const {addressName, addressGender, addressPhone, detail} = props.addressState
  const {
    setAddressName,
    setAddressGender,
    setAddressPhone,
    setProvinceCode,
    setCityCode,
    setAreaCode,
    setDetail
  } = props.addressMethod


  useEffect(() => {
    fetchData("get", {}, "locate").then(res => {
      if (res.data.status === 1) {
        setOptions(res.data.locate)
      } else {
        message.error(res.data.message)
      }
    })
  }, [])

  const filter = (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)

  return (
      <div className="address">
        <div style={{marginBottom: "2rem", fontSize: "1.13rem"}}>客户地址</div>
        <div className="name-sex">
          <div className="name">
            <div style={{marginBottom: "1rem"}}>姓名</div>
            <div>
              <Input
                  className="clear-input"
                  placeholder="请输入姓名"
                  value={addressName}
                  onChange={e => setAddressName(e.target.value)}
              />
            </div>
          </div>
          <div className="sex">
            <div style={{marginBottom: "1rem"}}>性别</div>
            <div>
              <select
                  className="clear-input"
                  style={{width: "100%"}}
                  defaultValue={0}
                  value={addressGender}
                  onChange={e => setAddressGender(e.target.value)}
              >
                <option value={0}>女</option>
                <option value={1}>男</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{marginBottom: "1.5rem"}}>
          <div style={{marginBottom: "1rem"}}>地址信息</div>
          <div>
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
            /></div>
        </div>
        <div style={{marginBottom: "1.5rem"}}>
          <div style={{marginBottom: "1rem"}}>详细地址</div>
          <div>
            <Input
                className="clear-input"
                placeholder="请输入详细地址"
                value={detail}
                onChange={e => setDetail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div style={{marginBottom: "1rem"}}>手机号</div>
          <div>
            <Input
                className="clear-input"
                placeholder="请输入手机号"
                value={addressPhone}
                onChange={e => setAddressPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
  )
})

export default Address