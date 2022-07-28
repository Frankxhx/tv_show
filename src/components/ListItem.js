import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({id, image, name, rating}) => {
  return (
    <Link to={`/singleshow/${id}`} className='listItem' >
        <img src={image} alt={name} />
        <div className='listItem_info' >
            <h4 className='info_name'>{name} </h4>
            <h4 className='info_rating'>{rating} </h4>
        </div>
    </Link>
  )
}

export default ListItem