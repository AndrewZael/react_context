import React, { useState, useContext } from 'react'
import { Blurhash } from "react-blurhash";
import PhotosContext from '../contexts/Photos.conext';

const Photo = (props) => {

  const [blurImg, setBlurImg] = useState(true);
  const [fav, setFav] = useState(false);
  const {photos} = useContext(PhotosContext);
  const {photosFavorites, setPhotosFavorites} = useContext(PhotosContext);

  const setfavorite = (id) => {
    const photofav = photos.find(photo => photo.id === id);
    setPhotosFavorites([...photosFavorites, photofav]);
    setFav(!fav);
  }

  return (
    <article className={`photo position-relative ${props.main ? 'photo-main overflow-hidden' : ''}`}>
        { blurImg && 
        <Blurhash 
            className="min-h-100"  
            hash={props.photo.blur_hash} 
            width="100%" 
            height={300} /> 
        }
        <div className="info-photo align-items-end justify-content-between d-flex position-absolute bottom-0 start-0 px-3 py-4 gap-3 z-1 text-light w-100">
          <div className="d-flex align-items-start">
            <img 
              src={props.photo.user.profile_image} 
              alt={props.photo.user.name} className="rounded-circle" />
            <div className="ms-3 lh-sm">
              <span className="d-block">{props.photo.user.name}</span>
              <small>
                {props.photo.user.instagram_username ?
                  <a href={`https://www.instagram.com/${props.photo.user.instagram_username}`} 
                  target="_blank" rel="noopener noreferrer" className="link-light">
                    @{props.photo.user.instagram_username}
                  </a> : null
                }
              </small>
              { props.photo.description ?
                <p className="mt-2 mb-0 small">{props.photo.description}</p> : null
              }
            </div>
          </div>
          <span onClick={() => setfavorite(props.photo.id)} 
          className={`material-icons favorite ${fav && 'text-danger'}`}>
            {fav ? 'favorite' : 'favorite_border'}
          </span>
        </div>
        <img src={props.main ? props.photo.urls.regular : props.photo.urls.small} 
            alt={props.photo.alt_description} 
            className={`w-100 
            ${blurImg ? 'd-none' : 'd-block'} 
            ${props.main && 'position-absolute top-0 bottom-0 my-auto'}`} onLoad={() => setBlurImg(false)} />
    </article>
  )
}

export default Photo