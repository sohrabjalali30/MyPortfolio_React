import { createTheme } from "@mui/material"

export const theme = createTheme({
      typography: {
      fontFamily:"Roboto,Vazir,Arial",
      fontSize:16
    },
    palette:{
        mode:"dark",
        background:{
            main:"#294B29",
            paper:"#B6C4B6",
            default:"#B6C4B6"
        },
        primary:{
        main:"#789461",
       
      
        },
        secondary:{
        main:"#50623A"
        },
        Foregrand:{
          main:"#DBE7C9"
        },
        ItemColor:{
          main:"#8F43EE"
        },
        BackColor: {
          main:"#F0EB8D"
        },
        h3: {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
        fontSize: '1.5rem',
        }
    }}
  })
