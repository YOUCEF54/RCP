import { useEffect, useRef } from "react"
import Product_img from "../../src/product1.png"
import { useAnimation, useInView,motion } from "framer-motion"
import { Rating } from "@material-tailwind/react";
import { RatingUI } from "./RatingUI";


export default function Card(){
    const ref= useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainConrols = useAnimation()
    useEffect(()=>{
      if(isInView){
        mainConrols.start("visible")
      }
    },[isInView])
    return(
        
<div ref={ref} class="flex sm:flex-col max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
    <motion.div 
        variants={
            {
                hidden: {opacity:0, y:75},
                visible:{opacity:1,y:0}
            }
        }
        initial= "hidden"
        animate= {mainConrols}
        transition={{duration:0.5, delay:0.25}}
        class="  ">

        <img
            src={Product_img}
            alt="product"
            className=" object-cover  w-full h-[15rem] transition rounded-t-lg "
            />
   
    <div class="max-sm:w p-4">
        <div className="flex  justify-between items-center">
            <h1 class="text-2xl font-bold text-gray-900">
                T-shirt For Men
            </h1>
            <h1 class="text-xl font-bold text-gray-700">
                    220$
            </h1>
        </div>
        <p class="mt-2 text-sm text-gray-600">
            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
        </p>

        <div className="mt-1  py-1 w-fit border-zinc-400 rounded-lg space-y-1">
            <div className=" font-medium">available sizes</div>
                <div class="flex space-x-2">
                    <label class="text-center">
                        <input type="radio" class="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600" name="size" value="xs"/>
                            XS
                        </label>
                        <label class="text-center">
                            <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="s"/>
                                S
                            </label>
                            <label class="text-center">
                                <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="m"/>
                                    M
                                </label>
                                <label class="text-center">
                                    <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="l"/>
                                        L
                                    </label>
                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="xl"/>
                                            XL
                                        </label>
            </div>

        </div>

        <div class="   py-1 w-fit border-zinc-400 rounded-lg space-y-1">
            <div className=" font-medium">available colors</div>
                <div>
                    <ul class="flex flex-row items-center ">
                        <li class="mr-2 last:mr-0">
                            <span class="block p-1 transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li class="mr-2 last:mr-0">
                            <span class="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li class="mr-2 last:mr-0">
                            <span class="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full">
                                </a>
                            </span>
                        </li>
                        <li class="mr-2 last:mr-0">
                            <span class="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full">
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
                {/* <div class="flex mt-2 item-center">
                    <RatingUI value={3}/>
                </div> */}

        <div class="flex justify-end gap-2 mt-3 item-center ">
            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-500 rounded">
                see more
            </button>
            <button class="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                Add to Card
            </button>
        </div>
    </div>
    </motion.div>
</div>

    )
}