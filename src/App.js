import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { createContext,useState } from "react";
import "./churchInto.css"
import { Main } from "./pages/Main";
import {NotFound} from "./pages/NotFound"
import { Portal } from "./pages/AdminPortal/Portal";
import {H1} from "./components/H1"
import {PA} from "./components/PaPicture"
import {AddUser} from "./components/AddUser"
import {Birthday} from "./components/Birthday"
import {Testimon} from "./components/Testimony"
import { Admin } from "./pages/Admin"


export const AuthContext = createContext()
function App() {
  
 
  const [authDetail, setAuthDetail] = useState({})

  return (
    <div className="App"> 
     <AuthContext.Provider value={{authDetail,setAuthDetail}}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/adminportal" element={<Admin />} />
        <Route exact path="/portal" element={<Portal />} />
        <Route exact path="/portal/header" element={<H1 />} />
        <Route exact path="/portal/pictureupload" element={<PA />} />
        <Route exact path="/portal/newuser" element={<AddUser />} />
        <Route exact path="/portal/birthday" element={<Birthday />} />
        <Route exact path="/portal/testimony" element={<Testimon />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </AuthContext.Provider>
   </div>
  );
}

export default App;
