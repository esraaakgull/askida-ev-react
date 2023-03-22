import { pages } from './constants/pages';
import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {Object.keys(pages).map((page, index) => (
          <Route exact path={pages[page].path} element={pages[page].element} key={`page${index}`} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
