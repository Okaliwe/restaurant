import {NavLink} from "react-router-dom";
import './footer.css'
const Footer = () => {
    return ( 
        <div className="footer">
            <div id='footer'>
                <li><NavLink to='/about'className='Lins'>ABOUT US</NavLink></li>
                 <li><NavLink to='/contact'className='Lis'>CONTACT US</NavLink></li>
                <li><NavLink to='/terms'className='Ls'>TERMS AND CONDITIONS</NavLink></li>
            </div>
        </div>
     );
}
 
export default Footer;