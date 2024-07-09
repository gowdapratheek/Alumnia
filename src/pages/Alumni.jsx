function Alumni() {
  return (
    <>
      <div className="relative">
        <label className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight flex items-center justify-center w-full">
          <input
            type="file"
            accept="image/*"
            className="hidden"
          />
          <span>Choose a file</span>
        </label>
      </div>
    </>
  );
}

export default Alumni