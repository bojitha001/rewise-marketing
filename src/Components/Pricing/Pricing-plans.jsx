import { useState } from "react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    features: ["Basic access", "Limited usage", "Community support"],
  },
  {
    name: "Pro",
    monthly: 10,
    annual: 100,
    features: ["All features", "Higher limits", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: 30,
    annual: 300,
    features: ["Unlimited access", "Dedicated support", "Custom features"],
  },
];

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-6 mb-10 text-lg">
            <span
                onClick={() => setIsAnnual(false)}
                className={`cursor-pointer transition ${
                !isAnnual
                    ? "font-semibold text-[#0040c1] underline underline-offset-15"
                    : "text-gray-400 hover:text-black"
                }`}
            >
                Monthly
            </span>

            <span
                onClick={() => setIsAnnual(true)}
                className={`cursor-pointer transition ${
                isAnnual
                    ? "font-semibold text-[#0040c1] underline underline-offset-15"
                    : "text-gray-400 hover:text-black"
                }`}
            >
                Annual
            </span>
        </div>

      <div className="flex gap-6 flex-wrap justify-center">
        {plans.map((plan, index) => {
          const price = isAnnual ? plan.annual : plan.monthly;

          return (
            <div
              key={index}
              className={`w-80 p-6 rounded-2xl border shadow-sm transition hover:shadow-lg ${
                plan.highlighted
                  ? "border-blue-600 scale-105"
                  : "border-gray-200"
              }`}
            >
              <h3 className="flex justify-between items-center text-2xl font-semibold mb-2">
                {plan.name}
                {plan.highlighted && (
                  <div className="text-base font-normal text-white bg-blue-500 rounded-full px-3 py-1 flex items-center gap-1">
                    <span className="text-white">★</span> Most popular
                  </div>
                )}
              </h3>

              <p className="text-4xl font-bold mb-4">
                ${price}
                <span className="text-base font-normal text-gray-500">
                  {isAnnual ? " /yr" : " /mo"}
                </span>
              </p>

              <hr className="text-gray-500"/>

              <ul className="space-y-2 mt-6 mb-6 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-lg font-medium transition ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
              <p className="text-sm font-light mb-1 mt-4 text-center">Terms and conditions apply.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlans;