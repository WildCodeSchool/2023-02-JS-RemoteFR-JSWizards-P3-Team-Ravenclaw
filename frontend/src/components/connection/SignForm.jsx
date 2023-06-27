// Packages
import PropTypes from "prop-types";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";

// Assets
import passHide from "../../../public/assets/icon/utility/eyeSlash.svg";
import passShow from "../../../public/assets/icon/dashboard/watch.svg";

export default function SignForm({
  isSignIn,
  email,
  setEmail,
  password,
  setPassword,
  passwordVisible,
  passwordConfVisible,
  handlePassVisibility,
  handlePassConfVisibility,
}) {
  const passwordType = passwordVisible ? "text" : "password";
  const passwordConfType = passwordConfVisible ? "text" : "password";
  const { setLoggedIn } = useContext(LoginContext);

  return (
    <form className="flex h-full flex-col items-center justify-center gap-4 bg-neutralLightest px-12 text-center dark:bg-primaryDark ">
      <h2 className="font-header text-xl uppercase text-neutralDarkest dark:text-neutralLightest">
        {isSignIn ? "Sign In" : "Create Account"}
      </h2>
      <input
        type="email"
        placeholder="Email"
        className=" w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
        id="email-login"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        pattern=".{5,25}"
        required
        title="5 to 25 characters"
      />
      <div className="relative flex w-full items-center">
        <input
          type={passwordType}
          placeholder="Password"
          className=" w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern=".{4,12}"
          required
          title="4 to 12 characters"
        />
        {/* eslint-disable */}
        <span className="absolute right-3 flex w-5">
          <img
            src={passwordVisible ? passHide : passShow}
            alt="show password icon"
            onClick={handlePassVisibility}
          />
        </span>
      </div>
      {!isSignIn && (
        <div className="relative flex w-full items-center">
          <input
            type={passwordConfType}
            placeholder="Confirm password"
            className=" w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
            required
          />
          <span className="absolute right-3 flex w-5">
            <img
              src={passwordConfVisible ? passHide : passShow}
              alt="show password icon"
              onClick={handlePassConfVisibility}
            />
          </span>
          {/* eslint-enable */}
        </div>
      )}
      <button
        type="submit"
        className="connect-button"
        onClick={() => setLoggedIn(true)}
      >
        {isSignIn ? "Sign In" : "Register"}
      </button>
    </form>
  );
}

SignForm.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  passwordVisible: PropTypes.bool.isRequired,
  passwordConfVisible: PropTypes.bool.isRequired,
  handlePassVisibility: PropTypes.func.isRequired,
  handlePassConfVisibility: PropTypes.func.isRequired,
};
