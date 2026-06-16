import { NavLink } from "react-router-dom"

function Finish() {
  return (
    <div className="bg-[#000000] w-full flex  items-center pt-20 pb-20">
            <div className=" flex flex-col  items-center  lg:w-[31%] w-[31%] gap-4 md:w-[60%]">
            {/* <p className="text-center lg:w-[79%] text-white tracking-tight font-medium md:w-220">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p> */}
            <div className="w-[89%] lg:flex gap-2 grid  md:flex justify-center items-center ">
              {/* <input type="" placeholder=" Email address"  className="border border-[#616161] p-2 lg:w-267 h-15 md:w-300 font-semibold   text-white rounded-[5px]"/> */}
              <NavLink to="/ homepage" className=" pl-10 lg:pl-0 md:pl-0">
                
                <button className=" flex gap-4  lg:w-59 h-14  bg-[#e60914] justify-center items-center text-[#ffffff] font-bold font-sans lg:text-[23px] p-2 lg:p-0 md:w-39 rounded-sm">

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
  )
}

export default Finish