import React from 'react'

const Market = () => {
  return (
    <div>
        <p className='text-[50px] text-[black] pt-[100px] text-center font-bold'>Do you want to buy a car?</p>
        <div className='flex'>
        <div className='border-gray-600 border-[2px] rounded-[10px] w-[300px] h-[420px] mt-[50px] ml-[100px]'>
            <img src="./src/assets/images/bugatti.png" alt="" />
            <p className='text-[30px] font-bold ml-[20px]'>Bugatti Veyron</p>
            <p className='text-[15px] text-gray-600 ml-[20px]'>3,200000$</p>
            <button className='text-white bg-[#123456] rounded ml-[20px] mr-[40px]  pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>Buy a car</button>
        </div>
        <div className='border-gray-600 border-[2px] rounded-[10px] w-[300px] h-[420px] mt-[50px] ml-[100px]'>
            <img src="./src/assets/images/lamborgini.png" alt="" className='h-[300px] w-[600px] '/>
            <p className='text-[30px] font-bold ml-[20px]'>Laborgini</p>
            <p className='text-[15px] text-gray-600 ml-[20px]'>1,500000$</p>
            <button className='text-white bg-[#123456] rounded ml-[20px] mr-[40px]  pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>Buy a car</button>
        </div>
        <div className='border-gray-600 border-[2px] rounded-[10px] w-[300px] h-[420px] mt-[50px] ml-[100px]'>
            <img src="./src/assets/images/mclaren.png" alt=""  className='h-[300px] w-[600px]'/>
            <p className='text-[30px] font-bold ml-[20px]'>MClaren</p>
            <p className='text-[15px] text-gray-600 ml-[20px]'>200000$</p>
            <button className='text-white bg-[#123456] rounded ml-[20px] mr-[40px]  pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>Buy a car</button>
        </div>
        </div>
        <div className='flex'>
        <div className='border-gray-600 border-[2px] rounded-[10px] w-[300px] h-[420px] mt-[50px] ml-[100px]'>
            <img src="./src/assets/images/koniseg.png" alt="" className='h-[300px] w-[600px]'/>
            <p className='text-[30px] font-bold ml-[20px]'>Koenigsegg</p>
            <p className='text-[15px] text-gray-600 ml-[20px]'>3,200000$</p>
            <button className='text-white bg-[#123456] rounded ml-[20px] mr-[40px]  pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>Buy a car</button>
        </div>
        <div className='border-gray-600 border-[2px] rounded-[10px] w-[300px] h-[420px] mt-[50px] ml-[100px]'>
            <img src="./src/assets/images/bolide.png" alt="" className='h-[300px] w-[600px]'/>
            <p className='text-[30px] font-bold ml-[20px]'>Bugatti Bolide</p>
            <p className='text-[15px] text-gray-600 ml-[20px]'>3,200000$</p>
            <button className='text-white bg-[#123456] rounded ml-[20px] mr-[40px]  pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>Buy a car</button>
        </div>
        <div className='border-gray-600 border-[2px] rounded-[10px] w-[300px] h-[420px] mt-[50px] ml-[100px]'>
            <img src="./src/assets/images/ferrari.png" alt="" className='h-[300px] w-[600px]'/>
            <p className='text-[30px] font-bold ml-[20px]'>Ferrari</p>
            <p className='text-[15px] text-gray-600 ml-[20px]'>3,200000$</p>
            <button className='text-white bg-[#123456] rounded ml-[20px] mr-[40px]  pl-[40px] pr-[40px] pt-[10px] pb-[10px]'>Buy a car</button>
        </div>
        </div>
    </div>
  )
}

export default Market