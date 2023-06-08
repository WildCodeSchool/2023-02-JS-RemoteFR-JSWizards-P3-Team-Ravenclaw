export default function Footer() {
  return (
    <footer className="flex h-20 flex-col items-center justify-center gap-1 px-12 dark:bg-neutralDarkest md:flex-row md:justify-between md:bg-neutralDarkest">
      <p className=" dark:text-neutralLightest md:text-neutralLightest">
        © 2013 - 2023 Origins. All rights reserved
      </p>
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/">
          <img src="../assets/icon/socials/instagram.svg" alt="instagram" />
        </a>
        <a href="https://twitter.com/">
          <img src="/./assets/icon/socials/twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="../assets/icon/socials/facebook.svg" alt="facebook" />
        </a>
      </div>
    </footer>
  );
}
