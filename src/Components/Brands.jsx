import React from 'react'

const Brands = () => {
  const brands = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '⊞' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Amazon', logo: '🔶' },
    { name: 'Meta', logo: 'f' },
    { name: 'Netflix', logo: '▶' }
  ]

  return (
    <div className="px-24 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-12" style={{ backgroundColor: '#0040c1' }}></div>
            <h2 className="text-4xl font-bold text-gray-900">Trusted by Leading Brands</h2>
            <div className="h-1 w-12" style={{ backgroundColor: '#0040c1' }}></div>
          </div>
          <p className="text-lg text-gray-600">Join thousands of companies using Rewise to transform education</p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition duration-300 cursor-pointer group"
            >
              <div 
                className="text-6xl mb-4 group-hover:scale-110 transition duration-300"
              >
                {brand.logo}
              </div>
              <p className="text-xl font-semibold text-gray-900">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands
