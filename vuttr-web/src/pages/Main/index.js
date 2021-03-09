import React, { useState, useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import Card from '../../components/Card'
import Modal from '../../components/Modal'

import { ContextTool } from '../../contexts/ContextTool'
import './styles.css'

const Main = () => {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const {
    listTools,
    isModalDeleteToolOpen,
    isModalAddToolOpen,
    handleDeleteModalClose,
    handleDeleteTool,
    handleAddToolModalOpen,
    handleAddModalClose,
    handleAddNewTool
  } = useContext(ContextTool)

  const newTool = {
    title,
    link,
    description,
    tags
  }

  // if (error) return <h1>{error}</h1>

  return (
    <div className="container">
      <div className="toolbar">
        <h1>VUTTR</h1>
        <h4>Very Useful Tools to Remember</h4>
        <div className="wraperInputs">
          <div className="search">
            <input
              type="text"
              className="searchInput"
              placeholder="Digite aqui sua pesquisa..."
            />
            <div className="checkboxSearchTags">
              <input type="checkbox" id="cbTags" name="cbTags" checked />
              <label htmlFor="cbTags">Pesquisar somente tags</label>
            </div>
          </div>
          <button
            className="buttonPrimaryNeutral"
            onClick={handleAddToolModalOpen}
          >
            <FontAwesomeIcon icon={faPlus} /> Adicionar
          </button>
        </div>

        {isModalAddToolOpen ? (
          <Modal
            title={
              <>
                <FontAwesomeIcon icon={faPlus} /> Adicionar nova ferramenta
              </>
            }
          >
            <div className="inputContainer">
              <div className="input">
                <label htmlFor="name">Nome da ferramenta</label>
                <input
                  className="inputDefault"
                  type="text"
                  id="name"
                  placeholder="Nome"
                  name={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="link">Link da ferramenta</label>
                <input
                  className="inputDefault"
                  type="text"
                  id="link"
                  placeholder="link"
                  name={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="description">Descrição da ferramenta</label>
                <textarea
                  type="text"
                  className="inputDefault"
                  id="description"
                  placeholder="descrição pode ser feita aqui"
                  name={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="listTag">Tags</label>
                <input
                  className="inputDefault"
                  type="text"
                  id="listTag"
                  placeholder="#tag"
                  name={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </div>
            <div className="buttonsModal">
              <button
                className="buttonSecondaryDanger"
                onClick={handleAddModalClose}
              >
                Cancelar
              </button>
              <button
                className="buttonPrimaryNeutral"
                onClick={() => handleAddNewTool(newTool)}
              >
                Adicionar
              </button>
            </div>
          </Modal>
        ) : null}

        {isModalDeleteToolOpen ? (
          <Modal
            title={
              <>
                <FontAwesomeIcon icon={faTrash} /> Remover ferramenta
              </>
            }
          >
            <h3>Tem certeza que deseja deletar a ferramenta?</h3>
            <div className="buttonsModal">
              <button
                className="buttonSecondaryDanger"
                onClick={handleDeleteModalClose}
              >
                Cancelar
              </button>
              <button
                className="buttonPrimaryNeutral"
                onClick={handleDeleteTool}
              >
                Deletar
              </button>
            </div>
          </Modal>
        ) : null}

        {listTools
          ? listTools.map((tool) => {
              return (
                <Card
                  key={tool.id}
                  id={tool.id}
                  title={tool.title}
                  link={tool.link}
                  description={tool.description}
                  tags={tool.tags}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Main
