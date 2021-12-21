import Link from 'next/link'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUser } from "react-icons/ai"


const Nav = () => {
   
    //We will use react hooks for toggling the menu
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }
    return (
    
<div class="min-h-full">
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-6 w-15" src="https://imgur.com/PaDTElS.png" alt="Workflow"/>
            <span></span>
          </div>
   
        </div>
               <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4  justify-center">

              <a href="#" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Watches</a>

              <a href="#" class="text-gray-800 font-serif  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Eyewear</a>

              <a href="#" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accessories</a>

              <a href="#" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>

        
            </div>
          </div>



        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
                    <button type="button" class="text-gray-800 font-serif hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <FaSearch />  
            </button>           
      <dd class="text-indigo-600 flex items-center">
       <button type="button" class="p-1 rounded-full text-gray-900 hover:text-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex">
        <svg width="20" height="20" fill="none" aria-hidden="true" class="mr-1">
           <AiOutlineUser  class="px-8"/>
        </svg>
        <span class="font-serif "> Login</span>
   
        </button>
      </dd>

            <div class="ml-3 relative">
              <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm  " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                         <img class="h-8 w-8 rounded-full" src="https://imgur.com/upt7qwN.png" alt=""></img>
                </button>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  </nav>
      </div>


    )
}
const  SideMenu = () =>{
    return(
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
     <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboabbbbbbrd</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>

    </div>
    )
}
export default Nav