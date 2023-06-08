import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Button from "../components/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="h-full ">
      <div className="flex flex-col items-center gap-6">
        <img src="../assets/img/notfound/404_dark.svg" alt="error_404" />
        <p className="text-lg font-extrabold text-neutralDark dark:text-neutralLight">
          Ooops... Page Not Found!
        </p>
        <p className="text-neutral">Looks like you lost your way</p>
        <Button customCSS="btn-default" onClick={() => navigate("/Home")}>
          Take Me Home
          <BsArrowRight stroke-width="white" />
        </Button>
      </div>
    </section>
  );
}
