import Header from "/src/components/Header";
import { useState } from "react";

function UploadEvent() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <Header />
      <div className="absolute top-[15vh] mb-40 h-[85vh] w-[100vw] flex justify-center items-center">
        <div className=" flex h-[60vh] w-[90vw] border-2 border-black rounded-[10px]">
          <form className="flex flex-col h-[60vh] w-[90vw] justify-center px-[5vw]">
            <label htmlFor="name">Name of the events</label>
            <input
              className="bg-black w-[60vw] lg:w-[30vw] h-[7vh] bg-transparent border-2 my-4 lg:my-3 border-[#434343] p-2 rounded-[10px]"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="desc">Description of the events</label>
            <input
              className="bg-black w-[60vw] lg:w-[30vw] h-[7vh] bg-transparent border-2 my-4 lg:my-3 border-[#434343] p-2 rounded-[10px]"
              id="desc"
              type="text"
              placeholder="Description of event"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />

            <label htmlFor="photo">Upload photos/poster of the events</label>
            <input
              className="bg-black w-[60vw] lg:w-[30vw] h-[7vh] bg-transparent border-2 my-4 lg:my-3 border-[#434343] p-2 rounded-[10px]"
              id="photo"
              type="text"
              placeholder="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadEvent;
