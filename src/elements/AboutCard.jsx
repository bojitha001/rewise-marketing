import React from 'react'

const AboutCard = ({ 
  bgColor = 'bg-[#0040c1]', 
  width = 'w-50', 
  height = 'h-25', 
  left,
  top ,
  right,
  bottom,
}) => {
  return (
    <div className={`absolute opacity-70 rounded-full ${bgColor} ${width} ${height} ${left || ''} ${top} ${right || ''} ${bottom || ''}`}>
      
    </div>
  )
}

export default AboutCard
