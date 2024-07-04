import Header from "../components/Header";
import Wave from "../components/Wave";

function Who() {
  return (
    <div>
      <Header />
      <div className="h-[90vh] w-[100vw] absolute top-[9vh] flex justify-center items-center">
        <div className="h-[45vh] w-[80vw] lg:w-[40vw] border-2 border-[#98F2F5] rounded-[15px] flex flex-col  items-center bg-[#1c1b1b]">
          <h1 className=" text-[2.25rem] font-extrabold tracking-widest uppercase my-2">
            Alumnia
          </h1>
          <p className="font-bold">You are</p>
          <div className="bg-[#000000] hover:opacity-70 h-[6vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-4 border-[1px] rounded">
            <a
              href="/signup"
              className="text-center font-semibold tracking-wide"
            >
              Alumni
            </a>
          </div>
          <div className="bg-[#000000] hover:opacity-70 h-[6vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-4 border-[1px] rounded">
            <a
              href="/signup"
              className="text-center font-semibold tracking-wide"
            >
              Student
            </a>
          </div>
          <div className="bg-[#000000] hover:opacity-70 h-[6vh] w-[60vw] lg:w-[30vw] flex flex-col justify-evenly mt-4 border-[1px] rounded">
            <a
              href="/signup"
              className="text-center font-semibold tracking-wide"
            >
              Institution
            </a>
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
}

export default Who;
