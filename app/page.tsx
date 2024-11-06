import React from 'react'
import Home from './home/page'
import Products from './product/page'
import About from './about/page'
import Contact from './contact/page'

export default function page() {
  return (
    <div>
      <Home/>
      <hr/>
      <About/>
      <hr/>
      <Products/>
      <hr/>
      <Contact/>
    </div>
  )
}
