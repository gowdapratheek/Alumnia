import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="h-[100vh] w-[98vw] flex flex-col justify-end items-center overflow-x-clip">
        <div className="w-[96vw] h-[30vh] lg:h-[25vh] mx-[1vw] my-[3vh]  border-black border-[1px] z-50 rounded-[10px] flex flex-col justify-end">
          <div className="flex items-center justify-around h-[27vh]">
            <Link to="/" className="cursor-pointer ">
              <h1 className="text-2xl font-bold">ALUMNIA</h1>
            </Link>

            <ul className="relative top-[-3vh] py-5">
              <li className="py-1">
                <Link
                  to="/"
                  className="hover:text-gray-700 cursor-pointer font-semibold tracking-wide "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-gray-700 cursor-pointer font-semibold tracking-wide"
                >
                  Faq&apos;s
                </Link>
              </li>
            </ul>

            <ul>
              <li className="py-1">
                <Link
                  to="/events"
                  className="hover:text-gray-700 cursor-pointer font-semibold tracking-wide"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-gray-700 cursor-pointer font-semibold tracking-wide"
                >
                  Resources
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to="/about"
                  className="hover:text-gray-700 cursor-pointer font-semibold tracking-wide"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-700 cursor-pointer font-semibold tracking-wide"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className=" border-t-[1px] border-gray-400  rounded-b-[10px] p-1">
            <div className="h-[10vh] lg:h-[6vh] w-[96vw] flex flex-col   lg:flex-row lg:items-center">
              <div className="h-[10vh] lg:h-[6vh] w-[100%] lg:w-[50%] lg:flex justify-around items-center pl-[2vh]">
                <p className="font-normal ">
                  &copy;2024 Alumni - All Rights Reserved.
                </p>
                <p>Privacy policy</p>
                <p>Terms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
