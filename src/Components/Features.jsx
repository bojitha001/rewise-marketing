import React from 'react'

const Features = () => {
  return (
    <div className='h-[150vh] px-24 mt-24'>
      <div className='text-center text-7xl font-light leading-20'>
        <p>Explore Our</p>
        <p className='text-[#0040c1]'>Standout Features</p>
      </div>

      <div className='h-150 grid grid-cols-2 gap-5 mt-15'>
        <div className='rounded-2xl bg-[#0040c127]'>
            <div className='h-110'>
                
            </div>
            <div>
                <p className='text-2xl ml-20'>Practice Sessions for Mastering Every Subject</p>
                <p className='text-lg w-80 ml-20 text-gray-400 font-light'>Build confidence with guided practice and instant feedback.</p>
            </div>
        </div>
        <div className='rounded-2xl bg-[#0040c127]'>
            
            <div className='h-40 flex flex-col-reverse'>
                <div>
                <p className='text-2xl ml-20'>Practice Sessions for Mastering Every Subject</p>
                <p className='text-lg w-80 ml-20 text-gray-400 font-light'>Build confidence with guided practice and instant feedback.</p>
                </div>
            </div>
            <div className=''>
                
            </div>
        </div>
      </div>

      <div className='h-100 grid grid-cols-[2fr_500px] gap-5 mt-5'>
        <div className='rounded-2xl bg-[#0040c127] relative'>
            <div className=''>
                
            </div>
            <div className='absolute top-20 left-0'>
                <p className='text-2xl ml-20'>Practice Sessions for Mastering Every Subject</p>
                <p className='text-lg w-80 ml-20 text-gray-400 font-light'>Build confidence with guided practice and instant feedback.</p>
            </div>
        </div>
        <div className='rounded-2xl bg-[#0040c1] relative'>
            
            <div className='flex flex-col-reverse absolute bottom-20 -left-5'>
                <div>
                <p className='text-4xl ml-20 text-white'>Get the App</p>
                {/* <p className='text-lg w-80 ml-20 text-gray-400 font-light'>Build confidence with guided practice and instant feedback.</p> */}
                </div>
            </div>
            <div className=''>
                
            </div>                <div className="absolute -bottom-32 -right-32 w-130 h-80 bg-white rounded-full blur-3xl opacity-30"></div>
        </div>

      </div>
    </div>
  )
}

export default Features
