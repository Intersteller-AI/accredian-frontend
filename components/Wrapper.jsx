"use client"
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 546,
      md: 768,
      lg: 1080,
      xl: 1280,
    },
  },
});

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Wrapper