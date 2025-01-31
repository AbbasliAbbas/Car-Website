import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className=" shadow-sm  bg-[#123456]">
    <div className=" p-6 md:flex md:items-center md:justify-between">
      <span className=" text-gray-500 dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex   text-sm font-medium text-gray-500 dark:text-gray-400 ">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
    </div>
  )
}

export default Footer