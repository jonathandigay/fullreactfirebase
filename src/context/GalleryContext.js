import { useContext, useState, createContext } from "react";

const GalleryContext = createContext();

export const useGalleryContext = () => {
  return useContext(GalleryContext);
};

export const GalleryContextProvider = ({ Children }) => {
  const [storage, setStorage] = useState([]);

  const values = {
    storage,
    setStorage,
  };
  return (
    <GalleryContext.Provider value={values}>{Children}</GalleryContext.Provider>
  );
};
