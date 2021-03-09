import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Modal = ({ children, title }) => {
  return (
    <div className="overlay">
      <div className="content">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node
}

export default Modal
