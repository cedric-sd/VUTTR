import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { ContextTool } from '../../contexts/ContextTool'
import './styles.css'

const Card = ({ id, title, link, description, tags }) => {
  const { handleDeleteModalOpen } = useContext(ContextTool)

  return (
    <div>
      <div className="card">
        <div className="headerCard">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
          <button
            className="buttonSecondaryDanger"
            onClick={() => handleDeleteModalOpen(id)}
          >
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
  id: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array
}

export default Card
