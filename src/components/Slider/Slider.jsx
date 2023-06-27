import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"

const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
      const [currentSlide,setCurrentSlide]=useState(0);

      const prevSlide=()=>{//agar 1st slide par hoo and left arrow click karunga then last wale slide par jaunga or agar 1st slide par nahi hoo or lest arrow click karunga to previous slide par chala jaunga.
        setCurrentSlide(currentSlide===0?2:(prev)=>prev-1);
      }

      const nextSlide=()=>{//agar last slide par hoo and right arrow click karunga then 1st wale slide par jaunga or agar last slide par nahi hoo or right arrow click karunga to next slide par chala jaunga. 
        setCurrentSlide(currentSlide===2?0:(prev)=>prev+1)
      }
  return (
    <div className='slider'>
        {/* style={{transform:`translateX(-${currentSlide * 100}vw)`}} mean agar mera currentSlide agar 1 hai to har slide ko 100vw left shift karna hoga. */}
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}><WestOutlinedIcon/></div>
            <div className="icon" onClick={nextSlide}><EastOutlinedIcon/></div>
        </div>
    </div>
  )
}

export default Slider