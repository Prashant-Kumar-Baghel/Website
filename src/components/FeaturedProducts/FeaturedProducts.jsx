import React, { useEffect, useState } from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import axios from 'axios'
const FeaturedProducts = ({type}) => {
    const data=[
        {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs-tinys.rgb&w=1600",
        img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb6-1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew:true,
        oldPrice: 19,
        price: 12,
        },
        {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
        },
        {
        id: 3,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs-tinysrgb&w=1600",
        title: "Skirt",
        oldPrice: 19,
        price: 12,
        },
        {
        id: 4,
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs-tinysrgb&w=1600",
        title: "Hat",
        oldPrice: 19,
        price: 12,
        }
    ]

    const [products, setProducts]=useState([]);
    // axios.get accept two thing 1st is url and second is Headers property and header property is authorization.
    //to call api we have to send heders to api end point.
   //proceess.env. is way to call api.
    useEffect(()=>{ 
        const fetchData=async ()=>{
            try{
                //this how we fetching data using strapi.
                const data=await axios.get(process.env.REACT_APP_API_URL+"/products",
                {
                    headers:{
                        Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,
                    },
                }
                );
                // console.log(data);
            }catch(err){
                console.log(err)
            }
        }
        console.log(data)
        fetchData();
    },[])
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti reprehenderit recusandae accusamus, ullam soluta iusto pariatur, veritatis commodi quo nemo perferendis, at aperiam laboriosam eum ut cumque sunt distinctio nihil assumenda odio.</p>
        </div>
        {/* we access data through mappind and we use mapping hence we also have to provide key. */}
        <div className="bottom">
            {data.map((item)=>
            <Card item={item} key={item.id}/>)
            }
        </div>

    </div>
  )
}

export default FeaturedProducts