function Footer() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-end">
        <div className="w-[98vw] h-[15vh] mx-[1vw] my-[3vh]  border-black border-[1px] z-50 rounded-[10px] flex flex-col justify-end">
          <div className="flex items-center justify-around h-[12vh]">
            <a href="/" className="cursor-pointer ">
              <h1 className="text-2xl fon">Alumnia</h1>
            </a>

            <ul>
              <li>
                <a
                  href="/"
                  className="hover:text-[#DEE6EF] cursor-pointer font-semibold tracking-wide"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#DEE6EF] cursor-pointer font-semibold tracking-wide"
                >
                  Faq&apos;s
                </a>
              </li>
            </ul>
          </div>

          <div className=" border-t-[1px] border-gray-400 bg-[#595656] rounded-b-[10px]">
            <div className="h-[5vh] w-[98vw] flex items-center justify-center">
              <p className="">&copy;2024 Alumni - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
