import { useState } from 'react'
import './App.css'
import Nav from './navigation/Nav'
import Products from './products/Products'
import Recommended from './Recomended/Recommended'
import Sidebar from './Sidebar/Sidebar'

//data base
import products from './db/data'
import Card from './components/Card'

function App() {
  const [selectCategory, setSelectCategory] = useState(null)
  
  //------------------input Filter-------------------------
  const [query,setQuery]  = useState("")

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)
  
  //------------------checkmark Filter-------------------------
  const handleChange = (event) =>{
    setSelectCategory(event.target.value)
  }


  //------------------Buttons Filter-------------------------
  const handleClick = (event) =>{
    setSelectCategory(event.target.value)
  }

  function filteredData(products,selected,query){
    let filteredProducts = products

    //-------Fitering Input Items-----------------------------
    if (query) {
      filteredProducts = filteredItems;
    }

    //-------Selected Filter----------------------------
    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title})=> category === selected || 
      newPrice === selected || color === selected || title === selected || company === selected)
    }

    return filteredProducts.map(({img,title,reviews,color,company,newPrice,prevPrice,star})=>(
          <Card key={Math.random()}
            img = {img}
            title = {title}
            reviews = {reviews}
            color = {color}
            company = {company}
            newPrice = {newPrice}
            prevPrice = {prevPrice}
            star={star}
          />))
  }

  const result = filteredData(products,selectCategory,query)

  return (
    <>
    <Sidebar handleChange = {handleChange}/>
     <Nav query={query} handleInputChange={handleInputChange}/>
     <Recommended handleClick={handleClick}/>
     <Products result={result}/>
    </>
  )
}

export default App
