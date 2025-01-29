import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#123456] h-[100px]'>
        <header className='flex justify-between'>
            <img src="./src/assets/images/typescript.png" alt="" className='w-[50px] h-[50px] mt-[30px] mr-[200px] ml-[30px]' />
            <nav className=''>
                <ul className='flex gap-[50px] text-gray-400 hover:text-[white] pt-[35px]'>
                    <li className='text-gray-400 hover:text-[white]  hover:rounded '>Home</li>
                    <li className='text-gray-400 hover:text-[white]  hover:rounded '>About</li>
                    <li className='text-gray-400 hover:text-[white]  hover:rounded '>Dashboard</li>
                    <li className='text-gray-400 hover:text-[white]  hover:rounded '>Services</li>
                    <li className='text-gray-400 hover:text-[white]  hover:rounded '>Contact</li>
                </ul>
            </nav>
            <button className='text-white bg-[blue] rounded  mt-[30px] pl-[50px] pr-[50px]'><a href="Login">Login</a></button>
            <button className='text-black bg-[white] rounded  mr-[40px] mt-[30px] pl-[40px] pr-[40px]'><a href="Signup">Sign up</a></button>
        </header>
    </div>
  )
}

export default Header