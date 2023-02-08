import Carousel from "react-bootstrap/Carousel";
import { CarouselData } from "../data/Carousel";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function IndividualIntervalsExample() {
  const [getData, setGetData] = useState("")
  
  const header = async ()=>{
    const {data} = await  axios.get("http://localhost:3001/api/header/updated")
    setGetData(data)
    console.log(data)
  }

  useEffect(()=>{
    header()
  },[])
   

    return (
    <div className="sliderCarouselContainer">
      <div>
        <Carousel slide={true} controls={false}>
          {CarouselData.map((image) => {
            return (
              <Carousel.Item>
                <img src={image.img} alt={image.alt} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <h1 className="h1Text">{getData}</h1>
      </div>
    </div>
  );
}

export default IndividualIntervalsExample;
