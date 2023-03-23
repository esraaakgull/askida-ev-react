import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  return (
    <Link to={item.path} className={classNames('nav-link menuItem me-1')}>
      <li className="nav-item ">{item.title}</li>
    </Link>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object
};

MenuItem.defaultProps = {
  item: {}
};
export default MenuItem;
