import React from "react";
import PhotoElement from "./PhotoElement";

const BoxSection: React.FC<{ images: any[]; refreshPhoto: Function }> = ({
  images,
  refreshPhoto,
}) => {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            {images?.[0] && (
              <PhotoElement image={images?.[0]} refreshPhoto={refreshPhoto} />
            )}
            {images?.[1] && (
              <PhotoElement image={images?.[1]} refreshPhoto={refreshPhoto} />
            )}
            {images?.[2] && (
              <PhotoElement
                image={images?.[2]}
                full
                refreshPhoto={refreshPhoto}
              />
            )}
          </div>
          <div className="flex flex-wrap w-1/2">
            {images?.[3] && (
              <PhotoElement
                image={images?.[3]}
                full
                refreshPhoto={refreshPhoto}
              />
            )}
            {images?.[4] && (
              <PhotoElement image={images?.[4]} refreshPhoto={refreshPhoto} />
            )}
            {images?.[5] && (
              <PhotoElement image={images?.[5]} refreshPhoto={refreshPhoto} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxSection;
