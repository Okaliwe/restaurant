import img1 from './images/fried-rice-with-sausage.jpg'
import img2 from './images/top-view-vegetable-soup-with-meat-inside-plate-grey.jpg'
import img5 from './images/pasta-spaghetti-with-shrimps-sauce.jpg'
import img6 from './images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg'
import {NavLink} from "react-router-dom";
// import img1 from './images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg'
const Home = () => {
    return ( 
        <>
           <div className='images'>
            <div className="text">
               <h2>My RESTAURANT</h2>
              <p>Freshly prepared</p>
            </div>
           
        </div>
            <h3> WELCOME TO NEW DAV'S KITCHEN</h3>
            <p id='para'>Daves cafe is the place to relax after having a stressful day,<br/>as what ever you need to make you comfortable is avalable</p>
        <div className='newdavs'>
            <div className='img3'>
               <div id='pa'><p id='pad'>BIRTHDAY AND BUFFET</p><p id='da'>Find a suitable location to celeberate<br/> a birthday or family celebration?Then you are at the right place</p></div>
               <button className='btn'><NavLink to='/about'id='btn'>Learn more</NavLink></button>
            </div>
            <div className='img4'>
                <div id='pa'><p id='pad'>LUNCH AND HOT MEAL</p><p id='da'>Find a suitable location to have a<br/> a wonderful meal with friends and family? Then you are at the right place</p></div>
                <button className='btn'><NavLink to='/about'id='btn'>Learn more</NavLink></button>
            </div>
       </div>
        <div className="diagram">
            <h6>Our New Hot Meals</h6>
            <div className='hotmeals'>
                {/* <label className='lab'>$350</label> */}
                <img src={img1} className='img1'/>
                {/* <label className='res'>$400</label> */}
                <img src={img2} className='img2'/>
                <img src={img5} className='img5'/>
                <img src={img6} className='img6'/>
            </div>
           
        </div>
        <div>
           <div className='times'>
           <h4>Our New Opening Times</h4>
               <div className='days'>
                   <div id='weekdays'>
                       <h5>Monday(Night shopping)<br/>09.30-11.30</h5>
                   </div>
                   <div id='weekdays'>
                      <h5>Wednessday(Night shopping)<br/>09.30-11.30</h5>
                   </div>
                   <div id='weekdays'>
                      <h5>Friday(Night shopping)<br/>09.30-11.30</h5>
                   </div>
                   <div id='weekdays'>
                      <h5>Sunday(Night shopping)<br/>09.30-11.30</h5>
                   </div>
               </div>
           </div>
        </div>
        </>
       
        
     );
}
 
export default Home;