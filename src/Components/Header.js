import React from "react";
import { useNavigate } from "react-router-dom";
import LOgin_icon from "../image/login-icon.png";
const Header = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/");
  };

  return (
    <div className="header-main ">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          {/* <img src={Logo} alt="logo" height={50} width={50} className="main-logo"/> */}
          <div>
            {" "}
            <h1>Logo</h1>
          </div>
             <div className="header-name">
              <p>HOME</p>
              <p>CLOTHING</p>
              <p>ACCESSORIES</p>
             </div>
          <div className="logout-id">
            <button
              className="profile-logo"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
            >
              <img
                alt="login-icon"
                src={LOgin_icon}
                style={{ height: 35, width: 35 }}
              />
            </button>

            <div
              className="modal fade"
              id="staticBackdrop1"
              //  tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog custom-modal">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <p className="modal-title fs-5" id="staticBackdropLabel"> */}
                    <button className="profile-logo me-2">
                      <img
                        alt="login-icon"
                        src={LOgin_icon}
                        style={{ height: 30, width: 30 }}
                      />
                    </button>
                    <div className="superadmin-name">
                      <h5>{storedUser?.firstName}</h5>
                      <p>Email: {storedUser?.email}</p>
                    </div>

                    {/* </p> */}
                  </div>

                  <div className="modal-footer">
                    <button
                      onClick={handleLogout}
                      type="button"
                      className="logout-button btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <p>Partner ID: ABC1234VCSV433VB</p>
            <button
              className="logout-button"
              style={{ marginLeft: "auto" }}
              onClick={handleLogout}
            >
              Logout
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
