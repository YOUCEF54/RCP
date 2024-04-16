import { useEffect, useRef } from "react"
import Product_img from "../../src/product1.png"
import { useAnimation, useInView,motion } from "framer-motion"



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
   
    <div class="max-sm:w-2/3 p-4">
        <h1 class="text-2xl font-bold text-gray-900">
            Tomorow
        </h1>
        <p class="mt-2 text-sm text-gray-600">
            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
        </p>
        <div class="flex mt-2 item-center">
            <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
            <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
        </div>
        <div class="flex justify-between mt-3 item-center">
            <h1 class="text-xl font-bold text-gray-700">
                $220
            </h1>
            <button class="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                Add to Card
            </button>
        </div>
    </div>
    </motion.div>
</div>

    )
}