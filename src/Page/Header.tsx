import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#123456] h-[100px]'>
        <header className='flex '>
            <img src="./src/assets/images/logo.png" alt="" className='rounded-[10px] w-[80px] h-[80px] mt-[10px] mr-[400px] ml-[30px]' />
            <nav className=''>
                <ul className='flex gap-[50px] text-gray-400 hover:text-[white] pt-[35px] mr-[200px]'>
                    <li className='text-gray-400 hover:text-[white] '><a href="/">Home</a></li>
                    <li className='text-gray-400 hover:text-[white] '><a href="About">About</a></li>
                    <li className='text-gray-400 hover:text-[white] '><a href="Market">Market</a></li>
                    <li className='text-gray-400 hover:text-[white] '><a href="Contact">Contact</a></li>
                </ul>
            </nav>
            <button className='text-white hover:bg-[blue] rounded  mt-[20px] pl-[40px] pr-[40px]'><a href="Login">Login</a></button>
            <button className='text-white  hover:bg-[white] hover:text-[blue] rounded  mr-[40px] mt-[20px] pl-[40px] pr-[40px] '><a href="Signup">Sign up</a></button>
        </header>

    </div>
  )
}

export default Header