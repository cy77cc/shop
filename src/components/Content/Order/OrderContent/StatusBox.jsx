import {memo} from "react";

const StatusBox = memo((props) => {
  return (
      <div style={{
        width: "4.31rem",
        height: "2rem",
        background: props?.data.color,
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: props?.data.fontColor,
        fontSize: "0.75rem"
      }}>
        {props?.data.text}
      </div>
  )
})

export default StatusBox