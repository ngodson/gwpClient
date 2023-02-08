import {BsFillFileEarmarkTextFill} from "react-icons/bs"
import {BsFillHouseDoorFill} from "react-icons/bs"
import {BsFillFileEarmarkRichtextFill} from "react-icons/bs"
import {BsFileFontFill} from "react-icons/bs"
import {FaBirthdayCake} from "react-icons/fa"
import {FaUserPlus} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import "../components/sideNav/sideNav.css"
import "../components/componentStyles/pastorImageUpload.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react"
import axios from "axios"


export const PA = ()=> {
    const navigate = useNavigate()
    const [file, setFile] = useState("")
    const [err,setErr] = useState("")

    const handleImage = (e)=> {
    setFile(e.target.files[0])
    }

    const submitPicture = async (e)=> {
        e.preventDefault()
        var formData = new FormData()
        formData.append("image",file)

        const config = {
            headers: {
                "Content-Type":"multipart/form-data"
            }
        }
        try {
            const res = await axios.post("http://localhost:3001/api/upload", formData, config)
            console.log(res)
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
           <div className="sidenavContent" onClick={changeH1} >
            <BsFillFileEarmarkTextFill /><br />
            Change Header Text
            </div>
            <div className="sidenavContent">
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
        <div className="changingImageContainer">
            <div>{err && err}</div>
            <form encType="multipart/form-data" onSubmit={submitPicture}>
            <div>
                <input type="file" id="img" name="image" accept="image/*" onChange={handleImage}/>
            </div>
            <div>
                <button type="submit">Upload Image</button>
            </div>
            </form>
        </div>
        </section>
    )
}