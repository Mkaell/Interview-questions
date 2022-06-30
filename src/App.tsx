import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CustomizedAccordions as Accordion } from "./components/Accordion/Accordion";
import { javascript_questions } from "./config/javascript";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Accordion list={javascript_questions} />
        </ThemeProvider>
    );
}

export default App;
