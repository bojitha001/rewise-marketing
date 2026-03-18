import React from 'react'

const AboutCard = ({ 
  bgColor = 'bg-amber-400', 
  width = 'w-50', 
  height = 'h-25', 
  left,
  top ,
  right,
  bottom,
}) => {
  return (
    <div className={`absolute rounded-full ${bgColor} ${width} ${height} ${left || ''} ${top} ${right || ''} ${bottom || ''}`}>
      
    </div>
  )
}

export default AboutCard
