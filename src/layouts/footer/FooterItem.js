import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterItem = ({ item }) => {
  return (
    <Link to={item.path} className={classNames('nav-link px-2 color-whitesmoke')}>
      <li className="nav-item">{item.title}</li>
    </Link>
  );
};

FooterItem.propTypes = {
  item: PropTypes.object
};

FooterItem.defaultProps = {
  item: {}
};
export default FooterItem;
