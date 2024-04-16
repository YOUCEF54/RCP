import BG from "../../src/bg-main.jpg"
export default function Hero(){
    return(
        <div className="z-0 m-auto flex  justify-between h-[100vh]">
        <div
          className=" z-10  h-[32rem] text-center mt-[16rem] max-md:w-[75vw] md:w-[80vw] xl:w-[55rem] m-auto ">
          <div className="bg-[#AE8D70] border-gray-400 shadow-[0_35px_60px_-5px_rgba(0,0,0,0.35)] text-white  p-4 rounded-2xlf bg-opacity-95 flex flex-col items-center rounded-sm">
            <h1 className="font-bold text-4xl font-roboto ">Welcom to your shopping clothes store.</h1>
            <p className="  mt-4 font-medium text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit aut vel voluptates, veniam quaerat necessitatibus impedit magnam, dolorem eligendi illum nihil deserunt illo dolores quas! Consequatur obcaecati, deleniti numquam facilis sit labore?</p>
            <button className=" w-fit my-2 mt-4 px-2 py-1 font-medium border-white rounded-md border-[1.7px]">Shop Now!</button>
          </div>
        </div>
        <img
            src={BG}
            alt="main bakcground - clothes"
            className="bg-black z-0 absolute object-cover brightness-[75%] h-[100vh] w-full    m-auto"
        />
      </div>
       
    )
}