import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Button from "../components/utilities/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen justify-center md:min-h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center gap-6">
        <img
          className="md:h-72"
          src="../assets/img/notfound/error_404.svg"
          alt="error_404"
        />
        <p className="text-lg font-extrabold text-neutralDark dark:text-neutralLight md:text-2xl">
          Ooops... Page Not Found!
        </p>
        <p className="text-neutral md:text-lg">Looks like you lost your way</p>
        <Button
          customCSS="btn-default md:text-base"
          onClick={() => navigate("/")}
        >
          Take Me Home
          <BsArrowRight stroke-width="white" />
        </Button>
      </div>
    </section>
  );
}
