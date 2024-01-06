import React from 'react'
import "./style.css"
import { Box } from '@mui/material'


const SubmitButt = ({ label, onClick }) => {
  return (
    <Box className="learn-more" onClick={onClick}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{label}</span>
    </Box>
  )
}

export default SubmitButt