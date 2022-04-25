import React,{useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset < 200 ){
          setScrolled(false);
        }
        else{
          setScrolled(true);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
    let navbarClasses=['Navbar'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
    return ( 
        <div className={navbarClasses.join(" ")}>
            <h1><NavLink to='/' className='Links'>Dave's Cafe</NavLink></h1>
            <div>
                <ul>
                    <li><NavLink to='/' className='Links'>Home</NavLink></li> 
                    <li><NavLink to='/about'className='Links'>About</NavLink></li>
                    <li><NavLink to='/product'className='Links'>Product</NavLink></li>
                    <li><NavLink to='/contact'className='Links'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;