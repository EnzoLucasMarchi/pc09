import {products as initialProducts} from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from './components/Header.jsx'


function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilter] = useState({
    category : 'all',
    minPrice : 0
  })

  const filterProducts =(products)=>{
    return products.filter(product =>{
      return(
        product.price >= filters.minPrice && (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header/>
          <Products products={filteredProducts}/>
    </>

  )
}

export default App
