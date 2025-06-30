import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ROUTES } from './utils/constants';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import NowShowing from './pages/movie/NowShowing';
import ComingSoon from './pages/movie/ComingSoon';
import News from './pages/movie/News';

// Global style untuk seluruh aplikasi
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #121212;
    color: #fff;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul, ol {
    list-style: none;
  }
  
  button, input, select, textarea {
    outline: none;
  }
`;

function App() {
  return (
    <BrowserRouter>
      {/* Global style untuk seluruh aplikasi */}
      <GlobalStyle />
      {/* Navbar di bagian atas */}
      <Navbar />
      {/* Routing halaman */}
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.NOW_SHOWING} element={<NowShowing />} />
        <Route path={ROUTES.COMING_SOON} element={<ComingSoon />} />
        <Route path={ROUTES.NEWS} element={<News />} />
      </Routes>
      {/* Footer di bagian bawah */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;