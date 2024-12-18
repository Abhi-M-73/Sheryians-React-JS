import React from 'react'
import './Style.css'

const ApplyCss = () => {

  const abhiCss = { fontSize: "60px", color: "white" }

  return (
    <div style={{ color: "white" }}>
      <h1 style={{ fontSize: "60px", color: "red" }}>hello sid</h1>
      <h1 style={abhiCss}>hello abhi</h1>
      <p className='paragraph'>This is paragraph</p>
    </div>
  )
}

export default ApplyCss


// BEM - Block Element Modifier
// create_form_heading
// create_foooter_copyright