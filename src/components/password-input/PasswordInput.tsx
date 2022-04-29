import { useState } from "react";
import { passwordInputType } from "../../types";
import "./password-input.css";

function PasswordInput({
  name,
  handleInputChange,
  inputValue,
}: passwordInputType) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowPassword((prev) => !prev)}
        className={
          "password " + (showPassword ? "hide-password" : "show-password")
        }
      ></div>
      <input
        className="input"
        name={name}
        type={showPassword ? "text" : "password"}
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
}

export { PasswordInput };
