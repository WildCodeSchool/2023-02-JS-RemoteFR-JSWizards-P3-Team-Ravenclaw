// Packages
import axios from "axios";
import { useEffect, useState } from "react";

// Components
import SwitchBilling from "../components/plans/SwitchBilling";
import Caroussel from "../components/plans/Caroussel";
import Footer from "../components/utilities/Footer";

export default function Pricing() {
  const [currentBilling, setCurrentBilling] = useState("Monthly");
  const [plans, setPlans] = useState([]);

  const planUrl = `http://localhost:5000/plans`;
  useEffect(() => {
    axios.get(planUrl).then((res) => setPlans(res.data));
  }, []);
  return (
    <>
      <section className="flex h-[calc(100vh-76px)] md:h-[calc(100vh-160px)]">
        <article>
          <h1>Plans & Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            malesuada, ipsum ut facilisis facilisis, justo justo volutpat purus,
            convallis malesuada erat felis at leo ridendum pecat
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <SwitchBilling
            currentBilling={currentBilling}
            onChangeBilling={(newBilling) => setCurrentBilling(newBilling)}
          />

          <Caroussel plans={plans} billing={currentBilling} />
        </article>
      </section>

      <Footer />
    </>
  );
}
