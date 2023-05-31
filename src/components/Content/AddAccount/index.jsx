import {memo, useEffect, useState} from "react";
import AddAccountWrapper from "./style";
import BaseInfo from "./child/BaseInfo";
import Avatar from "./child/Avatar";
import Remark from "./child/Remark";
import Address from "./child/Address";
import Tag from "./child/Tag";
import {useNavigate} from "react-router-dom";
import {Button, message} from "antd";
import fetchData from "../../../utils/net";
import SHA256 from "crypto-js/sha256";

const AddAccount = memo(() => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [gender, setGender] = useState(0)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [avatar, setAvatar] = useState("")

  const [addressName, setAddressName] = useState("")
  const [addressGender, setAddressGender] = useState(0)
  const [provinceCode, setProvinceCode] = useState(0)
  const [cityCode, setCityCode] = useState(0)
  const [areaCode, setAreaCode] = useState(0)
  const [detail, setDetail] = useState("")
  const [addressPhone, setAddressPhone] = useState("")

  const [remark, setRemark] = useState("")
  const [tag, setTag] = useState("")

  const [flag, setFlag] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (name !== "" && email !== "" && phone !== "" && avatar !== ""
        && addressName !== "" && provinceCode !== 0 && cityCode !== 0 && areaCode !== 0
        && detail !== "" && addressPhone !== "" && remark !== "" && tag !== "") {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [addressName, addressPhone, areaCode, avatar, cityCode, detail, email, name, phone, provinceCode, remark, tag])

  async function handleSubmit() {
    setIsLoading(true)
    let ip
    await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          ip = data.ip;
        })
    let data = {
      name: name,
      gender: Number(gender),
      email: email,
      phone: phone,
      avatar: avatar,
      address_name: addressName,
      address_gender: Number(addressGender),
      address_phone: addressPhone,
      province_code: provinceCode,
      city_code: cityCode,
      area_code: areaCode,
      detail: detail,
      remark: remark,
      tag: tag,
      ip: ip,
      password: SHA256('123456').toString()
    }
    fetchData("post", data, "account/add")
        .then(res => {
          setIsLoading(false)
          if (res.data.status !== 1) {
            message.error(res.data.message)
          } else {
            message.success("创建成功")
            navigate("/goods?page=1&pageSize=10")
          }
        })
  }

  return (
      <AddAccountWrapper>
        <div className="top-box">
          <div className="left-box">
            <BaseInfo
                infoState={{name, gender, email, phone}}
                infoMethod={{setName, setGender, setEmail, setPhone}}
            />
          </div>
          <div className="right-box">
            <Avatar avatarState={{avatar}} avatarMethod={{setAvatar}}/>
            <Remark remarkState={{remark}} remarkMethod={{setRemark}}/>
          </div>
        </div>
        <div className="middle-box">
          <div className="left-box">
            <Address
                addressState={{addressName, addressGender, addressPhone, provinceCode, cityCode, areaCode, detail}}
                addressMethod={{
                  setAddressName,
                  setAddressGender,
                  setAddressPhone,
                  setProvinceCode,
                  setCityCode,
                  setAreaCode,
                  setDetail
                }}
            />
          </div>
          <div className="right-box">
            <Tag tagState={{tag}} tagMethod={{setTag}}/>
          </div>
        </div>
        <div className="bottom-box">
          <div
              className="cancel mr-75"
              onClick={() => navigate(-1)}
          >取消
          </div>
          <Button
              className="save"
              style={{background: flag ? "#0CAF60" : "#86D7B0"}}
              loading={isLoading}
              disabled={!flag}
              onClick={handleSubmit}
          >保存</Button>
        </div>
      </AddAccountWrapper>
  )
})

export default AddAccount