import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import Photo from '../components/Photo';
import PhotosContext from '../contexts/Photos.conext';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Message from '../components/Message';
import wolf from '../assets/img/wolf.svg';

const Home = () => {
  
  const {
    photos, 
    setPhotos,
    init,
    setInit
  } = useContext(PhotosContext);
  
  const [featured, setFeatured] = useState(0);
  const [random, setRandom] = useState(false);

  useEffect(() => {
    if(!init){
      getPhotos().then(response => {
        const newList = [];
        response.forEach(item => {
          const newObject = {
            id: item.id,
            favorite: false,
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
      setInit(true); 
    }

  },[init, setInit, setPhotos]);

  useEffect(() => {
      if(photos.length > 0 && !random){
        setFeatured(Math.floor(Math.random() * photos.length))
        setRandom(true);
      }
  },[photos, random]);

  const getPhotos = async () => {
    const getData = await fetch('https://api.unsplash.com/search/photos?client_id=5ku3P6bz7HJYXet_sMahAnmqwqDUc6NA7STlf6avwHE&per_page=20&query=animals-wild');
    const data = await getData.json();
    return data.results;
  }

  return (
    <section title="Home" data-masonry='{"percentPosition": true }'>
      { photos.length > 0 && <Photo photo={photos[featured]} main={true} />}
      
      { photos.length > 0 ? <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 768: 2, 1400: 3, 1700: 4}}>
        <Masonry gutter="1px">
          {
            photos.map(photo => (
              <Photo key={photo.id} photo={photo} />
            ))
          }
        </Masonry>
      </ResponsiveMasonry> : 
      <Message 
      img={wolf}
      title="Un error ha ocurrido"
      message="Lo sentimos, tenemos un problema al cargar la información, por favor inténtalo nuevamente" />}
    </section>
  )
}

export default Home