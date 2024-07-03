import React from 'react'

type Props = {
  num: number
}

const App = ({ num }: Props) => {
  const [count, setCount] = React.useState(num)
  return (
    <main>
      <div>{count}</div>
      <div onClick={() => setCount(count + 1)}>+</div>
      <div onClick={() => setCount(count - 1)}>-</div>
    </main >
  )
}

export default App
