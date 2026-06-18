import { NavLink } from "react-router-dom"

const HeroFinishSingin = () => {
  return (
    <div className=" w-full h-screen bg-[url('/images/nex-bg.jpg')] bg-center bg-cover flex justify-center items-center  relative ">
      <div className="bg-[#000000b0] h-screen absolute w-screen flex flex-col  lg:gap-30 gap-7">
        <div className=" flex justify-center items-center p-4 ">
      
        </div>

        <div className=" text-white flex flex-col gap-4 justify-center items-center ">
          <span className=" flex flex-col justify-center items-center w-[70%] gap-2">
            <h1 className=" lg:text-[52px] justify-center items-center lg:w-[70%] text-[30px] text-center font-black flex flex-col tracking-tight w-67.5 ">
              Unlimited movies, TV shows, and more
            </h1>
            <span className="font-bold lg:text-[19px] text-center w-70 text-[14px] lg:w-92.5 ">Starts at ₦2,500. Cancel anytime.</span>
          </span>

          <div className=" flex flex-col justify-center items-center w-[70%] gap-4">
            <p className="text-center lg:w-[60%] tracking-tight font-bold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className=" lg:flex gap-2 grid  md:flex justify-center items-center ">
              {/* <input type="" placeholder=" Email address"  className="border border-[#616161] p-2 lg:w-99.75 rounded-[5px]"/> */}
              <NavLink to="/ step1" className=" pl- lg:pl-0 md:pl-0">
                
                <button className=" flex gap-4  lg:w-59 h-14 bg-[#e60914] justify-center items-center text-[#ffffff] font-bold lg:text-[23px] p-2 lg:p-0 rounded-sm">
                  Finish Sign-Up
                  
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      data-icon="ChevronRightMedium"
                      data-icon-id=":r4:"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroFinishSingin