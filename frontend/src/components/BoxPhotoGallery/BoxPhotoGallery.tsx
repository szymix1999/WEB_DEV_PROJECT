import React from "react";
import axios from "axios";

const BoxPlayersList: React.FC<any> = () => {
  const [images, setImages] = React.useState([]);

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

  console.log(images);

  return <div className="flex flex-col">TUSTJ BEDA GALERYA</div>;
};

export default BoxPlayersList;
