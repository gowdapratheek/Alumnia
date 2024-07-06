function Footer() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-end">
        <div className="w-[98vw] h-[20vh] mx-[1vw] my-[3vh] bg-[#292929] border-[#98F2F5] border-[1px] z-50 rounded-[10px] ">
          <div className="flex items-center justify-around">
            <a href="/" className="cursor-pointer ">
              <img src="/alum-logo.png" alt="" className="h-[2rem] flex" />
            </a>

            <ul>
              <li>
                <a
                  href="/"
                  className="hover:text-[#DEE6EF] text-[#98F2F5] cursor-pointer font-semibold tracking-wide"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>

          <div className="h-[5vh] w-[98vw] border-2 ">
            <div className=" flex justify-center items-center">
              <p className="flex self-center"> &copy;2024 Alumni - All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
