import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import Photo from '../components/Photo';
import PhotosContext from '../contexts/Photos.conext';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Home = () => {
  
  const {photos, setPhotos} = useContext(PhotosContext);
  const [featured, setFeatured] = useState(0);

  useEffect(() => {
    getPhotos().then(response => {
      const newList = [];
      response.map(item => {
        const newObject = {
          id: item.id,
          favorites: false,
          color: item.color,
          blur_hash: item.blur_hash,
          description: item.description,
          alt_description: item.alt_description,
          urls: {
            full: item.urls.full,
            small: item.urls.small,
            regular: item.urls.regular
          },
          user: {
            username: item.user.username,
            name: item.user.name,
            profile_image: item.user.profile_image.small,
            instagram_username: item.user.instagram_username
          }
        }
        newList.push(newObject);
      });
      setPhotos([...newList]);
    }).catch(error => {
      console.log(error);
    });
  },[]);

  useEffect(() => {
    setFeatured(Math.floor(Math.random() * photos.length));
  },[photos]);

  const getPhotos = async () => {
    const getData = await fetch('https://api.unsplash.com/search/photos?client_id=5ku3P6bz7HJYXet_sMahAnmqwqDUc6NA7STlf6avwHE&per_page=20&query=animals-wild');
    const data = await getData.json();
    return data.results;
  }

  return (
    <section title="Home" data-masonry='{"percentPosition": true }'>
      { photos.length > 0 && <Photo photo={photos[featured]} main={true} />}
      <ResponsiveMasonry className="mt-1" columnsCountBreakPoints={{ 320: 1, 540: 2, 767: 3, 920: 4}}>
        <Masonry gutter="2px">
          {
            photos.map(photo => (
              <Photo key={photo.id} photo={photo} />
            ))
          }
        </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}

export default Home