import React from 'react'

const Message = ({ img, title, message }) => {
  return (
    <article className="d-flex flex-column align-items-center pt-5 pt-md-0 justify-content-md-center vh-100 text-center px-4">
        <img src={img} alt={title} className="mb-3 message-img" />
        <h1 className="h2">{title}</h1>
        <p>{message}</p>
    </article>
  )
}

export default Message