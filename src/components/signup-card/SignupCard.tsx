import { useState, useEffect } from "react";
import { PasswordInput } from "../index";
import { Link } from "react-router-dom";
import {
  ReactChangeEvent,
  ReactMouseEvent,
  authInputType,
  errorType,
} from "../../types";
import { useAuth } from "../../hooks";
import { Loader, OverlayContainer } from "../";
import "../signin-card/signin-card.css";

function SignupCard() {
  const [signUpInput, setSignUpInput] = useState({
    userEmail: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  });
  const [formErrors, setFormErrors] = useState<errorType>({} as errorType);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    signUp,
    authState: { loading: isAuthLoading },
  } = useAuth();

  const { firstName, lastName, userEmail, password, confirmPassword } =
    signUpInput;

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      signUp({
        userEmail: signUpInput.userEmail,
        password: signUpInput.password,
        firstName: signUpInput.firstName,
        lastName: signUpInput.lastName,
      });
    }
  }, [formErrors]);

  const handleInputChange = (event: ReactChangeEvent) => {
    const { name, value } = event.target;
    if (name === "termsAndConditions") {
      setSignUpInput((prev) => ({
        ...prev,
        termsAndConditions: !signUpInput.termsAndConditions,
      }));
    } else {
      setSignUpInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSignUpSubmit = (event: ReactMouseEvent) => {
    event.preventDefault();
    setFormErrors(validateInput(signUpInput));
    setIsSubmitted(true);
  };

  const validateInput = (inputs: authInputType) => {
    const errors: errorType = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!inputs.firstName) {
      errors.firstName = "Firstname is required";
    }
    if (!inputs.lastName) {
      errors.lastName = "Lastname is required";
    }
    if (!inputs.userEmail) {
      errors.userEmail = "Email is required";
    } else if (!emailRegex.test(inputs.userEmail)) {
      errors.userEmail = "This is not a valid email format";
    }
    if (!inputs.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(inputs.password)) {
      errors.password =
        "Password should contain atleast 1 number, 1 lower case, 1 uppercase and 1 special character";
    }
    if (inputs.confirmPassword !== inputs.password) {
      errors.confirmPassword = "Passwords don't match";
    }
    if (!inputs.termsAndConditions) {
      errors.termsAndConditions = "Must agree to terms and conditions";
    }
    return errors;
  };

  return (
    <div className="sign-x-form-container">
      {isAuthLoading && (
        <OverlayContainer>
          <Loader isFullScreen={false} />
        </OverlayContainer>
      )}
      <form className="sign-x-form">
        <h2 className="text-center">SignUp</h2>
        <div className="input-container">
          <label>Email</label>
          <input
            className="input"
            name="userEmail"
            type="email"
            value={userEmail}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.userEmail}</p>
        </div>
        <div className="input-container">
          <label>First Name</label>
          <input
            className="input"
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.firstName}</p>
        </div>
        <div className="input-container">
          <label>Last Name</label>
          <input
            className="input"
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.lastName}</p>
        </div>
        <div className="input-container">
          <label>Password</label>
          <PasswordInput
            name="password"
            inputValue={password}
            handleInputChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.password}</p>
        </div>
        <div className="input-container">
          <label>Confirm Password</label>
          <PasswordInput
            name={"confirmPassword"}
            inputValue={confirmPassword}
            handleInputChange={handleInputChange}
          />
          <p className="validation-msg danger">{formErrors.confirmPassword}</p>
        </div>
        <div>
          <div>
            <label className="sign-x-label t-and-c-container">
              <input
                type="checkbox"
                name="termsAndConditions"
                checked={signUpInput.termsAndConditions}
                onChange={handleInputChange}
              />
              I agree to all terms &amp; conditions
            </label>
            <p className="validation-msg danger">
              {formErrors.termsAndConditions}
            </p>
          </div>
          <button
            className={
              "btn btn-primary sign-x-btn " +
              (isAuthLoading ? "cursor-not-allowed" : "")
            }
            value="submit"
            onClick={handleSignUpSubmit}
            disabled={isAuthLoading}
          >
            Sign UP
          </button>
        </div>
        <Link className="sin-x-link" to={"/signin"}>
          Already have an account &gt;
        </Link>
      </form>
    </div>
  );
}

export { SignupCard };
