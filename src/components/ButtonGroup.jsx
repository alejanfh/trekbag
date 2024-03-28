import Button from './Button'

export default function ButtonGroup({
  handleResetToInitial,
  handleRemoveAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    {
      text: 'Mark all as complete',
      onClick: handleMarkAllAsComplete,
    },
    {
      text: 'Mark all as incomplete',
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: 'Reset to initial',
      onClick: handleResetToInitial,
    },
    {
      text: 'Remove all items',
      onClick: handleRemoveAllItems,
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
