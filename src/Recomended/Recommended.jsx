import './recommended.css'
import Buttons from '../components/Buttons.jsx'

function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <Buttons value="" title="All products" onClickHandler={handleClick}/>
          <Buttons value="Nike" title="Nike" onClickHandler={handleClick}/>
          <Buttons value="Puma" title="Puma" onClickHandler={handleClick}/>
          <Buttons value="Vans" title="Vans" onClickHandler={handleClick}/>
          <Buttons value="Adidas" title="Adidas" onClickHandler={handleClick}/>
        </div>
      </div>
    </>
  )
}

export default Recommended