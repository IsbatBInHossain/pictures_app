import searchImage from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = (term) => {
    searchImage(term)
      .then((data) => setImages(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
