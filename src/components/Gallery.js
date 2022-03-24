import React, { useState } from "react";
import { useGalleryContext } from "../context/GalleryContext";
const Gallery = () => {
  const [preview, setPreview] = useState([]);

  const gallerycontext = useGalleryContext();
  console.log(gallerycontext);
  const previewimg = (e) => {
    if (e) {
      const Urls = [];
      for (let i = 0; i < e.length; i++) {
        Urls.push(URL.createObjectURL(e[i]));
        setPreview(Urls);
      }
      console.log(Urls);
    }
  };
  const delone = (e) => {
    setPreview(
      preview.filter((prev, i) => {
        return i !== e;
      })
    );
  };

  return (
    <div className="galery-main">
      <h1>Gallery</h1>

      <div className="gallery">
        <div className="input-image">
          <label htmlFor="image-input">Choose image</label>
          <input
            type="file"
            id="image-input"
            accept="image/png, image/jpeg"
            multiple={true}
            onChange={(e) => previewimg(e.target.files)}
            hidden={true}
          />
        </div>
        <div className="images">
          {preview.length
            ? preview.map((img, i) => {
                return (
                  <div className="image" key={i}>
                    <div className="exit" onClick={() => delone(i)}>
                      X
                    </div>
                    <img src={img} alt="preview" />{" "}
                  </div>
                );
              })
            : null}
        </div>

        {preview.length ? (
          <div className="upload-action">
            <button>Upload image</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Gallery;
