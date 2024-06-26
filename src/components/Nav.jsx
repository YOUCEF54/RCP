import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { Badge, Button } from "@material-tailwind/react";
import Cart from './Cart';
import {UserDropDown} from "./Dropdown"
import { useSelector } from 'react-redux';

import { Bars3Icon, XMarkIcon, ShoppingCartIcon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import LangMenu from './LangMenu';
import { useAnimation } from 'framer-motion';

function Nav({toggleDarkMode}) {
  const count = useSelector((state)=>state.addToCart.value)
  const [currentPath] = useState(window.location.pathname);
  

  const menu = [
    { name: 'Home', url: '/', className: "inline-flex items-center border-b-2 border-transparent px pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 px-0 " },
    { name: 'New Clothes', url: '/new_clothes', className: "inline-flex items-center border-b-2 border-transparent px pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700  px-0 " },
    { name: 'Trending', url: '/trending', className: "inline-flex items-center border-b-2 border-transparent px pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700  px-0 " },
    { name: 'About us', url: '/about_us', className: "inline-flex items-center border-b-2 border-transparent px pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700  px-0 " },
    { name: 'Contact us', url: '/contact_us', className: " inline-flex items-center border-b-2 border-transparent px pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700  px-0 " },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [isOpen, setOpen] = useState(false)
  const [inputValue,setInputValue] = useState("")

 
  const [isInputOpen , setInputOpen] = useState(false)

  return (
    
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
        <Cart isOpen={isOpen} setOpen={setOpen} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 justify-between ">
            <div className="flex justify-between items-center h-full w-full px-6 ">
              <a href="/" className="flex font-roboto text-[#AC8C6F]  font-bold text-3xl flex-shrink-0 items-center ">
                Logo
              </a>
              <div className={`hidden  lg:flex justify-end w-full sm:space-x-4  h-[60%] `}>
                <div className=' flex mr-12 space-x-6  justify-center'>
                {menu.map((e, index) => (
                  <a href={e.url} key={index} className={classNames((currentPath === e.url) && " w-fit  border-b-2 border-zinc-400", e.className,` sm:${(isInputOpen)&&`hidden`}`)} >
                    {e.name}
                  </a>
                ))}
                </div>
                {/* <div className=" h-2 min-h-[1em] w-0.5 m-auto bg-neutral-200 dark:bg-white/10  max-md:hidden">
                  
                </div> */}
                {/* inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 max-md:hidden  */}
                <div className='flex justify-end items-center ml-8  '>
                  <input onChange={(e)=>setInputValue(e.target.value) }
                  disabled={!isInputOpen} placeholder={`${(isInputOpen )?`search...`:``}`} type='text' className={` border border-zinc-300 ${(isInputOpen || inputValue !== "")?`w-[30vw]`:`w-[2.9rem] absolute bg-[#AC8C6F]`} outline-none focus:ring-1 ring-[#AE8D70] px-3 py-[.66rem] rounded-full transition-width duration-300 ease-in-out ${toggleDarkMode&&`bg-black `}`}/>
                  <button onClick={()=>(inputValue === "")&&setInputOpen(!isInputOpen)} className={`  ${(isInputOpen)?``:` bg-[#AC8C6F] text-white `} duration-200 outline-none  absolute border mr-1 border-zinc-300  p-2 font-light text- rounded-full`}>
                    <MagnifyingGlassIcon className=" size-5 " />
                  </button>
                </div>

              </div>
            <div className="hidden lg:ml-6 lg:flex lg:items-center space-x-3  h-fit  ">
              <button className=" bg-[#0095FB]f border border-zinc-300  p-2 font-light text- rounded-full">
                <HeartIcon className=" size-5" />
              </button>
                {/* <UserIcon className=" size-5" /> */}
            
                <UserDropDown toggleDarkMode={toggleDarkMode}/>
                {/* {toggleDarkMode?"true":"false"} */}

              <Badge content={count} className={`${(count === 0)? `hidden`:`flex`} items-center justify-center min-w-5 max-h-5 ml-7 -translate-y-1`}>
              <Button 
                onClick={()=>setOpen(!isOpen)}
                className=" bg-[#0095FB]f border border-zinc-300  p-2 font-light text- rounded-full ">
                <ShoppingCartIcon className=" size-5" />
              </Button>
              </Badge>

            </div>
            </div>
            <div className='  my-auto max-lg:hidden'>
            <LangMenu 
                  Items={[
                    { name: "English", country: "US", lang:"en" },
                    { name: "French", country: "FR", lang:"fr" },
                    { name: "Arabic", country: "MA", lang:"ar" },
                    { name: "Spanish", country: "ES", lang:"es" }
                  ]}
                />
            </div>
            
            <div className='my-auto lg:size-0'>
              <div className="-mr- flex justify-center w-full  items-center lg:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            </div>
          </div>
        </div>
        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 pt-2 pb-3">
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >
              Dashboard
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Team
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Projects
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Calendar
            </Disclosure.Button>
          </div>
        </Disclosure.Panel>
      </>
      )}
      </Disclosure>
  );
}

export default Nav;
