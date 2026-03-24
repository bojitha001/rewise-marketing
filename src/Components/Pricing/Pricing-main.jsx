import Footer from "../Footer";
import PricingComparePlans from "./Pricing-compare-plans";
import PricingDescription from "./Pricing-description";
import PricingHome from "./Pricing-home";
import PricingPlans from "./Pricing-plans";

const PricingMain = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-blue-50">
      <section className="pt-24 pb-16 flex justify-center">
        <PricingHome />
      </section>
      <section className="py-16 flex justify-center">
        <PricingPlans />
      </section>
      <section className="py-16 flex justify-center">
        <PricingComparePlans />
      </section>
      <section>
        <PricingDescription />
      </section>
    </div>
  );
};

export default PricingMain;