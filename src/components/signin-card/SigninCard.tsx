import { useState } from "react";
import { PasswordInput } from "../index";
import { Link } from "react-router-dom";
import {
  ReactChangeEvent,
  ReactMouseEvent,
  authInputType,
  errorType,
} from "../../types";
import "./signin-card.css";

function SigninCard() {
  const [signInInput, setSignInInput] = useState({
    userEmail: "",
    password: "",
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState<errorType>({} as errorType);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { userEmail, password, rememberMe } = signInInput;

  const handleInputChange = (event: ReactChangeEvent) => {
    const { name, value } = event.target;
    if (name === "rememberMe") {
      setSignInInput((prev) => ({
        ...prev,
        rememberMe: !signInInput.rememberMe,
      }));
    } else {
      setSignInInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSignInSubmit = (event: ReactMouseEvent) => {
    event.preventDefault();
    setFormErrors(validateInput(signInInput));
    setIsSubmitted(true);
  };

  const loginAsGuest = (event: ReactMouseEvent) => {
    event.preventDefault();
    setSignInInput({
      userEmail: "johndoe@gmail.com",
      password: "12345678",
      rememberMe: false,
    });
  };

  const validateInput = (inputs: authInputType) => {
    const errors: errorType = {};
    const passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!inputs.userEmail) {
      errors.userEmail = "Email is required";
    } else if (!passwordRegex.test(inputs.userEmail)) {
      errors.userEmail = "This is not a valid email format";
    }
    if (!inputs.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="sign-x-form-container">
      <form className="sign-x-form">
        <h2 className="text-center">SignIn</h2>
        <div className="input-container">
          <label>Email</label>
          <input
            name="userEmail"
            className="input"
            type="email"
            value={userEmail}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.userEmail}</p>
        </div>
        <div className="input-container">
          <label>Password</label>
          <PasswordInput
            name={"password"}
            inputValue={password}
            handleInputChange={(event) => handleInputChange(event)}
          />
          <p className="validation-msg danger">{formErrors.password}</p>
        </div>
        <div>
          <div className="sign-x-helper">
            <div>
              <label className="sign-x-label">
                <input
                  name="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleInputChange}
                />{" "}
                Remember me
              </label>
            </div>
            <Link to={"/forgot-password"} className="primary">
              Forgot password?
            </Link>
          </div>
          <button
            className="btn btn-primary sign-x-btn"
            value="submit"
            onClick={handleSignInSubmit}
          >
            Sign In
          </button>
          <button
            className="btn btn-primary-ol sign-x-btn btn-guest-login"
            value="submit"
            onClick={loginAsGuest}
          >
            Sign in with test credentials
          </button>
        </div>
        <Link className="sin-x-link" to={"/signup"}>
          Create an account &gt;
        </Link>
      </form>
    </div>
  );
}

export { SigninCard };
