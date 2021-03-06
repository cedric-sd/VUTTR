import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Card from '../../components/Card'
import './styles.css'

const Main = () => {
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
          <button className="buttonPrimaryNeutral">
            <FontAwesomeIcon icon={faPlus} /> Adicionar
          </button>
        </div>

        <Card
          title="Javascript"
          link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
          description="Uma descrição de javascript"
          tags={['web', 'browser', 'linguagem']}
        />
        <Card
          title="React.js"
          link="https://pt-br.reactjs.org/"
          description="Uma descrição que pode ser bem detalhada"
          tags={['library']}
        />
        <Card
          title="Next.js"
          link="https://nextjs.org/"
          description="Uma descrição de Next.js"
          tags={['framework', 'production']}
        />
        <Card
          title="React Native"
          link="https://reactnative.dev/"
          description="Uma descrição React Native"
          tags={['mobile', 'default']}
        />
      </div>
    </div>
  )
}

export default Main
