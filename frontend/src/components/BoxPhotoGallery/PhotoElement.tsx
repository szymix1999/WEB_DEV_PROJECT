import axios from "axios";
import React, { useState } from "react";

const PhotoElement: React.FC<{
  image: any;
  full?: boolean;
  refreshPhoto: Function;
}> = ({ image, full, refreshPhoto }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const [path, setPath] = useState(image.path);
  const [title, setTitle] = useState(image.title);
  const [description, setDescription] = useState(image.description);

  const deletePhoto = () => {
    axios
      .delete(`/images/${image["_id"]}`)
      .then((res) => refreshPhoto())
      .catch((err) => console.log(err));
  };

  const editPhoto = () => {
    axios
      .put(`/images/${image["_id"]}`, {
        path,
        title,
        description,
      })
      .then((res) => {
        refreshPhoto();
        setShowAddModal(false);
      })
      .catch((err) => console.log(err));
  };

  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div
        className={`relative p-1 md:p-2 hover:scale-105 hover:cursor-pointer ${
          !full ? "w-1/2" : "w-full"
        }`}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-lg focus:"
          src={
            image?.path ??
            "https://www.unimet.pl/themes/AngarTheme/assets/img/en-default-home_default.jpg"
          }
        />
        {isHover && (
          <div>
            <div className="absolute top-5 flex gap-1 bg-slate-500 text-orange-900 bg-opacity-30 w-20">{image.title}</div>
            <div className="absolute bottom-5 flex gap-1">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-red-600 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={deletePhoto}
              >
                <svg
                  className="fill-current h-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-blue-400 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={() => setShowAddModal(true)}
              >
                <svg
                  className="fill-current h-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
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
                    onClick={editPhoto}
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
    </>
  );
};

export default PhotoElement;
