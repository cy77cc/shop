import {memo} from "react";
import {Button, message, Upload} from "antd";
import ImgCrop from "antd-img-crop";


const Avatar = memo((props) => {
  const {avatar} = props.avatarState
  const {setAvatar} = props.avatarMethod

  const onChange = (info) => {
    if (info.file.status === 'done') {
      setAvatar(info.file.response.path)
      message.success(`上传成功`)
    }
  };

  return (
      <div className="avatar">
        <div style={{marginBottom: "1.5rem"}}>客户头像</div>
        <div className="avatar-item">
          <div>
            {
              avatar === "" ? "暂无头像" : <img src={avatar} alt=""/>
            }
          </div>
        </div>
        <div className="upload-area">
          <ImgCrop rotationSlider>
            <Upload
                action="http://117.50.184.147:8080/account/upload"
                onChange={onChange}
                accept="image/png, image/jpeg, image/jpg"
            >
              <Button className="btn" type="primary">上传头像</Button>
            </Upload>
          </ImgCrop>
        </div>
      </div>
  )
})

export default Avatar