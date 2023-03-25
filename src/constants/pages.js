import Home from '../pages/home/Home';
import FAQ from '../pages/faq/FAQ';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Contact from '../pages/contact/Contact';
import DetailedAdPage from '../pages/detailedAdPage/DetailedAdPage';
import ShareAd from '../pages/shareAd/ShareAd';
import AdminLogin from '../pages/adminPages/login/AdminLogin';
import Dashboard from '../pages/adminPages/Dashboard/Dashboard';
import User from '../pages/adminPages/user/User';
import Adds from '../pages/adminPages/Adds/Adds';
import MatchAdUser from '../pages/adminPages/matchAdUser/MatchAdUser';
// ICONLARA GEREK VAR MI, HEADERDA KULLANACAK MISIN ?
// Pageleri düzenle, user, admin, common
export const pages = {
  userPages: {
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
    shareAd: {
      title: 'Share Ad',
      path: '/shareAd',
      element: <ShareAd />,
      icon: 'fa-pencil'
    },
    adminLogin: {
      title: 'Admin Login',
      path: '/adminLogin',
      element: <AdminLogin />,
      icon: 'fa-home'
    }
  },
  adminPages: {
    home: {
      title: 'Dashboard',
      path: '/',
      element: <Dashboard />,
      icon: 'fa-gauge'
    },
    user: {
      title: 'Üye İşlemleri',
      path: '/user',
      element: <User />,
      icon: 'fa-users'
    },
    ads: {
      title: 'İlanlar',
      path: '/adds',
      element: <Adds />,
      icon: 'fa-house'
    },
    matchAdUser: {
      title: 'Sahiplendir',
      path: '/match',
      element: <MatchAdUser />,
      icon: 'fa-arrows-up-down-left-right'
    }
  }
};
