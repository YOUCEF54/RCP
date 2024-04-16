import {  Menu, Transition } from '@headlessui/react'
import React, { useState, Fragment } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


export default function LangMenu({Items}){
    const [selectedLang, setLang] = useState(Items[0]);
    const Langs = Items.map(e => ({name:e}))
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
    return(
        <Menu as="div" className="relative  items-center ">

        <div>
        <Menu.Button className={"flex align-middle items-center border pl-3 border-zinc-300  p-2 font-medium text- rounded-full"} >
            <span className="flex align-middle">{selectedLang}</span>
            <MdKeyboardArrowDown size={20} />
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
                               onClick={()=>setLang(lang.name)}
                               className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-start')}
                             >
                               {lang.name}
                             </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
        </Transition>
        </Menu>
    )
}