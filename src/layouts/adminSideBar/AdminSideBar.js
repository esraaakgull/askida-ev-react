import { pages } from '../../constants/pages';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '../../components/Icon';

const AdminSideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="col-md-2 bg-dark">
      <div className="position-sticky min-vh-100">
        <div className="list-group list-group-flush  pt-2">
          {/*tıklanılanı belirtmek için a classNameine active vericeksin*/}
          {Object.keys(pages.adminPages).map((page, index) => {
            return (
              <Link
                key={`sideBar${index}`}
                to={pages.adminPages[page].path}
                className={classNames(
                  'list-group-item sideBarItem bg-dark list-group-item-action pt-3 ripple',
                  { active: currentPath === pages.adminPages[page].path }
                )}>
                <Icon name={pages.adminPages[page].icon} size={18} className="pe-2" />
                <span>{pages.adminPages[page].title}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mx-3 pb-3">
        <Link to="\" className="sideBarItem">
          <Icon
            name="
            fa-arrow-right-from-bracket"
            size={18}
            className="pe-3"
          />
          <span>Çıkış Yap</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
