import './product.css'
import img1 from './images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg'
import img2 from './images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
import img5 from './images/annie-spratt-oT7_v-I0hHg-unsplash.jpg'
import img7 from './images/side-view-shawarma-with-fried-potatoes-board-cookware.jpg'
import img6 from './images/chad-montano-MqT0asuoIcU-unsplash.jpg'
import img8 from './images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg'

const Product = () => {
    return ( 
        <>
           <div className="contact">
             <h1 id='abt'>List of products</h1>
          </div>
          <div>
              <h3>list of products available at Daves restaurant</h3>
              <div className='products'>
                    <div>
                       <img src={img1} className='img1'/>
                    </div>
                    <div>
                       <img src={img2} className='img1'/>
                    </div>
                    <div>
                      <img src={img5} className='img1'/>
                    </div>
              </div>
              <div className='she'>
                  <div >
                     <p id='her'>Eggs with vegetable</p>
                     <li id='li'>350$</li>
                  </div>
                  <div>
                     <p id='her'>Fruit salad</p>
                     <li id='li'>250$</li>
                  </div>
                  <div>
                     <p id='her'>Jollof rice</p>
                     <li id='li'>300$</li>
                  </div>   
              </div>
              
              <div id='product'>
                    <div>
                    <img src={img6} className='img1'/>
                    </div>
                    <div>
                    <img src={img7} className='img1'/>
                    </div>
                    <div>
                    <img src={img8} className='img1'/>
                    </div>
              </div>
              <div className='she'>
                  <div >
                     <p id='her'>Pizza</p>
                     <li id='li'>400$</li>
                  </div>
                  <div>
                     <p id='her'>Shawama</p>
                     <li id='li'>100$</li>
                  </div>
                  <div>
                     <p id='her'>Hot coffee</p>
                     <li id='li'>70$</li>
                  </div>   
              </div>
          </div>
          
        </>
        
     );
}
 
export default Product;