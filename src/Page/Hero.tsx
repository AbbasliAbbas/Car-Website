import React from 'react'


const Hero = () => {
  return (
    <div className=' bg-[url(./src/assets/images/car.png)] bg-cover h-[600px]'>
       <section >
         <p className='text-[50px] text-[white] pt-[200px] pl-[30px] font-bold'>Do you want to buy a car?</p>
         <p className='text-[20px]  text-gray-400 pl-[30px]'>Then buy a car press the button</p>
         <div>
            <button className='text-white bg-[#123456] rounded ml-[30px] mr-[40px] mt-[30px] pl-[40px] pr-[40px] pt-[20px] pb-[20px]'><a href="Market">Buy a car</a></button>
         </div>
       </section>
    </div>
  )
}

export default Hero