// Packages
import { useState } from "react";
import useAxios from "../hooks/useAxios";

// Components
import SwitchBilling from "../components/plans/SwitchBilling";
import Caroussel from "../components/plans/Caroussel";
import Footer from "../components/utilities/Footer";

export default function Pricing() {
  const [currentBilling, setCurrentBilling] = useState("Monthly");

  const { data: plans } = useAxios(`/plans`);

  return (
    <>
      <section className="flex h-[calc(100vh-76px)] md:h-[calc(100vh-160px)]">
        <article>
          <h1>Plans & Pricing</h1>
          <p>
            Découvrez nos plans et tarifs pour bénéficier d'une offre adaptée à
            vos besoins. Choisissez parmi nos trois abonnements : Starter,
            Standard et Premium, pour trouver celui qui correspond parfaitement
            à vos attentes.
          </p>
        </article>

        <article className="flex flex-col items-center gap-6">
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
