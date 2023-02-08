import {BsFillFileEarmarkTextFill} from "react-icons/bs"
import {BsFillHouseDoorFill} from "react-icons/bs"
import {BsFillFileEarmarkRichtextFill} from "react-icons/bs"
import {BsFileFontFill} from "react-icons/bs"
import {FaBirthdayCake} from "react-icons/fa"
import {FaUserPlus} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import "../components/sideNav/sideNav.css"
import "../components/componentStyles/addUser.css"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useState } from "react"


export const AddUser = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
      fullname:"fullname",
      username:"username",
      password:"password"
    })
    const [okResponse, setOkResponse] = useState("")
    const [err, setErr] = useState(null)

    const handleChange = (e)=> {
      setInputs(prev=>({...prev, [e.target.name]:e.target.value }))
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    try{
        await axios.post("http://localhost:3001/api/auth/register",inputs).then((data)=>{
           if(data){
            return setOkResponse("Successfully added")
           }
          
        })
        setInputs("")
    }
    catch(err){
      setErr(err.response.data)
      
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
    const addTestimony = ()=> {
        navigate("/portal/testimony")
    }

    
    return (
      <section>
        <div className="sidenav">
        <div className="sidenavContent" onClick={home}>
            <BsFillHouseDoorFill />
            <br />
            Home
          </div>
          <div className="sidenavContent" onClick={changeH1}>
            <BsFillFileEarmarkTextFill />
            <br />
            Change Header Text
          </div>
          <div className="sidenavContent" onClick={changePst}>
            <BsFillFileEarmarkRichtextFill />
            <br />
            Pst. E.A Adeboye Pic
          </div>
          <div className="sidenavContent" onClick={addTestimony}>
            <BsFileFontFill />
            <br />
            Add Testimony
          </div>
          <div className="sidenavContent" onClick={addBirthday}>
            <FaBirthdayCake />
            <br />
            Add Birthday
          </div>
          <div className="sidenavContent">
            <FaUserPlus />
            <br />
            Add user
          </div>
          <div className="sidenavContent">
            <FaSignOutAlt />
            <br />
            Logout
          </div>
        </div>

        <div className="addUserContainer">
          <div className="responseInfo">
            {err && err}
            {okResponse}
          </div>
          <div>
            <input type="text" placeholder="full name" name="fullname" onChange={handleChange}/>
          </div>
          <div>
            <input type="text" placeholder="username" name="username" onChange={handleChange} />
          </div>
          <div>
            <input type="password" placeholder="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </section>
    );
}