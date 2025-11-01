import React from 'react'
import { sprovider } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sprovider = () => {

  const navigate = useNavigate()

  
  return (
    <div>
      <p className='text-gray-600'>Browse through the Service Provider</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p className={`w-[94vw] sm:w auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General Doctor</p>
          <p className={`w-[94vw] sm:w auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Ambulance Service</p>
          <p className={`w-[94vw] sm:w auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Plumber</p>
          <p className={`w-[94vw] sm:w auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Electrican</p>
          <p className={`w-[94vw] sm:w auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Internet S Provider</p>
          <p className={`w-[94vw] sm:w auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Water Supply</p>
        </div>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>

          {sprovider.map((item, index) => (
            <div  className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-blue-50' src={item.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg front-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>

          ))}

        </div>

      {/* </div> */}



    </div>
  )
}

export default Sprovider
