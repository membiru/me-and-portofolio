import { Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./themes/Theme";
import GlobalStyles from "./globalStyles"
import { AnimatePresence } from "framer-motion";

//Routes are used to render different components based on the pathname
import Main from "./routes/Main";
import AboutPage from "./routes/AboutPage";
import SkillsPage from "./routes/SkillsPage";
import VideosPage from "./routes/VideosPage";
import ExperiencesPage from "./routes/ExperiencesPage";
import BGMSound from "./components/BGMSound";

const App = () => {
  const location = useLocation();

  return <>
    <GlobalStyles />
      <ThemeProvider theme={myTheme}>
        <BGMSound />    

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/about" element={<AboutPage />}/>
            <Route exact path="/skills" element={<SkillsPage />}/>
            <Route exact path="/videos" element={<VideosPage />}/>
            <Route exact path="/experiences" element={<ExperiencesPage />}/>

          </Routes>
        </AnimatePresence>
      </ThemeProvider>

  </>
}


export default App;
