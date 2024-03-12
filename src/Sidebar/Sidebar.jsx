import './sidebar.css'
import { TiShoppingCart } from "react-icons/ti";
import Category from './Category/Category.jsx'
import Price from './Price/Price.jsx'
import Colors from './Colors/Colors.jsx'

function Sidebar({handleChange}) {
  return (
    <>
      <section className="sidebar">
        <div className="logos-container">
          <TiShoppingCart className='icon'/>
        </div>

        <Category handleChange = {handleChange}/>
        <Price handleChange = {handleChange}/>
        <Colors handleChange = {handleChange}/>
      </section>
    </>
  )
}

export default Sidebar