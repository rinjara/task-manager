import { fetchImages } from 'api/fetchApi';
import NavBar from 'components/NavBar/NavBar';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Main() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    (async () => {
      const images = await fetchImages();
      setDogImages(images);
      //   console.log(images);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <Carousel>
        {dogImages.map(image => (
          <Carousel.Item key={image}>
            <img className="d-block w-50" src={image} alt={image} />
            <Carousel.Caption>
              <h3>{image}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Main;
