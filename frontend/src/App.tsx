import { useState } from 'react'
import ButtonUser from './components/RedButtonUser'
import Header from './components/Header'
import SalesCard from './components/SalesCard'

function App() {

  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
