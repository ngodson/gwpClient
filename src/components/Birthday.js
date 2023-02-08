import {BsFillFileEarmarkTextFill} from "react-icons/bs"
import {BsFillHouseDoorFill} from "react-icons/bs"
import {BsFillFileEarmarkRichtextFill} from "react-icons/bs"
import {BsFileFontFill} from "react-icons/bs"
import {FaBirthdayCake} from "react-icons/fa"
import {FaUserPlus} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import "../components/sideNav/sideNav.css"
import "../components/componentStyles/birthdays.css"
import {useNavigate} from "react-router-dom"


export const Birthday = () => {
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
            <div className="sidenavContent" onClick={addTestimony} >
            <BsFileFontFill /><br />
            Add Testimony
            </div>
            <div className="sidenavContent">
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
        
        <div className="addBirthdayContainer">

            <div>
            <input type="file" id="img" name="img" accept="image/*" />
            </div>
            <div>
            <input type="date" id="birthday" name="birthday" />
            </div>
            <div>
            <button>Submit</button>
            </div>

        </div>

        </section>
    )
}