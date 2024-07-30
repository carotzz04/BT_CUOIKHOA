import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import SearchBar from './SearchBar';
import CategoryButton from './CategoryButton';

// import images
import imgWoman from './assets/images/human/woman.png';
import imgMan from './assets/images/human/man.jpg';
import imgKids from './assets/images/human/kids.jpeg';

import imgBird from './assets/images/animal/bird.png';
import imgCat from './assets/images/animal/cat.png';
import imgDog from './assets/images/animal/dog.png';
import imgFish from './assets/images/animal/fish.jpeg';
import imgTiger from './assets/images/animal/tiger.jpeg';

import imgDrawing from './assets/images/art/drawing.jpeg';
import imgEyes from './assets/images/art/eyes.jpg';
import imgFace from './assets/images/art/face.png';
import imgFruit from './assets/images/art/fruit.png';
import imgHouse from './assets/images/art/house.jpeg';

import imgBridge from './assets/images/nature/bridge.jpeg';
import imgForest from './assets/images/nature/forest.jpeg';
import imgNightsky from './assets/images/nature/nightsky.jpeg';
import imgRiver from './assets/images/nature/river.jpeg';
import imgSea from './assets/images/nature/sea.jpeg';

const images = [

  { src: imgWoman , title: 'Woman', category: 'Human' },
  { src: imgKids, title: 'Kids', category: 'Human' },
  { src: imgMan, title: 'Man', category: 'Human' },
  
  { src: imgBird, title: 'Bird', category: 'Animal' },
  { src: imgCat, title: 'Cat', category: 'Animal' },
  { src: imgDog, title: 'Dog', category: 'Animal' },
  { src: imgFish, title: 'Fish', category: 'Animal' },
  { src: imgTiger, title: 'Tiger', category: 'Animal' },

  { src: imgDrawing, title: 'Drawing', category: 'Art' },
  { src: imgEyes, title: 'Eyes', category: 'Art' },
  { src: imgFace, title: 'Face', category: 'Art' },
  { src: imgFruit, title: 'Fruit', category: 'Art' },
  { src: imgHouse, title: 'House', category: 'Art' },

  { src: imgBridge, title: 'Bridge', category: 'Nature' },
  { src: imgForest, title: 'Forest', category: 'Nature' },
  { src: imgNightsky, title: 'Night sky', category: 'Nature' },
  { src: imgRiver, title: 'River', category: 'Nature' },
  { src: imgSea, title: 'Sea', category: 'Nature' },

];

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredImages = images.filter(image => {
    return (
      (category === 'All' || image.category === category) &&
      image.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="categories">
        {['All', 'Animal', 'Art', 'Human', 'Nature'].map(cat => (
          <CategoryButton
            key={cat}
            category={cat}
            setCategory={setCategory}
            currentCategory={category}
          />
        ))}
      </div>
      <div className="image-gallery">
        {filteredImages.map((image, index) => (
          <ImageComponent key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
