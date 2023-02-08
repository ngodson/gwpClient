// import logo from "../images/church_logo.png"
import * as icons from "react-bootstrap-icons"

export const Contact = () => {
    return (
        <div className="contactContainer">

          <div className="firstContactContainerInner">
            {/* <div><img src={logo} alt="church Logo" /></div> */}
            <icons.Telephone />
            <div className="contactNumber">
              +234 8188 267 566 +234 8188 767 500
            </div>
            <div className="contactAddress">
                <icons.HouseExclamation />
              <div>Redeem Christian Church of God</div>
              <div>
                6, CAC Line Goshen Lane,
                <br />
                Jakande Estate, Isolo. Lagos.
              </div>
            </div>
          </div>

          <div>
          <div className="secondContactContainerInner">
            <div><textarea type="text" placeholder="send a message" /></div>
            <div><button type="button">Submit</button></div>
            </div>
          </div>
          
        </div>
      
    );
}