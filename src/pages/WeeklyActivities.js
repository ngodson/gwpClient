import React,{useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css";
import bibleStudy from "../images/sunday_school.png"
import digginDeep from "../images/digging_deep.png"
import faithClinic from "../images/faith_clinic.png"
import thanksGiving from "../images/thanksgiving_square.png"
import evengelism from "../images/evangelism.png"
import sundayService from "../images/sunday_service.png"
import programs from "../images/program.png"

 export const Weekly = () => {
    useEffect(()=>{
        Aos.init({
            duration:1000,
        })
    },[])

    return (
        <section id="#Weekly">
            <div className="weeklyProgram" >
                <div className="weeklyText">
                    <h2>Church Programmes</h2>
                    <div>
                    <img src={programs} alt="" />
                    </div>
                    
                </div>
                <div className="imageContainer">
                    <div data-aos="fade-right">
                    <img src={bibleStudy} alt="weekly program1"/>
                    </div>
                    <div data-aos="fade-up">
                    <img src={sundayService} alt="weekly program2"/>
                    </div>
                    <div data-aos="fade-left">
                    <img src={digginDeep} alt="weekly program3"/>
                    </div>
                    <div data-aos="fade-left">
                    <img src={faithClinic} alt="weekly program4"/>
                    </div>
                    <div data-aos="fade-leftb">
                    <img src={thanksGiving} alt="weekly program5"/>
                    </div>
                    <div data-aos="fade-right">
                    <img src={evengelism} alt="weekly program6"/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
