import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { LightMode } from "./themes/LightTheme";
import { DarkMode } from "./themes/DarkTheme";
import GlobalStyles from "./globalStyles"
import Main from "./routes/Main";
import AboutPage from "./routes/AboutPage";
import SkillsPage from "./routes/SkillsPage";
import VideosPage from "./routes/VideosPage";
import ExperiencesPage from "./routes/ExperiencesPage";

const App = () => {
  return <>
      <GlobalStyles />
      <ThemeProvider theme={LightMode}>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/about" element={<AboutPage />}/>
          <Route exact path="/skills" element={<SkillsPage />}/>
          <Route exact path="/videos" element={<VideosPage />}/>
          <Route exact path="/experiences" element={<ExperiencesPage />}/>

        </Routes>
      </ThemeProvider>
    </>
  
}

export default App;
