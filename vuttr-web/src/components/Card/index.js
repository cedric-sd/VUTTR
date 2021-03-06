import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Card = ({ title, link, description, tags }) => {
  return (
    <div>
      <div className="card">
        <div className="headerCard">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
          <button className="buttonSecondaryDanger">
            <FontAwesomeIcon icon={faTrash} /> Remover
          </button>
        </div>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <h5 key={index}>#{tag}</h5>
          ))}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array
}

export default Card
