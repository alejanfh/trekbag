import Button from './Button'
import { useItemsStore } from '../stores/itemsStore'

export default function ButtonGroup() {
  const secondaryButtons = [
    {
      text: 'Mark all as complete',
      onClick: useItemsStore((state) => state.markAllAsComplete),
    },
    {
      text: 'Mark all as incomplete',
      onClick: useItemsStore((state) => state.markAllAsIncomplete),
    },
    {
      text: 'Reset to initial',
      onClick: useItemsStore((state) => state.resetToInitial),
    },
    {
      text: 'Remove all items',
      onClick: useItemsStore((state) => state.removeAllItems),
    },
  ]

  return (
    <section className='button-group'>
      {secondaryButtons.map((button) => {
        return (
          <Button
            buttonType='secondary'
            key={button.text}
            onClick={button.onClick}
            type='secondary'
          >
            {button.text}
          </Button>
        )
      })}
    </section>
  )
}
