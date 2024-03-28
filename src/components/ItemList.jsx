import Select from 'react-select'
import EmptyView from './EmptyView'
import { useMemo, useState } from 'react'

const sortingOptions = [
  {
    label: 'Sort by default',
    value: 'default',
  },
  {
    label: 'Sort by packed',
    value: 'packed',
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked',
  },
]

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState('default')

  //Es como un useEffect pero para funciones, para que no se
  //realicen cada render (por ejemplo el padre)
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed
        }

        if (sortBy === 'unpacked') {
          return a.packed - b.packed
        }

        return
      }),
    [items, sortBy]
  )

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className='sorting'>
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        )
      })}
    </ul>
  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className='item'>
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type='checkbox'
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
