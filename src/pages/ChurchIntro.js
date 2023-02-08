import GO from "../images/GO.jpg"
// import axios from "axios"
// import { useState } from "react"
// import { useEffect } from "react"

export const ChurchIntro = ()=> {
        // const [img, setImg] = useState("")

    //     const getImages = async ()=>{
    //         const res = await axios.get("https://thewhistler.ng/wp-content/uploads/2020/02/Pastor-Enoch-Adeboye-1.jpg",{
    //             responseType: "text",
    //             responseEncoding: "base64",
    //         })
    //         const base64 = Buffer.from(res.data, "base64")
    //         setImg(base64)
    //     }
    //    useEffect(()=>{
    //     getImages()
    //    },[])
 

    return (
        <div className="church-bio">
           
            <div className="pstAdeboye">
                <img src={GO} alt="Pastor Adeboye"/>
            </div>
            <div className="gwpIntro">
                <h2>WE ARE A FAMILY</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}