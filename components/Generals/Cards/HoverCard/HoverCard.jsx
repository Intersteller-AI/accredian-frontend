import React from 'react'
import "./styles.css"
import { Box, Typography } from '@mui/material'

const HoverCard = () => {
  return (
    <Box sx={{
      position: "absolute",
      top: "10%",
      right: "10%"
    }}>
      <Box className="container noselect">
        <Box className="canvas">
          <Box className="tracker tr-1"></Box>
          <Box className="tracker tr-2"></Box>
          <Box className="tracker tr-3"></Box>
          <Box className="tracker tr-4"></Box>
          <Box className="tracker tr-5"></Box>
          <Box className="tracker tr-6"></Box>
          <Box className="tracker tr-7"></Box>
          <Box className="tracker tr-8"></Box>
          <Box className="tracker tr-9"></Box>
          <Box className="tracker tr-10"></Box>
          <Box className="tracker tr-11"></Box>
          <Box className="tracker tr-12"></Box>
          <Box className="tracker tr-13"></Box>
          <Box className="tracker tr-14"></Box>
          <Box className="tracker tr-15"></Box>
          <Box className="tracker tr-16"></Box>
          <Box className="tracker tr-17"></Box>
          <Box className="tracker tr-18"></Box>
          <Box className="tracker tr-19"></Box>
          <Box className="tracker tr-20"></Box>
          <Box className="tracker tr-21"></Box>
          <Box className="tracker tr-22"></Box>
          <Box className="tracker tr-23"></Box>
          <Box className="tracker tr-24"></Box>
          <Box className="tracker tr-25"></Box>
          <Box id="card">
            <Typography id="prompt">Our Vision</Typography>
            <Box className="title">Grooming Data & Product <br /> Leaders of Tomorrow</Box>
            {/* <Box className="subtitle">
              mouse hover tracker
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HoverCard