import { NavLink } from "react-router-dom"

const Signin2 = () => {
  return (
      <div className=" border-t flex justify-center  w-full h-screen text-white pl-58 ">
      <div className=" justify-center w-[70%] items-center p-10">
        <div className=" grid gap-10  justify-center items-center ">
          <div className="lg:w-[90%] w-[19%] md:w-[55%] justify-center items-center grid gap-5 ">
            <div className=" grid gap-4 justify-center lg:w-[70%] w-[90%] ">
              <h6 className="text-[32px] font-bold font-sans">Tap the link in your email</h6>

              <span className=" text-[16px] font-medium text-[#ffffff] font-sans ">We sent a sign-up link to the email below. Simply tap the link to create your account.</span>
              
            </div>

            <div className=" lg:w-[76%] w-[99%] flex flex-col justify-center items-center">
              
                <div className="w-[70%]  gap-8 grid   justify-center items-center ">
                  <input
                    type=""
                    placeholder=" Email or mobile number"
                    className="border border-[#616161] bg-[#616161] p-2 lg:w-105 h-11 md:w-108 font-semibold   text-white rounded-[5px]"
                  />

                  <div className="flex gap-3 items-center">
                    {/* <div className="border w-4 h-4 bg-black "></div>             */}
                    <span className=" text-[16px] font-medium text-[#ffffff] font-sans ">Didn't get a link? Check your spam or <span className="border-b">resend it</span>.</span>
                  </div>




                  <NavLink to="/ Finishsignin" className=" pl- lg:pl-0 md:pl-0">
                    <button className=" flex gap-4 w-70 md:w-105 lg:w-105 h-11  bg-[#e60914] justify-center items-center text-[#ffffff] font-bold font-sans lg:text-[17px] p-2 lg:p-0  rounded-sm">
                      Continue
                    </button>
                  </NavLink>
                </div>
              
            </div>
          </div>

          <div className=" mr-7 lg:mr-0 md:mr-0 ">
                 
                 <p >Get Help <span></span> </p>

                {/* <span className="text-[#ffffff80] w-76 lg:w-full md:w-full">This page is protected by Google reCAPTCHA to ensure you're not a bot.</span> */}

          </div>


        </div>
      </div>
    </div>
  )
}

export default Signin2