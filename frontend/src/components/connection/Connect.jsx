import { useState } from "react";

// assets
import SignForm from "./SignForm";

export default function Connect() {
  const [signIn, toggle] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfVisible, setPasswordConfVisible] = useState(false);

  const handlePassVisibility = () => {
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
        <SignForm
          isSignIn={signIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordVisible={passwordVisible}
          passwordConfVisible={passwordConfVisible}
          handlePassVisibility={handlePassVisibility}
          handlePassConfVisibility={handlePassConfVisibility}
        />
      </div>

      <div
        className={`overlay-container ${
          signIn !== true
            ? " -translate-y-full transform md:-translate-x-full md:translate-y-0"
            : null
        }`}
      >
        <div
          className={`overlay ${
            signIn !== true
              ? "translate-y-2/4 transform md:translate-x-2/4 md:translate-y-0"
              : null
          }`}
        >
          <div
            className={`overlay-panel leftoverlay-panel ${
              signIn !== true
                ? " translate-y-0 transform md:translate-x-0"
                : null
            }`}
          >
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
          </div>

          <div
            className={`overlay-panel rightoverlay-panel ${
              signIn !== true
                ? " translate-y-[120%] transform md:translate-x-[20%] md:translate-y-0"
                : null
            }`}
          >
            <h2 className="font-header text-xl uppercase text-neutralLightest">
              Hello!
            </h2>
            <p className="my-6 text-sm">
              New to Origins E-sport? Create an account by clicking the button
              below.
            </p>
            <button
              type="button"
              className="connect-button connect-ghostButton"
              onClick={() => toggle(false)}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
