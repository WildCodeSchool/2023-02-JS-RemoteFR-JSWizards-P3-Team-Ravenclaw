// Packages
import { useState } from "react";

// Components
import SwitchBilling from "../components/plans/SwitchBilling";
import Caroussel from "../components/plans/Caroussel";
import Footer from "../components/utilities/Footer";

// Data
import plans from "../data/plans.json";

export default function Pricing() {
  const [currentBilling, setCurrentBilling] = useState("Monthly");

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
