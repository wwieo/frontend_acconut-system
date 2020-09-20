import React from "react"

const style = {
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor:"rgba(255,255,255,0.1)",
  display: "inline-block",
  width:'50%',
  color: "rgba(255, 255, 255, 0.7)",
  textAlign: "center",
  fontSize:'150%'
}

const activeStyle = {
  ...style,
  color: "white",
  backgroundColor: "#0066cc"

}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab
