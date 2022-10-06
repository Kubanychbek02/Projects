import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0d3d85'
        },
        secondary: {
            main: '#ffffff'
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
})