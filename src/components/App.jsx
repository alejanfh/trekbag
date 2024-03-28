import { useEffect, useState } from 'react'

import BackgroundHeading from './BackgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'
import Sidebar from './sidebar'
import { initialItems } from '../lib/constants'

function App() {
  // const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'))
  // const [items, setItems] = useState(itemsFromLocalStorage || initialItems)

  // () => {} will only run once at the first time
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  )

  const handleAddItems = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    }

    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const handleDeleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
  }

  const handleToggleItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, packed: !item.packed }
      } else return item
    })

    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([])
  }

  const handleResetToInitial = () => {
    setItems(initialItems)
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true }
    })

    setItems(newItems)
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false }
    })

    setItems(newItems)
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          numberOfItemsPacked={items.filter((item) => item.packed).length}
          totalNumberOfItems={items.length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItems={handleAddItems}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  )
}

export default App
