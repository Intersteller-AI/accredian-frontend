import React from 'react'
import "./styles.css"
import { Box } from '@mui/material'

const HoverCard2 = () => {
  return (
    <Box sx={{
      position: "absolute",
      top: "27%",
      right: "38%"
    }} className='card2'>
      <Box className="card">SEE MORE</Box>
    </Box>
  )
}

export default HoverCard2