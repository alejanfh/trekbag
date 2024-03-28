export default function Button({ buttonType, children, onClick }) {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`btn ${buttonType === 'secondary' ? 'btn-secondary' : ''}`}
    >
      {children}
    </button>
  )
}
