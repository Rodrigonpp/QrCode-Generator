import { useState } from "react";

export function useImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState();
  const [prevContent, setPrevContent] = useState();

  function changeImage(content) {
    setIsLoaded(false);

    if (!content) return;

    setImage(() => (
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${content}`}
        alt={content}
        onLoad={() => {
          setIsLoaded(true);
          setPrevContent(content);
        }}
      />
    ));
  }

  return {
    image,
    changeImage,
    prevContent,
    isLoaded,
  };
}
