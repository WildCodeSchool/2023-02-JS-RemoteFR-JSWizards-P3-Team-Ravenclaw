// Packages
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

// Custom Hooks
import useUserContext from "../../hooks/useUserContext";
import useAuth from "../../hooks/useAuth";

// Assets
import passHide from "../../../public/assets/icon/utility/eyeSlash.svg";
import passShow from "../../../public/assets/icon/dashboard/watch.svg";

export default function SignForm({ isSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfVisible, setPasswordConfVisible] = useState(false);

  const { setAccount } = useUserContext();
  const { setUserToLocalStorage, loginUser, registerUser } = useAuth();

  const passwordType = passwordVisible ? "text" : "password";
  const passwordConfType = passwordConfVisible ? "text" : "password";

  const TOAST_DEFAULT_CONFIG = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        // request sign-in from database
        const { data: user } = await loginUser({
          email,
          password,
        });
        // update local storage (prevent page refresh)
        setUserToLocalStorage(user);
        // update user context
        setAccount(user);
      }
      if (!isSignIn) {
        // make sure password and confirmation password match
        if (password !== confirmationPassword) {
          toast.warn(`Passwords do not match!`, TOAST_DEFAULT_CONFIG);
        } else {
          // register new user to database
          const res = await registerUser({
            email,
            password,
          });

          if (res?.status === 201) {
            toast.success("Account created. Welcome to Origins e-Sport!", {
              ...TOAST_DEFAULT_CONFIG,
              autoClose: 2000,
            });
            // re-direct to Sign In after waiting for toastify
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }

          // account with same email already existing
          if (res?.status === 200) {
            toast.warning(`${res.data}...`, TOAST_DEFAULT_CONFIG);
          }
        }
      }
    } catch (err) {
      console.error(err);
      const errorMessage = isSignIn ? err?.response?.data : err.message;
      toast.warn(`${errorMessage}`, TOAST_DEFAULT_CONFIG);
    }
  };

  return (
    <form
      className="flex h-full flex-col items-center justify-center gap-4 bg-neutralLightest px-12 text-center text-neutralDarkest dark:bg-primaryDark"
      onSubmit={handleSubmit}
    >
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
        pattern="[A-z0-9._%+\-]+@[A-z0-9.\-]+\.[A-z]{2,4}$"
        required
        title="example@test.com"
        autoComplete="on"
      />
      <div className="relative flex w-full items-center">
        <input
          type={passwordType}
          placeholder="Password"
          className=" w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="[\w]{4,12}"
          required
          title="4 to 12 characters"
        />
        {/* eslint-disable */}
        <span className="absolute right-3 flex w-5">
          <img
            src={passwordVisible ? passHide : passShow}
            alt="show password icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </span>
      </div>
      {!isSignIn && (
        <div className="relative flex w-full items-center">
          <input
            type={passwordConfType}
            placeholder="Confirm password"
            className=" w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassword(e.target.value)}
            pattern="[\w]{4,12}"
            required
          />
          <span className="absolute right-3 flex w-5">
            <img
              src={passwordConfVisible ? passHide : passShow}
              alt="show password icon"
              onClick={() => setPasswordConfVisible(!passwordConfVisible)}
            />
          </span>
          {/* eslint-enable */}
        </div>
      )}
      <button type="submit" className="connect-button">
        {isSignIn ? "Sign In" : "Register"}
      </button>
    </form>
  );
}

SignForm.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
};
