import Notification from "../utilities/Notification";
import SwitchTheme from "../utilities/SwitchTheme";

function MobileSettings() {
  return (
    <nav className="z-10 flex w-full items-center justify-between md:hidden">
      <img
        src="./assets/icon/navbar/mobile/logo_mobile.svg"
        alt="logo origins-digital"
        width="48"
        height="48"
      />
      <div className="flex items-center gap-8">
        <Notification />
        <SwitchTheme isToggled onToggle={null} />
      </div>
    </nav>
  );
}

export default MobileSettings;
