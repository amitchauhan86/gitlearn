import React, { useState } from "react";
import {
  countries,
  statesByCountry,
  citiesByState,
} from "../Components/API/country";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fax, setFax] = useState(""); // New state for Fax
  const [phone, setPhone] = useState("");
  // const [error, setError] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Error handel
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    let valid = true;

    if (!firstName) {
      setFirstNameError("First name is required");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName) {
      setLastNameError("Last name is required");
      valid = false;
    } else {
      setLastNameError("");
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError("Email address is required");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!selectedCountry) {
      setCountryError("Country is required");
      valid = false;
    } else {
      setCountryError("");
    }

    if (!selectedState) {
      setStateError("State is required");
      valid = false;
    } else {
      setStateError("");
    }

    if (!selectedCity) {
      setCityError("City is required");
      valid = false;
    } else {
      setCityError("");
    }

    if (!pincode) {
      setPincodeError("Pincode is required");
      valid = false;
    } else {
      setPincodeError("");
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobileNumber) {
      setMobileNumberError("Mobile number is required");
      valid = false;
    } else if (!mobilePattern.test(mobileNumber)) {
      setMobileNumberError("Invalid mobile number");
      valid = false;
    } else {
      setMobileNumberError("");
    }

    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain at least one number, one lowercase, one uppercase letter, and at least 8 characters"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (valid) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName,
          lastName,
          email,
          country,
          password,
          state,
          city,
          pincode,
          mobileNumber,
          // Do not save password in localStorage for security reasons
        })
      );

      setFirstName("");
      setLastName("");
      setEmail("");
      setCountry("");
      setState("");
      setCity("");
      setPincode("");
      setMobileNumber("");
      setPassword("");
      setconfirmPassword("");
      setFax("");
      setPhone("");
      console.log("Form submitted successfully");
      navigate("/main")
    }
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    setSelectedState("");
    setSelectedCity("");
    setCountryError("")
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    setSelectedCity("");
    setStateError("")
    
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
    setCityError("");
  };

  return (
    <div className="center-container">
      <div
        className="container container-main signup-container "
        id="container"
      >
        <div className="form-container sign-in-container signup">
          <div className="form-handel SignUpform ">
            <h1 className="heading SignUpheading">Sign Up</h1>

            <div className="form-row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className=""
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setFirstNameError("");
                    }}
                  />
                  {firstNameError && (
                    <div className="error-message">{firstNameError}</div>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="formGroupExampleInput">Last Name</label>
                  <input
                    type="text"
                    className=""
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setLastNameError("");
                    }}
                  />
                  {lastNameError && (
                    <div className="error-message">{lastNameError}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-field">
              <label for="formGroupExampleInput">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>

            <div className="form-row">
              <div className="col-6">
                <div className="form-group">
                  <label for="formGroupExampleInput" >Country</label>
                  {/* <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setCountryError("");
                    }}
                  /> */}
                  <select
                    id="country"
                    className="form-control"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <option value="">Select</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>

                  {countryError && (
                    <div className="error-message">{countryError}</div>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="formGroupExampleInput" >State</label>
                  {/* <input
                    type="text"
                    className=""
                    placeholder="State"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setStateError("");
                    }}
                  /> */}
                   <select
                    id="state"
                    className="form-control"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="">Select</option>
                    {statesByCountry[selectedCountry]?.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {stateError && (
                    <div className="error-message">{stateError}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="col-6">
                <div className="form-group">
                  <label for="formGroupExampleInput" >City</label>
                  {/* <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      setCityError("");
                    }}
                  /> */}
                  <select
                    id="city"
                    className="form-control"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="">Select</option>
                    {citiesByState[selectedState]?.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {cityError && (
                    <div className="error-message">{cityError}</div>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="formGroupExampleInput" >Pincode</label>
                  <input
                    type="text"
                    className=""
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                      setPincodeError("");
                    }}
                  />
                  {pincodeError && (
                    <div className="error-message">{pincodeError}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-field">
              <label for="formGroupExampleInput">Mobile Number</label>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                  setMobileNumberError("");
                }}
              />
              {mobileNumberError && (
                <div className="error-message">{mobileNumberError}</div>
              )}
            </div>

            <div className="form-row">
              <div className="col-6">
                <div className="form-group">
                  <label for="formGroupExampleInput">Fax</label>
                  <input
                    type="text"
                    className=""
                    id="fax"
                    placeholder="Fax"
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <label for="formGroupExampleInput">Phone</label>
                  <input
                    type="text"
                    className=""
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-field">
              <label for="formGroupExampleInput">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              {passwordError && (
                <div className="error-message">{passwordError}</div>
              )}
            </div>

            <div className="form-field">
              <label for="formGroupExampleInput">Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                  setConfirmPasswordError("");
                }}
              />
              {confirmPasswordError && (
                <div className="error-message">{confirmPasswordError}</div>
              )}
            </div>

            <button className="Sign-in mb-2" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
