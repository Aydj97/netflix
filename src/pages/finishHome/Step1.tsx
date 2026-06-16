import { NavLink } from "react-router-dom"

const Step1 = () => {
  return (
    <div className=" bg-amber-50 w-full text-black h-full ">
      <div className="w-[90%]">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M2 24C2 11.85 11.85 2 24 2s22 9.85 22 22-9.85 22-22 22S2 36.15 2 24M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0m-2.293 30.707 12-12-1.414-1.414L21 28.586l-5.293-5.293-1.414 1.414 6 6 .707.707z" clip-rule="evenodd"></path></svg></div>
        <div> <span>Step 2 of 3</span>
        <h1>Choose your plan</h1>
        </div>
        <div>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m21.3 4.3 1.4 1.4-14 14a1 1 0 0 1-1.4 0l-7-7 1.4-1.4L8 17.58z" clip-rule="evenodd"></path></svg> <span>No commitments, cancel anytime.</span>
          </div>

           <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m21.3 4.3 1.4 1.4-14 14a1 1 0 0 1-1.4 0l-7-7 1.4-1.4L8 17.58z" clip-rule="evenodd"></path></svg> <span>No commitments, cancel anytime.</span>
          </div>

           <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m21.3 4.3 1.4 1.4-14 14a1 1 0 0 1-1.4 0l-7-7 1.4-1.4L8 17.58z" clip-rule="evenodd"></path></svg> <span>No commitments, cancel anytime.</span>
          </div>

        </div>

      </div>

      <div><NavLink to="/ signIn" className=" w-21.75 h-9 bg-[#e60914] flex justify-center items-center text-[#ffffff] font-bold rounded-sm"> <button>Next </button></NavLink></div>


    </div>
  )
}

export default Step1