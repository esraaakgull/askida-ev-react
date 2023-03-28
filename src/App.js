import { pages } from './constants/pages';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import { Route, Routes } from 'react-router-dom';
// import AdminSideBar from './layouts/AdminSideBar';

// pagelere göre(admin veya user) header,footer gelecek veya gelmeyecek
// admin oturum açmışsa adminPages gelecek

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/*-----------normal user pageleri için----------*/}
      <Header />
      <Routes>
        {Object.keys(pages.userPages).map((page, index) => (
          <Route
            exact
            path={pages.userPages[page].path}
            element={pages.userPages[page].element}
            key={`userPage${index}`}
          />
        ))}
      </Routes>
      <Footer />

      {/*// ----admin pageleri için*/}
      {/*<div className="row">*/}
      {/*  <AdminSideBar />*/}
      {/*  <Routes>*/}
      {/*    {Object.keys(pages.adminPages).map((page, index) => (*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path={pages.adminPages[page].path}*/}
      {/*        element={pages.adminPages[page].element}*/}
      {/*        key={`adminPage${index}`}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </Routes>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
