import {BsFillFileEarmarkTextFill} from "react-icons/bs"
import {BsFillHouseDoorFill} from "react-icons/bs"
import {BsFillFileEarmarkRichtextFill} from "react-icons/bs"
import {BsFileFontFill} from "react-icons/bs"
import {FaBirthdayCake} from "react-icons/fa"
import {FaUserPlus} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import "../components/sideNav/sideNav.css"
import "../components/componentStyles/h1.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react"
import axios from "axios"


export const H1 = ()=> {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        message:"message"
    })
    const [alert, setAlert] = useState("")

    const handleText = (e)=>{
        setInput(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleClick = async (e)=> {
        e.preventDefault()
        axios.post("http://localhost:3001/api/header/message", input).then((data)=>{
            console.log(data.data)
            setAlert(data.data)
     
        })
    }

    const home = ()=> {
        navigate("/portal")
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
    return (
        <section>
        <div className="sidenav">
             <div className="sidenavContent" onClick={home}>
            <BsFillHouseDoorFill />
            <br />
            Home
          </div>
            <div className="sidenavContent"  >
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

        </div>
        <div className="changingHeaderContainer">
            <div>
            {alert}
            </div>
            <div>
                <input type="text" placeholder="Enter header text" name="message" onChange={handleText}/>
            </div>
            <div>
                <button onClick={handleClick}>Change Text</button>
            </div>
           </div>
        </section>
    )
}