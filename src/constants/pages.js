import Home from '../pages/home/Home';
import FAQ from '../pages/faq/FAQ';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Contact from '../pages/contact/Contact';
import DetailedAdPage from '../pages/detailedAdPage/DetailedAdPage';
import Applying from '../pages/applying/Applying';

// ICONLARA GEREK VAR MI, HEADERDA KULLANACAK MISIN ?
export const pages = {
  home: {
    title: 'Home',
    path: '/',
    element: <Home />,
    icon: 'fa-question'
  },
  faq: {
    title: 'FAQ',
    path: '/frequently-asked-questions',
    element: <FAQ />,
    icon: 'fa-question'
  },
  login: {
    title: 'Login',
    path: '/login',
    element: <Login />,
    icon: 'fa-user'
  },
  signup: {
    title: 'Signup',
    path: '/signup',
    element: <Signup />,
    icon: 'fa-user'
  },
  contact: {
    title: 'Contact',
    path: '/contact',
    element: <Contact />,
    icon: 'fa-circle-info'
  },
  detailedAd: {
    title: 'Detailed Ad',
    path: '/detailedAd',
    element: <DetailedAdPage />,
    icon: 'fa-circle-info'
  },
  applyingPage: {
    title: 'Applying Page',
    path: '/applying',
    element: <Applying />,
    icon: 'fa-pencil'
  }
};
