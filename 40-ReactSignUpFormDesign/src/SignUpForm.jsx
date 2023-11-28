import React from "react";
import { Button } from "antd";
import googleLogo from "./assets/images/googleLogo.png";
import GooglePlayBtn from "./components/GooglePlayBtn";
import AppStoreBtn from "./components/AppStoreBtn";
import heroImg from "./assets/images/heroImg.png";
// import "../assets/style/grid.css";
// import "../assets/style/style.scss";
import "./style.scss";

const SignUpForm = () => {
  return (
    <>
      <div className="login-signup">
        <div className="container">
          <div className="left">
            <h1>Social media shared today, tomorrow or by location</h1>
            <div className="circle">
              <div className="img1 img">
                <img src={heroImg} alt="" style={{ height: "430px" }} />
              </div>
              <div className="img2 img">
                <img src={heroImg} alt="" style={{ height: "340px" }} />
              </div>
              <div className="img3 img">
                <img src={heroImg} alt="" style={{ height: "340px" }} />
              </div>
            </div>

            <div className="points">
              <div className="point1"></div>
              <div className="point2">
                <div className="point-white"></div>
              </div>
              <div className="point3"></div>
            </div>
          </div>
          <div className="right">
            <div className="logo">
              <div className="logo-img"></div>
              <div className="logo-name">Capzul</div>
            </div>
            <div className="create-accout">
              <h1>Create account</h1>
              <p>For business, band or celebrity.</p>
            </div>
            <div className="form">
              <div className="form-left">
                <div className="first-name ">
                  <h6>First name</h6>
                  <input type="text" className="input" />
                </div>
                <div className="email">
                  <h6>Email or phone number</h6>
                  <input type="text" className="input" />
                </div>
                <div className="password">
                  <h6>Password</h6>
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="form-right">
                <div className="last-name">
                  <h6>Last name</h6>
                  <input type="text" className="input" />
                </div>
                <div className="date">
                  <h6>
                    Date of birth <span>(MM/DD/YY)</span>
                  </h6>
                  <input type="text" className="input" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M4.16596 7.46324H5.34196V8.63924H4.16596V7.46324ZM12.3979 3.93525V12.1672C12.3979 12.4791 12.274 12.7782 12.0535 12.9988C11.833 13.2193 11.5338 13.3432 11.2219 13.3432H2.98996C2.33728 13.3432 1.81396 12.814 1.81396 12.1672V3.93525C1.81396 3.62335 1.93786 3.32423 2.15841 3.10369C2.37895 2.88315 2.67807 2.75925 2.98996 2.75925H3.57796V1.58325H4.75396V2.75925H9.45795V1.58325H10.6339V2.75925H11.2219C11.5338 2.75925 11.833 2.88315 12.0535 3.10369C12.274 3.32423 12.3979 3.62335 12.3979 3.93525ZM2.98996 5.11124H11.2219V3.93525H2.98996V5.11124ZM11.2219 12.1672V6.28724H2.98996V12.1672H11.2219ZM8.86995 8.63924V7.46324H10.0459V8.63924H8.86995ZM6.51795 8.63924V7.46324H7.69395V8.63924H6.51795ZM4.16596 9.81523H5.34196V10.9912H4.16596V9.81523ZM8.86995 10.9912V9.81523H10.0459V10.9912H8.86995ZM6.51795 10.9912V9.81523H7.69395V10.9912H6.51795Z"
                      fill="#2D3748"
                      fill-opacity="0.32"
                    />
                  </svg>
                </div>
                <div className="confirm-password">
                  <h6>Confirm password</h6>
                  <input type="text" className="input" />
                </div>
              </div>
            </div>
            <div className="rememberMe-forgot">
              <div className="input">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p>Forgot password?</p>
            </div>
            <div className="agree-terms">
              <input type="checkbox" />
              <p>
                I agree to all the <span>Terms</span> and
                <span> Privacy policy</span>
              </p>
            </div>
            <div className="buttons">
              <Button type="primary" className="create-account">
                Create Account
              </Button>
              <div className="google-btn">
                <Button type="primary" className="sign-in-google">
                  Sign-in with google
                </Button>
                <div className="img">
                  <img src={googleLogo} alt="google-logo" />
                </div>
              </div>
            </div>
            <div className="log-in">
              <p>
                Don’t have an account? <span>Log In</span>
              </p>
            </div>
            <div className="contact">
              <GooglePlayBtn />
              <AppStoreBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
