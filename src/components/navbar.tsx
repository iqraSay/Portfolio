"use client";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => {
        setIsMenuOpen(true);
        console.log(isMenuOpen);
      };
      const closeMenu = () => {
        setIsMenuOpen(false);
        console.log(isMenuOpen);
      };
      return (
        

          <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-4 md:px-16 bg-black text-white z-50 ">
             <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-lime-500 to-cyan-400 bg-clip-text font-cursive">Shabeeh Fatima</h1>
             <div className="lg:visible invisible fixed top-0 left-0 w-full h-24 flex items-center justify-between px-4 md:px-16 bg-black text-white z-50 ">
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-lime-500 to-cyan-400 bg-clip-text font-cursive">Shabeeh Fatima</h1>
        
        <nav className="hidden md:flex text-lg space-x-8 z-100">
          <a
            href="/"
            className="hover:underline hover:underline-offset-1- font-bold hover:text-transparent hover:hover:bg-gradient-to-b from-fuchsia-600 to-cyan-400 bg-clip-text transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:underline hover:underline-offset-1- font-bold hover:text-transparent hover:bg-gradient-to-b from-fuchsia-600 to-cyan-400 bg-clip-text transition-all duration-200"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="hover:underline hover:underline-offset-1- font-bold hover:text-transparent hover:bg-gradient-to-b from-fuchsia-600 to-cyan-400 bg-clip-text transition-all duration-200"
          >
            My Projects
          </a>
          <a
            href="#blogs"
            className="hover:underline hover:underline-offset-1- font-bold hover:text-transparent hover:bg-gradient-to-b from-fuchsia-600 to-cyan-400 bg-clip-text transition-all duration-200"
          >
            My Blogs
          </a>
          <a
            href="#contact"
            className="hover:underline hover:underline-offset-1- font-bold hover:text-transparent hover:bg-gradient-to-b from-fuchsia-600 to-cyan-400 bg-clip-text transition-all duration-200"
          >
            Contact Me
          </a>
        </nav>
        <button className="md:hidden  text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 hover:font-bold">
        <div className="space-y-2 z-10">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </div>
        
        </button>
      </div>
        
            <button
        onClick={openMenu}
        className="h-10 w-10 flex justify-center items-center "
      >
        <div className="space-y-2 z-10">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </div>
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex-col justify-center items-center w-screen h-screen ">
          <ul className="uppercase flex-col flex justify-center items-center lg:items-start lg:float-left">
          <li className="mt-36 mb-7 md:mb-5 mx-10">
              <Link href="/" onClick={closeMenu} className=" cursor-pointer lg: md:text-6xl text-4xl  font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:underline hover:underline-offset-1- font-bold">Home</Link>
            </li>
            <li className="my-7 md:my-5 mx-10">
              <Link href="#" onClick={closeMenu} className=" cursor-pointer lg: md:text-6xl text-4xl  font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:underline hover:underline-offset-1- font-bold">About Me</Link>
            </li>
            <li className=" my-7 md:my-5 mx-10">
              <Link href="#" onClick={closeMenu} className=" cursor-pointer md:text-6xl text-4xl font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:underline hover:underline-offset-1- font-bold">My Projects</Link>
            </li>
            <li className=" my-7 md:my-5 mx-10">
              <Link href="#" onClick={closeMenu} className=" cursor-pointer md:text-6xl text-4xl font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:underline hover:underline-offset-1- font-bold">My Blogs</Link>
            </li>
            <li className=" my-7 md:my-5 mx-10">
              <Link href="#" onClick={closeMenu} className=" cursor-pointer md:text-6xl text-4xl font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text hover:underline hover:underline-offset-1- font-bold">Contact Me</Link>
            </li>
          </ul>
        <button
        onClick={closeMenu}
        className="h-10 w-10 flex justify-center items-center absolute right-10 top-10 "
      >
        <div className="space-y-2 z-10">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </div>
      </button>
        </div>
      )}

        </div>
            );
      
}
export default Navbar;