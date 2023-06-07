export default function Footer() {
  return (
    <footer className="flex flex-col items-center dark:bg-neutralDarkest md:bg-neutralDarkest h-20 justify-center md:flex-row md:justify-between px-12">
      <p className=" dark:text-neutralLightest md:text-neutralLightest">
        © 2013 - 2023 Origins. All rights reserved
      </p>
      <div className="flex gap-4 items-center">
        <a href="https://www.instagram.com/">
          <img src="./assets/icon/socials/instagram.svg" alt="instagram" />
        </a>
        <a href="https://twitter.com/">
          <img src="./assets/icon/socials/twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="./assets/icon/socials/facebook.svg" alt="facebook" />
        </a>
      </div>
    </footer>
  );
}
