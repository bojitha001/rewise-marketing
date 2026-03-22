const PricingHome = () => {
  return (
    <>
        <div className="text-center">
            <div className="">
                <p className="text-7xl">Pricing <span className="text-[#0040c1]">Plans</span></p>
            </div>
            <div className="mt-10 flex text-center justify-center">
                <svg
                    className="w-12 h-12 text-[#3d6fd3]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                >
                    <line x1="12" y1="4" x2="12" y2="10" strokeLinecap="round" />
                    <line x1="12" y1="14" x2="12" y2="20" strokeLinecap="round" />
                    <line x1="4" y1="12" x2="10" y2="12" strokeLinecap="round" />
                    <line x1="14" y1="12" x2="20" y2="12" strokeLinecap="round" />
                </svg>
            </div>
            <div className="mt-8 text-xl text-center font-light">
                <p>Use Rewise for free. Upgrade to access additional features,</p>
                <p>and increase limits.</p>
            </div>
        </div>
    </>
  )
}

export default PricingHome;