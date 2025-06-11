import Button from "@mui/material/Button"
import { styled, ThemeProvider, createTheme } from "@mui/material/styles"
import CircularProgress from "@mui/material/CircularProgress"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import GlobalStyles from '@mui/material/GlobalStyles';


export default function MaterialUI() {

    const myButton = () => {
        return (
            <Button sx={{ backgroundColor: 'red', color: 'white' }}>
            Haz clic
            </Button>
        );
    }

    const MyStyledButton = styled(Button) ({
        backgroundColor: 'green',
        color: 'white',
    });


    const theme = createTheme({
    palette: {
        primary: {
        main: '#ff00ff',
        },
    },
    });

    return (
        <div>
            {myButton()}
            <MyStyledButton>HAZ CLIC</MyStyledButton>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">
                    Click me
                </Button>
            </ThemeProvider>
        </div>
    )
}
