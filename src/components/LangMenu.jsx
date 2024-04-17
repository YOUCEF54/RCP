import {  Menu, Transition } from '@headlessui/react'
import React, { useState, Fragment } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

import { US } from 'country-flag-icons/react/3x2'
import Flag from 'react-flagkit';

export default function LangMenu({Items}){
      const [selectedLang, setLang] = useState(Items[0]);
      const Langs = Items.map(e => ({name:e.name,country:e.country}))
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
    return(
        <Menu as="div" className="relative align-middle   items-center max-md:hidden ">
        <div>
        <Menu.Button className={"flex items-center border rounded-full w-[8rem]  border-zinc-300 p-1  space-x-6 font-medium  "} >
          
            <span className="flex items-center  gap-2">
              <Flag  className="m-1 w-[2rem] h-[1.5rem] rounded-full ring-1 ring-offset-1 ring-zinc-300 " country={selectedLang.country}/>
            {/* {<US title="United States" className=" w-[1.3rem] rounded-sm ring-1 ring-offset-1 ring-black "/>} */}
              <div>
                {selectedLang.name}
              </div>
            </span>
            <div>
                <MdKeyboardArrowDown className=' ' size={20} />
            </div>
            </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {Langs.map((lang,index)=>(
                    <Menu.Item key={index}>
                      {({ active }) => (
                               <button
                               onClick={()=>setLang(lang)}
                               className={classNames(active ? 'bg-gray-100' : '', ' px-4 py-2 text-sm text-gray-700 w-full text-start flex space-x-3 items-center')}
                             >
                              <Flag country={lang.country}/>

                              <div>{lang.name}</div>
                             </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
        </Transition>
        </Menu>
    )
}