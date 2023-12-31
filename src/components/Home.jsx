import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Stephenie Oge Nwachukwu</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I am a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            "Passionate frontend developer and UI designer with a knack for
            creating immersive digital experiences. I thrive on bringing ideas to
            life through clean, efficient, and accessible code. By combining my
            technical expertise with a keen sense of aesthetics, I aim to create
            websites and applications that not only meet clients' objectives but
            also exceed user expectations. Let's bring your vision to life!"
            </p>
            <div >
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className='hover:rotate-90 duration-200'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                     </button>
            </div>
        </div>
    </div>
  )
}

export default Home