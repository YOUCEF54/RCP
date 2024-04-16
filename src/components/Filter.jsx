import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { TbMoodKidFilled } from "react-icons/tb";




export default function Filter(){
    return(
        <div className=" mb-10  w-full m-auto  mt-10  border-[#AE8D70] rounded-full">
            <div className=" scroll  flex overflow-auto space-x-4 text-xl font-medium relative rounded- border  border-[#AE8D70]  ">
                <button className="p-2 m-4 pl-4 flex space-x-4 items-center border rounded-full  border-[#AE8D70]">
                    <div>Men</div>
                    <button className=" bg-sky-500   p-4 font-light  rounded-full">
                    <BsGenderMale className=" size-6 " color="white" />
                    </button>
                </button>
                <button className="p-2 m-4 pl-4 flex space-x-4 items-center border rounded-full border-[#AE8D70]">
                    <div>Women</div>
                    <button className=" bg-rose-500   p-4 font-buttonght text- rounded-full">
                    <BsGenderFemale className=" size-6 " color="white" />
                    </button>
                </button>
                <button className="p-2 m-4 pl-4 flex space-x-4 items-center border rounded-full border-[#AE8D70]">
                    <div>Kids</div>
                    <button className=" bg-teal-500   p-3 font-buttonght text- rounded-full">
                    <TbMoodKidFilled className=" size-8 " color="white" />
                    </button>
                </button>
                <button className="p-2 m-4 pl-4 flex space-x-4 items-center border rounded-full border-[#AE8D70]">
                    <div>Kids</div>
                    <button className=" bg-teal-500   p-3 font-buttonght text- rounded-full">
                    <TbMoodKidFilled className=" size-8 " color="white" />
                    </button>
                </button>
                <button className="p-2 m-4 pl-4 flex space-x-4 items-center border rounded-full border-[#AE8D70]">
                    <div>Kids</div>
                    <button className=" bg-teal-500   p-3 font-buttonght text- rounded-full">
                    <TbMoodKidFilled className=" size-8 " color="white" />
                    </button>
                </button>
                
                
            </div>
        </div>
    )
}