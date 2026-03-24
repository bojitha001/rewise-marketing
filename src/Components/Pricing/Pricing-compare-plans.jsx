const features = [
  "Basic access",
  "Limited usage",
  "All features",
  "Higher limits",
  "Priority support",
  "Dedicated support",
  "Custom features",
];

const plans = [
  { 
    name: "Free", 
    monthly: 0, 
    annual: 0, 
    includedFeatures: [
      "Basic access", 
      "Limited usage"
    ] 
  },
  { 
    name: "Pro", 
    monthly: 10, 
    annual: 100, 
    includedFeatures: [
      "Basic access", 
      "Limited usage", 
      "All features", 
      "Higher limits", 
      "Priority support"
    ] 
  },
  { 
    name: "Enterprise", 
    monthly: 30, 
    annual: 300, 
    includedFeatures: [
      "Basic access", 
      "Limited usage", 
      "All features", 
      "Higher limits", 
      "Priority support", 
      "Dedicated support", 
      "Custom features"
    ] 
  },
];

const PricingComparePlans = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16">
        <div className="text-center mb-15">
              <div className="">
                  <p className="text-7xl">Compare <span className="text-[#0040c1]">Plans</span></p>
              </div>
        </div>
        <div className="w-full max-w-[100rem] overflow-x-auto rounded-xl">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600 font-medium"></th>
                {plans.map((plan, index) => (
                  <th
                    key={index}
                    className={`px-6 py-3 text-center font-semibold text-[#0040c1]`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-gray-700">{feature}</td>
                  {plans.map((plan, idx) => (
                    <td key={idx} className="px-6 py-4 text-center">
                      {plan.includedFeatures.includes(feature) ? (
                        <span className="text-[#0040c1] font-bold">✓</span>
                      ) : (
                        <span className="text-gray-300">✕</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-800">Price (monthly)</td>
                {plans.map((plan, idx) => (
                  <td key={idx} className="px-6 py-4 text-center font-bold text-lg">
                    ${plan.monthly}/mo
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-200 bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-800">Price (annual)</td>
                {plans.map((plan, idx) => (
                  <td key={idx} className="px-6 py-4 text-center font-bold text-lg">
                    ${plan.annual}/yr
                  </td>
                ))}
              </tr>
              <tr className="">
                <td></td>
                <td className="px-6 py-4 text-center font-medium text-lg text-[#0040c1]"><button className="w-full py-2 rounded-full font-medium transition border-1 border-[#0040c1]-300">Get started now</button></td>
                <td className="px-6 py-4 text-center font-medium text-lg text-white "><button className="w-full py-2 rounded-full font-medium transition border-1 border-[#0040c1] bg-[#0040c1]">Get started now</button></td>
                <td className="px-6 py-4 text-center font-medium text-lg text-[#0040c1]"><button className="w-full py-2 rounded-full font-medium transition border-1 border-[#0040c1]-300">Get started now</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PricingComparePlans;