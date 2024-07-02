function Header() {
    return (
      <>
        <div className="fixed w-[94vw] mx-[3vw] my-[3vh] bg-[#292929] border-[#98F2F5] border-[1px] h-[8vh] flex items-center justify-around z-50 rounded-[10px] ">
          <a href="/" className="cursor-pointer ">
            <img src="/alum-logo.png" alt="" className="h-[2rem] flex" />
          </a>
          <ul>
            <a
              href="/"
              className="hover:text-[#DEE6EF] text-[#98F2F5] cursor-pointer"
            >
              <li>Home</li>
            </a>
          </ul>
        </div>
      </>
    );
  }
  
  export default Header;
  