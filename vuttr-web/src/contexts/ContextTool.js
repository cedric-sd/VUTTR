import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import useSWR, { mutate } from 'swr'

export const ContextTool = createContext({})

// let options = {
//   method: 'DELETE',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json;charset=UTF-8'
//   }
// }

const url = 'http://localhost:3000/tools'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function ToolProvider({ children }) {
  const [isModalDeleteToolOpen, setIsModalDeleteToolOpen] = useState(false)
  const [isModalAddToolOpen, setIsModalAddToolOpen] = useState(false)
  const [toolToDelete, setToolToDelete] = useState(0)

  const responseGetTools = useSWR(url, fetcher)
  const listTools = responseGetTools.data

  function handleAddToolModalOpen() {
    setIsModalAddToolOpen(true)
  }

  function handleAddModalClose() {
    setIsModalAddToolOpen(false)
  }

  function handleDeleteModalClose() {
    setIsModalDeleteToolOpen(false)
  }

  function handleDeleteModalOpen(id) {
    setToolToDelete(id)
    setIsModalDeleteToolOpen(true)
  }

  async function handleDeleteTool() {
    if (toolToDelete === 0) return

    let options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    await fetch(`${url}/${toolToDelete}`, options).then((response) =>
      response.json()
    )

    mutate(url)
    handleDeleteModalClose()
  }

  async function handleAddNewTool(newTool) {
    if (newTool === null) return

    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        title: newTool.title,
        link: newTool.link,
        description: newTool.description,
        tags: [`${newTool.tags}`]
      })
    }

    await fetch(url, options).then((response) => response.json())

    mutate(url)
    handleAddModalClose()
  }

  return (
    <ContextTool.Provider
      value={{
        isModalDeleteToolOpen,
        handleDeleteModalClose,
        handleDeleteModalOpen,
        handleDeleteTool,
        listTools,
        isModalAddToolOpen,
        handleAddToolModalOpen,
        handleAddModalClose,
        handleAddNewTool
      }}
    >
      {children}
    </ContextTool.Provider>
  )
}

ToolProvider.propTypes = {
  children: PropTypes.node
}
