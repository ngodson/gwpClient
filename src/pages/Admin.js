import "../Admin.css"
import logoPic from "../images/church_logo.png"
import { useContext } from "react"
import { AuthContext } from "../App"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Admin = ()=> {
    const navigate = useNavigate()
    const {setAuthDetail} = useContext(AuthContext)
    const [input, setInput] = useState({
        username:"username",
        password:"password"
    })
    const [err, setErr] = useState(null)

    const handleChange = (e)=> {
        setInput(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()

        try{
          await axios.post("http://localhost:3001/api/auth/login",input, {
            withCredentials:true
          }).then((data)=>{
            if(data){
                setAuthDetail(data) 
                console.log(data)
                navigate("/portal")
            }
          })
             
        }
        catch(err){
            if(err){
                navigate("/adminportal")
            }
        setErr(err.response.data)      
        }
    }


    

    return (
        <section className="main">
            <div className="loginInfo"> 
                {err && err}
            </div>
         <div className="loginImage">
                <img src={logoPic} alt="church log" />
            </div>
       
        <div className="adminContainer">
           <div className="inputs">
                <input type="text" placeholder="username" name="username" onChange={handleChange}/>
                <input type="password" placeholder="password" name="password" onChange={handleChange}/>
            </div>
            <div className="buttons">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        </section>
    )
}