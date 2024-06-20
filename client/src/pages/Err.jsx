function Err() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] w-[vw]">
        <h1 className="text-[5rem] tracking-[0.5rem] font-[900]">404</h1>
        <p className="text-[3rem] font-light">Page not found</p>
        <a href="/" className="cursor-pointer mt-8">
          <div className="hover:bg-white border-2 border-white hover:text-black text-white rounded-[10px] p-4 animate-bounce ">
            <p>Back to home</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Err;
