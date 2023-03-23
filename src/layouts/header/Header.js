import Menu from './Menu';

const Header = () => {
  return (
    <div className="bg-green">
      <div className="container bg-green">
        <div className="row py-3 d-flex align-items-center">
          <div className="col-md-3">
            <b>
              <h3>LOGO HERE</h3>
            </b>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
