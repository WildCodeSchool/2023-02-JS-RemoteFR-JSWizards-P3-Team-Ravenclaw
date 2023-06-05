import { useState } from "react";
import * as Components from "../helpers/connect";

// assets
import passHide from "../../public/assets/icon/utility/eyeSlash.svg";
import passShow from "../../public/assets/icon/dashboard/watch.svg";

export default function Connect() {
  const [signIn, toggle] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfVisible, setPasswordConfVisible] = useState(false);

  const passwordType = passwordVisible ? "text" : "password";
  const passwordConfType = passwordConfVisible ? "text" : "password";

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePassConfVisibility = () => {
    setPasswordConfVisible(!passwordConfVisible);
  };

  return (
    <div className="relative flex min-h-[700px] w-[678px] max-w-full flex-col overflow-hidden bg-neutralLightest shadow-lg dark:bg-primaryDark md:min-h-[400px] md:rounded-lg">
      <div
        className={`signin-container ${
          signIn !== true
            ? "z-10 translate-y-full transform opacity-100 md:translate-x-full md:translate-y-0"
            : null
        }`}
      >
        <form className="flex h-full flex-col items-center justify-center gap-4 bg-neutralLightest px-12 text-center dark:bg-primaryDark ">
          <h2 className="font-header text-xl uppercase text-neutralDarkest dark:text-neutralLightest">
            Create Account
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
                onClick={handlePasswordVisibility}
              />
            </span>
            {/* eslint-enable */}
          </div>
          <div className="relative flex w-full items-center">
            <input
              type={passwordConfType}
              placeholder="Confirm password"
              className=" w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
              required
            />
            {/* eslint-disable */}
            <span className="absolute right-3 flex w-5">
              <img
                src={passwordConfVisible ? passHide : passShow}
                alt="show password icon"
                onClick={handlePassConfVisibility}
              />
            </span>
            {/* eslint-enable */}
          </div>

          <button type="submit" className="connect-button">
            Register
          </button>
        </form>
      </div>

      <div
        className={`signin-container ${
          signIn !== true
            ? "translate-y-full transform md:translate-x-full md:translate-y-0"
            : null
        }`}
      >
        <form className="flex h-full flex-col items-center justify-center gap-4 bg-neutralLightest px-12 text-center dark:bg-primaryDark">
          <h2 className="font-header text-xl uppercase text-neutralDarkest dark:text-neutralLightest">
            Sign In
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
            required
          />
          <div className="relative flex w-full items-center">
            <input
              type={passwordType}
              placeholder="Password"
              className="relative w-full rounded border-none bg-neutralLight p-3 outline-none dark:bg-neutralLightest"
              required
            />
            {/* eslint-disable */}
            <span className="absolute right-3 flex w-5">
              <img
                src={passwordVisible ? passHide : passShow}
                alt="show password icon"
                onClick={handlePasswordVisibility}
              />
            </span>
            {/* eslint-enable */}
          </div>
          <a href="#pass" className="text-xs text-neutral">
            Forgot your password?
          </a>
          <button type="submit" className="connect-button">
            Sign In
          </button>
        </form>
      </div>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <h2 className="font-header text-xl uppercase text-neutralLightest">
              Welcome back!
            </h2>
            <p className="my-6 text-sm">
              Already have an account? Click the button bellow.
            </p>
            <button
              type="button"
              className="connect-button connect-ghostButton"
              onClick={() => toggle(true)}
            >
              Sign In
            </button>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <h2 className="font-header text-xl uppercase text-neutralLightest">
              Hello!
            </h2>
            <p className="my-6 text-sm">
              New to Origins E-sport? Create an account by clicking the button
              bellow.
            </p>
            <button
              type="button"
              className="connect-button connect-ghostButton"
              onClick={() => toggle(false)}
            >
              Create Account
            </button>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </div>
  );
}
