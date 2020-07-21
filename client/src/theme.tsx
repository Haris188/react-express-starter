import {createMuiTheme} from '@material-ui/core/styles'

const theme:object = {
   palette:{
    primary:{
        main: "#655999",
        dark: "#483C83"
    },
    secondary:{
        main: "#FEE420"
    }
   },
   typography:{
       fontFamily: "'Montserrat', sans-serif;",
   }
}

export default createMuiTheme(theme)
