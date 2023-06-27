import React, { useState } from 'react'
import "./products.scss"
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'

List
const Products = () => {
    const param=useParams();//param is an object which has an id but it is an string hence we convert it into int.
    const catid=parseInt(param.id);//parseInt is used to convert string into integer.
    const [maxPrice,setMaxPrice]=useState(1000);//use to alter the price when we do sliding.
    const[sort,setSort]=useState(null);//null mean we are not going to sort anything
  return (
    <div className='products'>

        {/* this is left side which has sorting details */}
        <div className="left">
            <div className="filterItem"> 
            <h2>Product Caregories</h2> 
            <div className="inputItem">
                <label htmlFor="1">
                    <input type="checkbox" id="1" value={1} />Shoes
                </label>
            </div>
            <div className="inputItem">
                <label htmlFor="2">
                    <input type="checkbox" id="2" value={2} />Skirts
                </label>
            </div>

            <div className="inputItem">
                <label htmlFor="3">
                    <input type="checkbox" id="3" value={3} />Coats
                </label>
            </div>

            </div>

            <div className="filterItem">  
            <h2>Filter By Price</h2>
            <div className="inputItem">
                <span>0</span>
                {/* <input>: This is the HTML tag for an input element.
                 type="range": This attribute sets the type of the input element to "range", indicating that it will be rendered as a range slider.
                 min={0}: This sets the minimum value of the range slider to 0. Users will not be able to select a value lower than this.
                 max={1000}: This sets the maximum value of the range slider to 1000. Users will not be able to select a value higher than this. */}
                <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
            </div>
            </div>

            <div className="filterItem"> 
            <h2>Sort By</h2> 
            <div className="inputItem">
                <label htmlFor="asc">
                    <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")} />Price(Lowest first)
                </label>
            </div>

            <div className="inputItem">
                <label htmlFor="desc">
                    <input type="radio" id="desc" value="desc" name="price"
                    onChange={(e)=>setSort("desc")}/>Price(Highest first)
                </label>
            </div>

            </div>
        </div>

        {/* this is right side which has images */}
        <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List cartid={catid} maxPrice={maxPrice} sort={sort} />

        </div>
    </div>
  )
}

export default Products