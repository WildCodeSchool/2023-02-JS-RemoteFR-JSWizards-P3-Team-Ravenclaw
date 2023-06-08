import { useState } from "react";

export default function ConnectionNavItem() {
  const logged = useState(false); // devrait être const [logged, setLogged] mais linter..
  // const changer = () => {
  // setLogged("hey");d
  // };d
  if (logged === true) {
    return <p>image une fois connecté</p>;
  }
  return (
    <svg
      className="connection"
      width="48"
      height="48"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
        fill="url(#paint0_linear_89_1823)"
      />
      <path
        d="M18.6667 48C18.6667 48 16 48 16 45.3333C16 42.6667 18.6667 34.6667 32 34.6667C45.3333 34.6667 48 42.6667 48 45.3333C48 48 45.3333 48 45.3333 48H18.6667ZM32 32C34.1217 32 36.1566 31.1571 37.6569 29.6569C39.1571 28.1566 40 26.1217 40 24C40 21.8783 39.1571 19.8434 37.6569 18.3431C36.1566 16.8429 34.1217 16 32 16C29.8783 16 27.8434 16.8429 26.3431 18.3431C24.8429 19.8434 24 21.8783 24 24C24 26.1217 24.8429 28.1566 26.3431 29.6569C27.8434 31.1571 29.8783 32 32 32Z"
        fill="#F5F5F5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_89_1823"
          x1="32"
          y1="0"
          x2="32"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9969C4" />
          <stop offset="1" stopColor="#4E5DB6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
