import React, { useEffect, useState } from 'react';
import './App.css';
import Photo from './components/Photo';

function App() {
  const baseUrl = 'https://photos.timblo.us';
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (images.length === 0) {
      fetch(`${baseUrl}/images`)
      .then((res) => res.json())
      .then((data) => setImages(data.map(image => image.name)));
    }
  }, [images]);
  
  useEffect(() => {
    if (images.length > 0) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      if (!currentImage) {
        setCurrentImage(randomImage)
      }
      setInterval(() => {
        setCurrentImage(randomImage);
      }, 15000);
    }
  }, [images, currentImage]);

  return (
    <div className="App">
      {currentImage && (
        <Photo url={`${baseUrl}/${currentImage}`} />
      )}
    </div>
  );
}

export default App;
