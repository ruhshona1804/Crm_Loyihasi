import { Link } from "react-router-dom";
import img1 from "../assets/img/image.png";
import img2 from "../assets/img/image copy.png";
import img3 from "../assets/img/image copy 2.png";
import img4 from "../assets/img/image copy 3.png";
import img5 from "../assets/img/image copy 4.png";  
import "./navbar.scss";
function Nav() {
   const nav_Links = [
    { log: img1, text: "Dashboard", path: "/" },
    { log: img2, text: "Projects", path: "/projects" },
    { log: img3, text: "Calendar", path: "/calendar" },
    { log: img4, text: "Vacations", path: "/vacations" },
    { log: img5, text: "Messenger", path: "/messenger" }
  ]; 
    return(
        <div className="pagenav">
            <h1>My crm_portfolio</h1>
            <div className="navpag">
                <ul>
                   {nav_Links.map((nav_Link)=>(
                    <li><img src={nav_Link.log} alt={nav_Link.text} /><Link to={nav_Link.path}>{nav_Link.text}</Link></li>
                   ))}
                </ul>
            </div>
        </div>
    )
}
export default Nav