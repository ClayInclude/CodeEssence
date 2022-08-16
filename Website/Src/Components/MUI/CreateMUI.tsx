import {useColorMode} from "@docusaurus/theme-common";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";

function CreateMUI(props: {element: JSX.Element})
{
    const {colorMode: mode} = useColorMode();
    const theme = createTheme({palette: {mode}});

    return (
        <ThemeProvider theme={theme}>
            {props.element}
        </ThemeProvider>
    );
}

export default CreateMUI;
