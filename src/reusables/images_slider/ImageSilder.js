import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import nextIcon from '../../images/next-more-icon.png';
import './ImageSlider.css';

const ImageSilder = (props) => {
  const dispatch = useDispatch();
  const imagesContainerRef = useRef(null);
  const { imagesArray, freeze, popUp, scroll } = props;
  const [scrollButtons, setShowScrolls] = useState(false);
  const [imageShown, setImageShown] = useState(1);
  const [containerWidth, setContainerWidth] = useState(null);
  const [scrollTo, setScrollTo] = useState(1);

  const nextImage = () => {
    if (imageShown < imagesArray.length) {
      setImageShown(imageShown + 1);
    }
  };

  const previousImage = () => {
    if (imageShown - 1 >= 1) {
      setImageShown(imageShown - 1);
    }
  };

  useEffect(() => {
    setContainerWidth(imagesContainerRef.current.offsetWidth);
  }, []);

  if (scrollTo !== imageShown) {
    if (imagesContainerRef.current) {
      imagesContainerRef.current.scrollTo({
        top: 0,
        left: (imageShown - 1) * containerWidth,
        behavior: 'smooth',
      });
      setScrollTo(imageShown);
    }
  }

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className="images-slider-container"
      onMouseOver={() => setShowScrolls(true)}
      onMouseLeave={() => { setShowScrolls(false); }}
    >
      <div className="image-slider-video-wrap" ref={imagesContainerRef}>

        {
            imagesArray.map((image) => (
              <div className="my_store_image-wrapp" key={image}>
                <img src={image} alt="" className="my_store_image" />
              </div>
            ))
          }

      </div>

      {!freeze && imagesArray.length !== 1 ? (
        <>
          {scrollButtons || scroll? (
            <>
              <div className={popUp ? 'image-slider-buttons-wrapper popUp-dots' : 'image-slider-buttons-wrapper'}>
                <div>
                  <button
                    className="button-next-image-left"
                    onClick={previousImage}
                  >
                    <img src={nextIcon} alt="" />
                  </button>
                  <button
                    className="button-next-image-right"
                    onClick={nextImage}
                  >
                    <img src={nextIcon} alt="" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {!freeze && imagesArray.length > 1 ? (
        <div className={popUp ? 'image-sliders-dots-wrap popUp-dots' : 'image-sliders-dots-wrap'}>
          {imagesArray.map((image, id) => (
            <div
              className={
                id + 1 === imageShown
                  ? 'image-slider-dots current-dot'
                  : 'image-slider-dots'
              }
              onClick={() => dispatch(setImageShown(id + 1))}
              key={image}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageSilder;
