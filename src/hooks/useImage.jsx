import { useState } from "react";

export function useImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState();

  function changeImage(e, content) {
    e.preventDefault();
    setIsLoaded(false);

    if (!content) return;

    setImage(
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${content}`}
        alt=""
        onLoad={() => {
          setIsLoaded(true);
          console.log(isLoaded);
        }}
      />,
    );
  }

  return {
    image,
    changeImage,
    isLoaded,
  };
}
