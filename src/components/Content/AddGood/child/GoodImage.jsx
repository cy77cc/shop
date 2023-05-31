import {memo, useEffect, useState} from "react";
import {Upload} from "antd";
import ImgCrop from "antd-img-crop";
import {PictureOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

function UploadContent() {
  return (
      <div className="upload-content">
        <div className="icon"><PictureOutlined/></div>
        <div className="text">将图像拖到此处，或选择"<span style={{color: "#00B357"}}>点击本地上传</span>"</div>
      </div>
  )
}

const GoodImage = memo((props) => {
  const [id, setId] = useState(-1)
  const [fileList, setFileList] = useState([])

  const {setFiles} = props.fileMethod

  const {admin} = useSelector((state) => {
    return {
      admin: state.admin
    }
  })

  useEffect(() => {
    let {id} = admin
    setId(id)
  }, [admin])


  const handleChange = ({fileList: newFileList}) => {
    setFileList(newFileList);
    let newArr = []
    newFileList.map((v, i) => {
      if (v.status === 'done') {
        let res = v.response
        let data = {
          path: "",
          default: 0
        }
        data.path = res.path
        newArr.push(data)
      }
      return ""
    })
    setFiles(newArr)
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
      <div className="good-image">
        <div className="title">商品图片</div>
        <div className="tip">选择产品照片或在此处一次拖放，最多5张照片，包括至少2张吸引人的照片，使产品更吸引客户</div>
        <div className="upload-images">
          <ImgCrop rotationSlider>
            <Upload
                action={`http://117.50.184.147:8080/admin/upload?admin_id=${id}`}
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                onDrop={handleChange}
                onPreview={onPreview}
            >
              {fileList.length < 5 && <UploadContent/>}
            </Upload>
          </ImgCrop>
        </div>
        <div className="tip">图像格式为jpg、jpeg、png，最小尺寸为300*300像素(对于最佳图像，最小尺寸应该为700*700像素)</div>
      </div>
  )
})

export default GoodImage