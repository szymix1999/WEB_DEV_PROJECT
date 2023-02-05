import React, { useState } from "react";
import axios from "axios";
import BoxSection from "./PhotoSection";

const BoxPlayersList: React.FC<any> = () => {
  const [images, setImages] = React.useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const [path, setPath] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const mounted: any = React.useRef();
  React.useEffect(() => {
    if (!mounted.current) {
      getPhotos();
      mounted.current = true;
    } else {
      // componentDidUpdate
    }
  });

  const getPhotos = () => {
    axios
      .get("/images")
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  };

  const addPhoto = () => {
    axios
      .post("/images", {
        path,
        title,
        description,
      })
      .then((res) => {
        getPhotos();
        setShowAddModal(false);
      })
      .catch((err) => console.log(err));
  };

  const chunks = [];
  const chunkSize = 6;

  for (let i = 0; i < images.length; i += chunkSize) {
    chunks.push(images.slice(i, i + chunkSize));
  }

  return (
    <div>
      {showAddModal && (
        <div>
          <div className="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <label className="block">Tytuł</label>
                      <input
                        value={title}
                        type="text"
                        placeholder="Tytuł"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 mb-5"
                        onChange={(e) => setTitle(e?.target?.value)}
                      />
                      <label className="block">Opis</label>
                      <input
                        value={description}
                        type="text"
                        placeholder="Opis"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 mb-5"
                        onChange={(e) => setDescription(e?.target?.value)}
                      />
                      <label className="block">Ścieka</label>
                      <input
                        value={path}
                        type="text"
                        placeholder="Ścieka"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 mb-5"
                        onChange={(e) => setPath(e?.target?.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={addPhoto}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-500 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowAddModal(true)}
      >
        Dodaj obrazek
      </button>
      {chunks.map((e) => (
        <BoxSection images={e} refreshPhoto={getPhotos} />
      ))}
    </div>
  );
};

export default BoxPlayersList;
