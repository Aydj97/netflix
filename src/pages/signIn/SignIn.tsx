import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className=" border-t flex justify-center  w-full h-screen text-white  ">
      <div className=" justify-center w-[90] items-center p-10">
        <div className=" grid gap-10  justify-center items-center w-full">
          <div className="w-[90%] justify-center items-center grid gap-5 ">
            <div>
              <h6 className="text-[32px] font-bold font-sans">Enter your info to sign in</h6>
              <span className=" text-[18px] text-[#ffffffb3] font-sans font-normal">Or get started with a new account.</span>
            </div>

            <div className=" flex flex-col justify-center items-center">
              
                <div className="w-[89%]  gap-3 grid   justify-center items-center ">
                  <input
                    type=""
                    placeholder=" Email or mobile number"
                    className="border border-[#616161] bg-[#131212] p-2 lg:w-105 h-13 md:w-105 font-semibold   text-white rounded-[5px]"
                  />
                  <NavLink to="/ signin1" className=" pl- lg:pl-0 md:pl-0">
                    <button className=" flex gap-4 w-70 md:w-105 lg:w-105 h-13  bg-[#e60914] justify-center items-center text-[#ffffff] font-bold font-sans lg:text-[17px] p-2 lg:p-0  rounded-sm">
                      Continue
                    </button>
                  </NavLink>
                </div>
              
            </div>
          </div>

          <div className="grid gap-10 justify-center items-center ">
                 
                 <p>Get Help <span></span> </p>

                <span className="text-[#ffffff80] w-76 lg:w-full md:w-full">This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>

          </div>


        </div>
      </div>
    </div>
  );
};

export default SignIn;
