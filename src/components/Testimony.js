import {BsFillFileEarmarkTextFill} from "react-icons/bs"
import {BsFillHouseDoorFill} from "react-icons/bs"
import {BsFillFileEarmarkRichtextFill} from "react-icons/bs"
import {BsFileFontFill} from "react-icons/bs"
import {FaBirthdayCake} from "react-icons/fa"
import {FaUserPlus} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import "../components/sideNav/sideNav.css"
import "../components/componentStyles/testimon.css"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useState } from "react"


export const Testimon = () => {
    const navigate = useNavigate()
    const [input,setInput] = useState({
        testimonyMessage: "testimonyMessage",
        testimonyName: "testimonyName"
    })

    const [jsonDisplay,setJsonDisplay] = useState("")

    const handleInput = (e)=>{
        setInput(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3001/api/add/testimony",input).then((data)=>{
                console.log(data.data)
                setJsonDisplay(data.data)
            })
        }
        catch(err){
            console.log(err)
        }
        
    }

    const home = ()=> {
        navigate("/portal")
    }
    const changeH1 = ()=> {
        navigate("/portal/header")
    }

    const changePst = ()=> {
        navigate("/portal/pictureupload")
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
           <div className="sidenavContent" onClick={changeH1} >
            <BsFillFileEarmarkTextFill /><br />
            Change Header Text
            </div>
            <div className="sidenavContent" onClick={changePst}>
            <BsFillFileEarmarkRichtextFill /><br />
            Pst. E.A Adeboye Pic
            </div>
            <div className="sidenavContent" >
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
        <div className="createNewTestimonyContainer">
           <p style={{color:"green"}}>
           {jsonDisplay}
           </p> 
        <div>
            <input type="text" placeholder="add testimony" name="testimonyMessage" onChange={handleInput}/>
            <input type="text" placeholder="testifier name" name="testimonyName" onChange={handleInput}/>
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
        </section>
    )
}