import Header from "/src/components/Header";
import { Link } from "react-router-dom";

function EventOptions() {
  return (
    <>
      <div className="absolute top-0">
        <Header />
      </div>

      <div className="mt-[15vh]">
        <div className=" [&_*]:border-black [&_*]:w-[40vh] [&_*]:h-[10vh] [&_*]:rounded-2xl flex flex-col justify-center items-center    lg:grid lg:grid-cols-2 lg:gap-4 lg:[&_*]:place-self-center">
          <div className="my-5 border-[2px]">
            <p>
              <Link
                to="/uploadEvent"
                className="text-xl flex justify-center items-center"
              >
                Upload an event
              </Link>
            </p>
          </div>

          <div className="my-5 border-[2px]">
            <p>
              <Link
                to="/"
                className="text-xl flex justify-center items-center"
              >
                Alumni events
              </Link>
            </p>
          </div>
          
          <div className="my-5 border-[2px]">
            <p>
              <Link
                to="/"
                className="text-xl flex justify-center items-center"
              >
                College events
              </Link>
            </p>
          </div>
          
          <div className="my-5 border-[2px]">
            <p>
              <Link
                to="/previousEvents"
                className="text-xl flex justify-center items-center"
              >
                Pervious events
              </Link>
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default EventOptions;
