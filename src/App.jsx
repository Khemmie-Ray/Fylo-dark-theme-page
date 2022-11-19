import { useState } from 'react'
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
