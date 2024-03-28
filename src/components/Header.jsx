import Logo from './Logo'
import Counter from './Counter'

export default function Header({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  )
}
