import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome To Sewalink, Your Trusted Service Provider in Managing Your needy Sercives Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut accusantium saepe inventore? Debitis aliquam laudantium commodi quos assumenda officia expedita voluptates ipsum! Eveniet sed quos, corrupti cum aut culpa.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut commodi tenetur sunt saepe fugiat voluptate eveniet blanditiis repellat debitis autem illo, officia perferendis. Sunt blanditiis a obcaecati explicabo asperiores.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eos excepturi modi nihil accusantium nam maxime esse, eius eveniet labore, vel quidem impedit ratione, magni quibusdam nobis tenetur! Tempore, dicta.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US..</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficency</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repellendus natus ad odio saepe voluptas, veritatis veniam! Beatae, ducimus eum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab nihil corporis eos fugit deserunt doloribus similique dicta odit quas.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt architecto iure quisquam reprehenderit dolorem voluptatem quas neque ea fuga.</p>
        </div>
      </div>

    </div>
  )
}

export default About
