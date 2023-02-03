import React, { useContext } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PhotosContext from '../contexts/Photos.conext';
import Photo from '../components/Photo';

const Favorites = () => {

  const {photosFavorites, setPhotosFavorites} = useContext(PhotosContext);

  return (
    <section title="Tus favoritos" data-masonry='{"percentPosition": true }'>
      <ResponsiveMasonry className="mt-1" columnsCountBreakPoints={{ 320: 1, 540: 2, 767: 3, 920: 4}}>
        <Masonry gutter="2px">
          {
            photosFavorites.map(photo => (
              <Photo key={photo.id} photo={photo} />
            ))
          }
        </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}

export default Favorites