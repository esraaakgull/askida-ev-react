import LoginRegisterDirection from '../../components/LoginRegisterDirection';
import SocialMediaLoginRegisterPart from '../../components/SocialMediaLoginRegisterPart';

const Signup = () => {
  return (
    <>
      <section className="bg-whitesmoke pb-4 d-flex justify-content-center">
        <div className="p-4 m-4 loginRegisterForm">
          <LoginRegisterDirection />
          <div className="tab-content d-flex justify-content-center">
            <form style={{ width: '65%' }}>
              <SocialMediaLoginRegisterPart />
              <p className="text-center">or:</p>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerName"
                  className="form-control"
                  placeholder="Please enter your name"
                />
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerSurname"
                  className="form-control"
                  placeholder="Please enter your surname"
                />
                <label className="form-label" htmlFor="registerSurname">
                  Surname
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  id="registerPhone"
                  className="form-control"
                  placeholder="Please enter your phone number"
                />
                <label className="form-label" htmlFor="registerPhone">
                  Phone number
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control"
                  placeholder="Please enter your username"
                />
                <label className="form-label" htmlFor="registerUsername">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control"
                  placeholder="Please enter your email"
                />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <textarea
                  id="registerAddress"
                  className="form-control"
                  placeholder="Please enter your address"
                />
                <label className="form-label" htmlFor="registerAddress">
                  Addres
                </label>
              </div>

              <label className="form-label">Üyelik amacınızı seçiniz:</label>
              <div className="form-outline mb-4 border rounded p-2">
                <input
                  type="radio"
                  className="me-1"
                  id="basvuru"
                  name="memberType"
                  value="Başvuru yapmak"
                />
                <label htmlFor="basvuru" className="pe-3">
                  Başvuru yapmak
                </label>
                <input type="radio" id="ilan" name="memberType" value="İlan Vermek" />
                <label htmlFor="ilan">İlan Vermek</label>
                <br />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                  placeholder="Please enter your password"
                />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control"
                  placeholder="Please enter your password again"
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              <div className="d-flex justify-content-center">
                <div className="form-check mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>
              </div>
              <div className="row p-4">
                <button type="submit" className="btn submitBtn btn-block mb-3">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
