import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4'
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif'
  }
})

export default theme