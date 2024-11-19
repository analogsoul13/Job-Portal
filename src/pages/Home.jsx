import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <>
            <div className='bg-homeCover'>
                <Navbar />
                <div className='grid sm:grid-cols-2 px-6'>
                    <div className='flex flex-col justify-center p-6 sm:mt-14 gap-6 items-start w-full h-[450px]'>
                        <h1 className='text-5xl font-bold slide-in text-slate-700'>Connecting Talent <br /> With Opportunites</h1>
                        <p className='font-thin slide-in'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eligendi. Corrupti tempora, ipsa saepe nostrum quod earum nulla quisquam hic.</p>
                        <button className='btn shadow-xl btn-accent slide-in'>Lets Go</button>
                    </div>
                    <div className='flex justify-center items-center w-full h-full'>
                        <img className='fade-in' src="https://clipart-library.com/new_gallery/551372_man-with-laptop-png.png" alt="" />

                    </div>
                </div>
            </div>


        </>
    )
}

export default Home