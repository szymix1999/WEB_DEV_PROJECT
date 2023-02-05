import React from "react";

import BoxPhotoGallery from "../../components/BoxPhotoGallery/BoxPhotoGallery";

const MainPage: React.FC<any> = ({ title, box }: any): JSX.Element | null => {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} - Gallery`;
    } else {
      document.title = `Witamy!`;
    }
  });

  return (
    <div className="flex flex-col w-full h-full">
      <BoxPhotoGallery />
    </div>
  );
};

export default MainPage;
