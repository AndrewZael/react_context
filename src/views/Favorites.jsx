import React, { useContext } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PhotosContext from '../contexts/Photos.conext';
import Photo from '../components/Photo';
import Message from '../components/Message';
import wolf from '../assets/img/wolf.svg';

const Favorites = () => {

  const {photosFavorites} = useContext(PhotosContext);

  return (
    <section title="Tus favoritos" data-masonry='{"percentPosition": true }'>
      { photosFavorites.length > 0 ? <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 768: 2, 1400: 3, 1700: 4}}>
        <Masonry gutter="2px">
          {
            photosFavorites.map(photo => (
              <Photo key={photo.id} photo={photo} />
            ))
          }
        </Masonry>
      </ResponsiveMasonry> : 
      <Message 
        img={wolf}
        title="Está un poco vacío por aquí"
        message="Aún no tienes ninguna foto en tus favoritos" /> }
    </section>
  )
}

export default Favorites