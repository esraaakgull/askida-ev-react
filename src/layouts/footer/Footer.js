import { pages } from '../../constants/pages';
import FooterItem from './FooterItem';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-green">
      <div className="container">
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            {Object.keys(pages).map((page, index) => (
              <FooterItem item={pages[page]} key={`FooterItem${index}`} />
            ))}
            {/*<li className="nav-item">*/}
            {/*  <a href="#" className="nav-link px-2 color-whitesmoke">*/}
            {/*    Home*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a href="#" className="nav-link px-2 color-whitesmoke">*/}
            {/*    Features*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a href="#" className="nav-link px-2 color-whitesmoke">*/}
            {/*    Pricing*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a href="#" className="nav-link px-2 color-whitesmoke ">*/}
            {/*    FAQs*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a href="#" className="nav-link px-2 color-whitesmoke">*/}
            {/*    About*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
          <p className="text-center color-whitesmoke">
            &copy; {currentYear} Askıda Ev. Tüm Hakları Saklıdır.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
