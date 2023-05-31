import {memo, useEffect, useState} from "react";
import ModifyProfileWrapper from "./style";
import {Button, Input, message, Upload} from "antd";
import {useSelector} from "react-redux";
import fetchData from "../../../utils/net";
import SHA256 from "crypto-js/sha256";
import {useNavigate} from "react-router-dom";

const initData = {
  avatar: "",
  name: "",
  username: "",
  email: "",
  phone: "",
  province_code: "",
  city_code: "",
  area_code: "",
  detail: ""
}

const ModifyProfile = memo(() => {
  const [adminInfo, setAdminInfo] = useState(initData)
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([])
  const [areas, setAreas] = useState([])
  // 创建一个旧数据用于对比
  const [oldData, setOldData] = useState({})
  const [flag, setFlag] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const {admin} = useSelector((state) => {
    return {
      admin: state.admin
    }
  })
  const {id, avatar} = admin
  const [uploadUrl, setUploadUrl] = useState(avatar);
  useEffect(() => {
    setUploadUrl(avatar)
  }, [avatar])

  function uploadFile(info) {
    if (info.file.status === 'done') {
      setUploadUrl(info.file.response.path)
      let newObj = adminInfo
      adminInfo.avatar = info.file.response.path
      setAdminInfo({...newObj})
      message.success("成功")
    }
  }

  function handleName(e) {
    let newObj = adminInfo
    adminInfo.name = e.target.value
    setAdminInfo({...newObj})
  }

  function handleUsername(e) {
    let newObj = adminInfo
    adminInfo.username = e.target.value
    setAdminInfo({...newObj})
  }

  function handleEmail(e) {
    let newObj = adminInfo
    adminInfo.email = e.target.value
    setAdminInfo({...newObj})
  }

  function handlePhone(e) {
    let newObj = adminInfo
    adminInfo.Phone = e.target.value
    setAdminInfo({...newObj})
  }

  function handleProvince(e) {
    let newObj = adminInfo
    adminInfo.province_code = Number(e.target.value)
    setAdminInfo({...newObj})
  }

  function handleCity(e) {
    let newObj = adminInfo
    adminInfo.city_code = Number(e.target.value)
    setAdminInfo({...newObj})
  }

  function handleArea(e) {
    let newObj = adminInfo
    adminInfo.area_code = Number(e.target.value)
    setAdminInfo({...newObj})
  }

  function handleDetail(e) {
    let newObj = adminInfo
    adminInfo.detail = e.target.value
    setAdminInfo({...newObj})
  }

  function saveChange() {
    setIsLoading(true)
    fetchData("put", adminInfo, `update/admin/info?admin_id=${id}`).then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setIsLoading(false)
        message.success("修改成功")
        navigate("/modify/profile")
      }
    })
  }


  useEffect(() => {
    fetchData("get",
        {},
        "provinces").then(res => {
      let data = res.data
      if (data.status !== 1) {
        message.error(data.message)
      } else {
        setProvinces(data.provinces)
      }
    })

    if (adminInfo.province_code) {
      fetchData("get",
          {},
          `cities?province_code=${adminInfo.province_code}`).then(res => {
        let data = res.data
        if (data.status !== 1) {
          message.error(data.message)
        } else {
          setCities(data.cities)
        }
      })
    }

    if (adminInfo.province_code && adminInfo.city_code) {
      fetchData("get",
          {},
          `areas?province_code=${adminInfo.province_code}&city_code=${adminInfo.city_code}`).then(res => {
        let data = res.data
        if (data.status !== 1) {
          message.error(data.message)
        } else {
          setAreas(data.areas)
        }
      })
    }
  }, [adminInfo.city_code, adminInfo.province_code])

  useEffect(() => {
    if (Number(id) > 0) {
      fetchData("get", {}, `admin/info?admin_id=${id}`)
          .then(res => {
            let data = res.data
            if (data.status !== 1) {
              message.error(data.message)
            } else {
              setAdminInfo(data.info)
              let newObj = data.info
              setOldData({...newObj})
            }
          })
    }
  }, [id])

  useEffect(() => {
    if (oldData.name !== adminInfo.name) setFlag(true)
    else if (oldData.province_code !== adminInfo.province_code) setFlag(true)
    else if (oldData.city_code !== adminInfo.city_code) setFlag(true)
    else if (oldData.area_code !== adminInfo.area_code) setFlag(true)
    else if (oldData.detail !== adminInfo.detail) setFlag(true)
    else if (oldData.email !== adminInfo.email) setFlag(true)
    else if (oldData.username !== adminInfo.username) setFlag(true)
    else if (oldData.phone !== adminInfo.phone) setFlag(true)
    else if (oldData.avatar !== adminInfo.avatar) setFlag(true)
    else
    setFlag(false)
  }, [adminInfo.area_code, adminInfo.avatar, adminInfo.city_code, adminInfo.detail, adminInfo.email, adminInfo.name, adminInfo.phone, adminInfo.province_code, adminInfo.username, oldData.area_code, oldData.avatar, oldData.city_code, oldData.detail, oldData.email, oldData.name, oldData.phone, oldData.province_code, oldData.username])


  return (
      <ModifyProfileWrapper>
        <div className="modify-content">
          <div className="person-info">个人信息</div>
          <div className="modify-avatar">
            <div className="avatar">
              {uploadUrl === "" ? "暂无数据" : <img src={uploadUrl} alt=""/>}
            </div>
            <div className="upload">
              <div className="hint">只支持JPG、JPEG或PNG格式的图片</div>
              <div>
                <Upload
                    action={`http://117.50.184.147:8080/admin/upload?admin_id=${id}`}
                    onChange={uploadFile}
                    accept="image/png, image/jpeg, image/jpg"
                >
                  <Button className="btn">更改头像</Button>
                </Upload>
              </div>
            </div>
          </div>
          <div className="name-username">
            <div className="name">
              <div className="text">姓名</div>
              <div>
                <Input
                    className="clear-input"
                    value={adminInfo.name}
                    onChange={handleName}
                />
              </div>
            </div>
            <div className="username">
              <div className="text">用户名</div>
              <div>
                <Input
                    className="clear-input"
                    value={adminInfo.username}
                    onChange={handleUsername}
                />
              </div>
            </div>
          </div>
          <div className="email-phone">
            <div className="email">
              <div className="text">Email</div>
              <div>
                <Input
                    className="clear-input"
                    value={adminInfo.email}
                    onChange={handleEmail}
                />
              </div>
            </div>
            <div className="phone">
              <div className="text">手机号</div>
              <div>
                <Input
                    className="clear-input"
                    value={adminInfo.phone}
                    onChange={handlePhone}
                />
              </div>
            </div>
          </div>
          <div className="sell-address">经营地址</div>
          <div className="address">
            <div className="province">
              <div className="text">省/直辖市</div>
              <div>
                <select
                    className="clear-input"
                    value={adminInfo.province_code}
                    onChange={handleProvince}
                >
                  {provinces?.map((v, i) => {
                    return <option key={SHA256(i + v.name + "admin").toString()} value={v.code}>{v.name}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="city">
              <div className="text">市/市区</div>
              <div>
                <select
                    className="clear-input"
                    value={adminInfo.city_code}
                    onChange={handleCity}
                >
                  {cities?.map((v, i) => {
                    return <option key={SHA256(i + v.name + "admin").toString()} value={v.code}>{v.name}</option>
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="detail-code">
            <div className="area">
              <div className="text">县</div>
              <div>
                <select
                    className="clear-input"
                    value={adminInfo.area_code}
                    onChange={handleArea}
                >
                  {areas?.map((v, i) => {
                    return <option key={SHA256(i + v.name + "admin").toString()} value={v.code}>{v.name}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="detail">
              <div className="text">详细地址</div>
              <div>
                <Input
                    className="clear-input"
                    value={adminInfo.detail}
                    onChange={handleDetail}
                />
              </div>
            </div>
          </div>
          <div className="save">
            <Button
                className="btn"
                style={{background: flag ? "#0CAF60" : "#86D7B0"}}
                disabled={!flag}
                loading={isLoading && flag}
                onClick={saveChange}
            >保存修改</Button>
          </div>
        </div>
      </ModifyProfileWrapper>
  )
})

export default ModifyProfile