import ng from "../../assets/ng-1.webp";
import ng2 from "../../assets/ng-2.avif";
import ng3 from "../../assets/ng-3.avif";
import ng4 from "../../assets/ng-4.avif";
import gin from "../../assets/six.avif";


const Nollywood = () => {
  return (
    <div className=" w-full bg-[#000000]  min-h-5">
      <div className="  flex flex-col justify-center items-center gap-2 lg:gap-6  md:gap-2 pt-4 lg:p-7 ">
        <div className=" w-[86%] md:w-[98%] lg:pl-15  ">
          <h2 className="  lg:text-[23px] font-bold text-[#ffffff]  sm:text-2xl md:text-[19px]">
            Nollywood movies
          </h2>
          <p>See more <span></span></p>
        </div>

        <div className=" lg:flex lg:w-[89%] w-[43% grid grid-cols-2 justify-center lg:gap-4 items-center gap-3 p-3 lg:p-0 md:flex md:w-[94%] ">
          <div className=" lg:w-290 w-36.5 relative  ">
            <img src={ng} alt="" className=" rounded-[10px] " />
            {/* <span className=" [-webkit-text-stroke:0.25rem_rgb(255,255,255)]  absolute bottom-7 font-bold shadow-blue-50  text-7xl pl-1 lg:pl-0 lg:text-8xl -left-4.25 border-0  font-sans [text-shadow:0_0_1.5rem_rgba(0,0,0,0.5)] text-[#0f0f0f]  ">
              1
            </span> */}
          </div>

           <div className=" lg:w-290 w-36.5 relative ">
            <img src={ng2} alt="" className=" rounded-[10px]  " />
            {/* <span className=" [-webkit-text-stroke:0.25rem_rgb(255,255,255)]  absolute bottom-7 font-bold shadow-blue-50   text-7xl pl-2 lg:pl-0 lg:text-8xl -left-4.25 border-0  font-sans [text-shadow:0_0_1.5rem_rgba(0,0,0,0.5)] text-[#0f0f0f]  ">
              2
            </span> */}
          </div>

           <div className=" lg:w-290 w-36.5 relative ">
            <img src={ng3} alt="" className=" rounded-[10px]  " />
            {/* <span className=" [-webkit-text-stroke:0.25rem_rgb(255,255,255)]  absolute bottom-7 font-bold shadow-blue-50   text-7xl pl-2 lg:pl-0 lg:text-8xl -left-4.25 border-0  font-sans [text-shadow:0_0_1.5rem_rgba(0,0,0,0.5)] text-[#0f0f0f]  ">
              3
            </span> */}
          </div>

           <div className=" lg:w-290 w-36.5 relative ">
            <img src={ng4} alt="" className=" rounded-[10px]  " />
            {/* <span className=" [-webkit-text-stroke:0.25rem_rgb(255,255,255)]  absolute bottom-7 font-bold shadow-blue-50   text-7xl pl-2 lg:pl-0 lg:text-8xl -left-4.25 border-0  font-sans [text-shadow:0_0_1.5rem_rgba(0,0,0,0.5)] text-[#0f0f0f]  ">
              4
            </span> */}
          </div>

           <div className=" lg:w-240 w-36.5 relative ">
            <img src={gin} alt="" className=" rounded-[10px]  " />
            {/* <span className=" [-webkit-text-stroke:0.25rem_rgb(255,255,255)]  absolute bottom-7 font-bold shadow-blue-50   text-7xl pl-2 lg:pl-0 lg:text-8xl -left-4.25 border-0  font-sans [text-shadow:0_0_1.5rem_rgba(0,0,0,0.5)] text-[#0f0f0f]  ">
              5
            </span> */}
          </div>



        </div>
      </div>
      {/* <More/> */}
    </div>
  );
};

export default Nollywood;
