import Slider from "../pages/Slider"

import { ChurchIntro } from "../pages/ChurchIntro"
import {Weekly} from "../pages/WeeklyActivities"
import {Testimony} from "../pages/Testimonies"
import {Birthdays} from "../pages/Birthdays"
import { Contact } from "../pages/Contact"
import { Navbar } from "../link/Navbar"



export const Main = ()=> {
    return (
        <>
        
        <Navbar />
        <Slider />
        <div id="churchIntro">
        <ChurchIntro />
        </div>

        <div id="weekly">
        <Weekly />
        </div>
        
        <div id="testimony">
        <Testimony />
        </div>
        
        <div id="birthdays">
        <Birthdays />
        </div>
        
        <div id="contact">
        <Contact />
        </div>
       
        
        </>
        
    )
}