import {BsFillFileEarmarkTextFill} from "react-icons/bs"
import {BsFillHouseDoorFill} from "react-icons/bs"
import {BsFillFileEarmarkRichtextFill} from "react-icons/bs"
import {BsFileFontFill} from "react-icons/bs"
import {FaBirthdayCake} from "react-icons/fa"
import {FaUserPlus} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import "./sideNav.css"
import {useNavigate} from "react-router-dom"
import { useContext } from "react"
import {AuthContext} from "../../App"


export const SideNav = () => {
    
    const {authDetail} = useContext(AuthContext)
    const navigate = useNavigate()

    const home = ()=> {
        navigate("/portal")
    }
    const changeH1 = ()=> {
        navigate("/portal/header")
    }

    const changePst = ()=> {
        navigate("/portal/pictureupload")
    }
    const addTestimony = ()=> {
        navigate("/portal/testimony")
    }
    const addBirthday = ()=> {
        navigate("/portal/birthday")
    }
    const addUser = ()=> {
        navigate("/portal/newuser")
    }
    
        const timing = ()=> {
            let check = new Date()
            let hr = check.getHours()
            let min = check.getMinutes()
         
            if(hr > 12){
                const hrs = hr - 12
                return `${hrs}:${min} PM`
            }
            else {
                return `${hr}:${min} AM`
            }
          
          
        }
 
    
   
    return (
        <div className="sidenav">
           <div className="timing">{timing()}</div>
             <div className="sidenavContent" onClick={home}>
            <BsFillHouseDoorFill />
            <br />
            Home
          </div>
            <div className="sidenavContent" onClick={changeH1} >
            <BsFillFileEarmarkTextFill /><br />
            Change Header Text
            </div>
            <div className="sidenavContent" onClick={changePst}>
            <BsFillFileEarmarkRichtextFill /><br />
            Pst. E.A Adeboye Pic
            </div>
            <div className="sidenavContent" onClick={addTestimony}>
            <BsFileFontFill /><br />
            Add Testimony
            </div>
            <div className="sidenavContent" onClick={addBirthday}>
            <FaBirthdayCake /><br />
            Add Birthday
            </div>
            <div className="sidenavContent" onClick={addUser}>
            <FaUserPlus /><br />
            Add user
            </div>
            <div className="sidenavContent">
            <FaSignOutAlt /><br />
            Logout
            </div>
            <b>{authDetail?.username}</b>
        </div>
    )
}