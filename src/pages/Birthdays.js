import image1 from "../birthday_images/image1.jpeg"
import image2 from "../birthday_images/image2.jpeg"
import image3 from "../birthday_images/image3.jpeg"
import image4 from "../birthday_images/image4.jpeg"
import image5 from "../birthday_images/image5.jpeg"
import image6 from "../birthday_images/image6.jpeg"
import image7 from "../birthday_images/image7.jpeg"
import image8 from "../birthday_images/image8.jpeg"
import merry from "../birthday_images/merry.png"
import Aos from "aos"
import "aos/dist/aos.css";
import React, {useEffect} from "react"



export const Birthdays = () => {
    useEffect(()=> {
        Aos.init({
            duration:3000,
        })
    },[])
    return (
       <section>
        <div className="birthdayContainer">
            <div className="celebrateTextContainer">
                <h2>We Celebrate You</h2>
                <div>
                    <img src={merry} alt="" />
                </div>
            </div>
            <div className="birthdayCelebranteContainer">
                
                    <div data-Aos="flip-up">
                    <img src={image1} alt="birthday celebrant"/>
                    </div>

                    <div data-Aos="flip-left">
                    <img src={image2} alt="birthday celebrant"/>
                    </div>

                    <div data-Aos="flip-right">
                    <img src={image3} alt="birthday celebrant"/>
                    </div>

                    <div data-Aos="flip-down">
                    <img src={image4} alt="birthday celebrant"/>
                    </div>

                    <div data-aos="fade-right">
                    <img src={image5} alt="birthday celebrant"/>
                    </div>

                    <div data-aos="fade-right">
                    <img src={image6} alt="birthday celebrant"/>
                    </div>
                    <div data-aos="fade-down">
                    <img src={image7} alt="birthday celebrant"/>
                    </div>
                    <div data-aos="fade-left">
                    <img src={image8} alt="birthday celebrant"/>
                    </div>

            </div>
        </div>
       </section>
    )
}