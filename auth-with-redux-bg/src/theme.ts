import {createTheme} from '@mui/material'
import {blue} from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: '#111827FF',
    }
  },
  typography: {
    fontFamily: [
      'Inter', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji"].join(','),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)',
          padding: '24px'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%'
        }
      }
    }
  }
})
