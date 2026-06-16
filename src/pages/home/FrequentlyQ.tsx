// import React from 'react'

import React from "react";
import { VscAdd, VscChromeClose } from "react-icons/vsc";

const FrequentlyQ = () => {
  const [dropdown, setDropdown] = React.useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const [dropdown1, setDropdown1] = React.useState(false);

  const showDropdown1 = () => {
    setDropdown1(!dropdown1);
  };

  const [dropdown2, setDropdown2] = React.useState(false);

  const showDropdown2 = () => {
    setDropdown2(!dropdown2);
  };

  const [dropdown3, setDropdown3] = React.useState(false);

  const showDropdown3 = () => {
    setDropdown3(!dropdown3);
  };

  const [dropdown4, setDropdown4] = React.useState(false);

  const showDropdown4 = () => {
    setDropdown4(!dropdown4);
  };

  const [dropdown5, setDropdown5] = React.useState(false);

  const showDropdown5 = () => {
    setDropdown5(!dropdown5);
  };

 

  return (
    <div className="w-full  bg-[#000000] min-h-48  text-white pl-5 lg:pl-124  pt-12">
      <div className="lg:w-[28%] w-[80%] grid gap-3 items-center  justify-center md:pl-16 lg:pl-0 pl-4  ">
        <h4 className=" lg:w-265 md:w-164 lg:text-2xl text-[17px] font-medium w-65">Frequently Asked Questions</h4>
        <div>
          <ul className=" grid gap-3  " >
            <li
              className="  w-[110%] min-h-25 grid gap-6 bg-[#2d2d2d] border-b-black hover:bg-[#444343]"
              onClick={showDropdown}
            >
              <button className="  w-[95%] mb-3  flex justify-between items-center pt-7 ">
                <h4 className="lg:text-2xl text-[17px] font-semibold  pl-5">What is Netflix?</h4>

                {dropdown ? (
                  <button className=" text-3xl" onClick={showDropdown}>
                    <VscChromeClose />
                  </button>
                ) : (
                  <button className="text-3xl" onClick={showDropdown}>
                    <VscAdd />
                  </button>
                )}
              </button>
              {dropdown ? (
                <div className=" bg-[#2d2d2d] w-full min-h-25   ">
                  <div className=" w-[85%] flex flex-col gap-7  justify-center items-center pl-5">
                    <p className=" lg:text-[21px] text-[17px] font-semibold ">
                      Netflix is a streaming service that offers a wide variety
                      of award-winning TV shows, movies, anime, documentaries,
                      and more on thousands of internet-connected devices.
                    </p>
                    <span className="lg:text-[21px] text-[17px] font-semibold  ">
                      You can watch as much as you want, whenever you want
                      without a single commercial – all for one low monthly
                      price. There's always something new to discover and new TV
                      shows and movies are added every week!
                    </span>
                  </div>
                </div>
              ) : null}
            </li>

            <li
              className="  w-[110%] min-h-25 grid gap-6 bg-[#2d2d2d] border-b-black hover:bg-[#444343]"
              onClick={showDropdown1}
            >
              <button className="  w-[95%] mb-3  flex justify-between items-center pt-7 ">
                <h4 className="lg:text-[22px] text-[17px] font-semibold text-left  pl-5">How much does Netflix cost?</h4>

                {dropdown1 ? (
                  <button className=" text-3xl" onClick={showDropdown1}>
                    <VscChromeClose />
                  </button>
                ) : (
                  <button className="text-3xl" onClick={showDropdown1}>
                    <VscAdd />
                  </button>
                )}
              </button>
              {dropdown1 ? (
                <div className=" bg-[#2d2d2d] w-full min-h-25   ">
                  <div className=" w-[85%] flex flex-col gap-7 justify-center items-center pl-5">
                    <p className=" lg:text-[21px] text-[17px] font-semibold  ">
                      Netflix is a streaming service that offers a wide variety
                      of award-winning TV shows, movies, anime, documentaries,
                      and more on thousands of internet-connected devices.
                    </p>
                    <span className="lg:text-[21px] text-[17px] font-semibold ">
                      Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500/month.
                    </span>
                    
                  </div>
                </div>
              ) : null}
            </li>

            <li
              className="  w-[110%] min-h-25 grid gap-6 bg-[#2d2d2d] border-b-black hover:bg-[#444343] pa"
              onClick={showDropdown2}
            >
              <button className="  w-[95%] mb-3  flex justify-between items-center pt-7 ">
                <h4 className="lg:text-[22px] pl-5 text-[17px] font-semibold ">Where can I watch?</h4>

                {dropdown2 ? (
                  <button className=" text-3xl" onClick={showDropdown2}>
                    <VscChromeClose />
                  </button>
                ) : (
                  <button className="text-3xl" onClick={showDropdown2}>
                    <VscAdd />
                  </button>
                )}
              </button>
              {dropdown2 ? (
                <div className=" bg-[#2d2d2d] w-full min-h-25   ">
                  <div className=" w-[85%] flex flex-col gap-7 justify-center items-center pl-5">
                    <p className=" lg:text-[21px] text-[17px] font-semibold  ">
                     Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    </p>
                    <span className="lg:text-[21px] text-[17px] font-semibold ">
                      You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </span>
                  </div>
                </div>
              ) : null}
            </li>

            <li
              className="  w-[110%] min-h-25 grid gap-6 bg-[#2d2d2d] border-b-black hover:bg-[#444343] pa"
              onClick={showDropdown3}
            >
              <button className="  w-[95%] mb-3  flex justify-between items-center pt-7 ">
                <h4 className="lg:text-[22px] pl-5 text-[17px] font-semibold ">How do I cancel?</h4>

                {dropdown3 ? (
                  <button className=" text-3xl" onClick={showDropdown}>
                    <VscChromeClose />
                  </button>
                ) : (
                  <button className="text-3xl" onClick={showDropdown}>
                    <VscAdd />
                  </button>
                )}
              </button>
              {dropdown3 ? (
                <div className=" bg-[#2d2d2d] w-full min-h-25   ">
                  <div className=" w-[85%] flex flex-col gap-7 justify-center items-center pl-5">
                    <p className=" lg:text-[21px] text-[17px] font-semibold  ">
                      Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </p>
                    
                  </div>
                </div>
              ) : null}
            </li>

            <li
              className="  w-[110%] min-h-25 grid gap-6 bg-[#2d2d2d]  border-b-black hover:bg-[#444343] pa"
              onClick={showDropdown4}
            >
              <button className="  w-[95%] mb-3  flex justify-between items-center pt-7 ">
                <h4 className="lg:text-[22px] pl-5 text-[17px] font-semibold  text-left ">What can I watch on Netflix?</h4>

                {dropdown4 ? (
                  <button className=" text-3xl" onClick={showDropdown4}>
                    <VscChromeClose />
                  </button>
                ) : (
                  <button className="text-3xl" onClick={showDropdown4}>
                    <VscAdd />
                  </button>
                )}
              </button>
              {dropdown4 ? (
                <div className=" bg-[#2d2d2d] w-full min-h-25   ">
                  <div className=" w-[85%] flex flex-col gap-7 justify-center items-center pl-5">
                    <p className=" text-[17px] font-semibold  lg:text-[21px] ">
                     Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                    
                  </div>
                </div>
              ) : null}
            </li>

            <li
              className="  w-[110%] min-h-25 grid gap-6 bg-[#2d2d2d] border-b-black hover:bg-[#444343] pa"
              onClick={showDropdown5}
            >
              <button className="  w-[95%] mb-3  flex justify-between items-center pt-7 ">
                <h4 className=" text-[17px] font-semibold  lg:text-[22px] pl-5 text-left ">Is Netflix good for kids?</h4>

                {dropdown5 ? (
                  <button className=" text-3xl" onClick={showDropdown5}>
                    <VscChromeClose />
                  </button>
                ) : (
                  <button className="text-3xl" onClick={showDropdown5}>
                    <VscAdd />
                  </button>
                )}
              </button>
              {dropdown5 ? (
                <div className=" bg-[#2d2d2d] w-full min-h-25   ">
                  <div className=" w-[85%] flex flex-col gap-7 justify-center items-center pl-5">
                    <p className=" lg:text-[21px] text-[17px] font-semibold  ">
                      The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                    </p>
                    <span className="lg:text-[21px] text-[17px] font-semibold ">
                      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </span>
                  </div>
                </div>
              ) : null}
            </li>

            


          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQ;
