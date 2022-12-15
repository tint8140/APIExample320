import { useState, useEffect } from "react";

export function MarsGallery(props) {
  const [currentEl, setCurrentEl] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEl((currentEl) => {
        let nextEl = currentEl + 1;
        if (nextEl >= 3) nextEl = 0;
        return nextEl;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const imageEls = props.images.slice(0, 3).map((imageData, index) => (
    <div
      key={index}
      className={`marsImage ${currentEl === index ? "showImage" : "hideImage"}`}
    >
      <img src={imageData.img_src} alt="marsImage" />
    </div>
  ));

  return <div className="galleryHolder"> {imageEls}</div>;
}
