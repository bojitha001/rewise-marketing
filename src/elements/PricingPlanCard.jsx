
const PricingPlanCard = ({ title, price, time, features, highlighted }) => {
  return (
    <>
        <div
            className={`w-80 p-6 rounded-2xl border shadow-sm transition hover:shadow-lg ${
                highlighted
                ? "border-blue-600 scale-105"
                : "border-gray-200"
            }`}
            >
 
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            
            <p className="text-4xl font-bold mb-4">
                ${price}
                <span className="text-base font-normal text-gray-500"> /{time}</span>
            </p>

            <ul className="space-y-2 mb-6 text-gray-600">
                {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                    ✓ {feature}
                </li>
                ))}
            </ul>

            <button
                className={`w-full py-2 rounded-lg font-medium transition ${
                highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
                Get Started
            </button>
        </div>
    </>
  )
}

export default PricingPlanCard