import { pages } from '../../constants/pages';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className="col-md-9 d-flex justify-content-end">
      <ul className="nav nav-pills">
        {Object.keys(pages).map((page, index) => (
          <MenuItem item={pages[page]} key={`menuItem${index}`} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
