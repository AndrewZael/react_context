import React, { useState } from 'react'
import { Blurhash } from "react-blurhash";

const Photo = (props) => {
  const [blurImg, setBlurImg] = useState(true);

  return (
    <article className="photo position-relative">
        { blurImg && 
        <Blurhash 
            className="min-h-100"  
            hash={props.photo.blur_hash} 
            width="100%" 
            height={300} /> 
        }
        <div className="info-photo position-absolute bottom-0 start-0 p-3 z-1 text-light w-100">
          <div className="d-flex align-items-center">
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
            </div>
          </div>
          {
            props.photo.description ?
              <p className="mt-2 mb-0 small">{props.photo.description}</p> : null
          }
        </div>
        <img src={props.photo.urls.small} 
            alt={props.photo.alt_description} 
            className={`position-relative w-100 ${blurImg ? 'd-none' : 'd-block'}`} onLoad={() => setBlurImg(false)} />
    </article>
  )
}

export default Photo