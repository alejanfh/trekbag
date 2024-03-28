import ButtonGroup from './ButtonGroup'
import AddItemForm from './AddItemForm'

export default function Sidebar({
  handleAddItems,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={handleAddItems} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  )
}
