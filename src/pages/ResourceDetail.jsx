import { useContext, useEffect } from "react";
import Header from "../components/Header";
import ResourceContext from "../context/ResourceContext";
import { useParams } from "react-router-dom";

function ResourceDetail() {
  const { selectedResource, fetchResourceById } = useContext(ResourceContext);
  const { id } = useParams();

  useEffect(() => {
    if (!selectedResource || selectedResource._id !== id) {
      fetchResourceById(id);
    }
  }, [id, selectedResource, fetchResourceById]);

  if (!selectedResource) {
    return (
      <>
        <Header />
        <div className="container mx-auto p-6 mt-[15vh]">
          <p className="text-center text-gray-600 text-lg">Loading...</p>
        </div>
      </>
    );
  }

  // Ensure selectedResource.tags is initialized
  const tags = selectedResource.tags || [];

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 mt-[15vh] bg-white shadow-md rounded-lg">
        <div className="flex items-center mb-6">
          {selectedResource.photo && (
            <img
              src={selectedResource.photo}
              alt="Resource"
              className="w-16 h-16 rounded-full mr-4"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {selectedResource.title}
            </h1>
            <p className="text-gray-700 text-sm">{selectedResource.url}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{selectedResource.description}</p>
        {selectedResource.file && (
          <a
            href={selectedResource.file}
            download
            className="text-blue-500 underline mb-4 block"
          >
            Download File
          </a>
        )}
        <div className="flex items-center mb-4">
          <p className="font-medium mr-2">Uploaded by:</p>
          <p>{selectedResource.uploadedBy.name}</p>
        </div>
        <div className="flex items-center mb-4">
          <p className="font-medium mr-2">Created At:</p>
          <p>{new Date(selectedResource.createdAt).toLocaleString()}</p>
        </div>
        {/* Render tags if they exist */}
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResourceDetail;
