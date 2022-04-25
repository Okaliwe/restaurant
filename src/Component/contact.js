import './contact.css'
const Contact = () => {
    return ( 
        <>
           <div className="contact">
             <h1 id='abt'>CONTACT US</h1>
          </div>
           <div className='Rate'>
            
           <label>Name*</label>
        <input type="text" id="tofrom"></input>
        <label>SurName*</label>
        <input type="text" id="tofrom"></input>
        <label>Contact Number*</label>
        <input type="number" id="tofrom"></input>
        <label>Email address*</label>
        <input type="email" id="tofrom"></input>
        <label>State</label>
                        <select id="type">
                            <option value="state">Abia</option>
                            <option value="state">Adamawa</option>
                            <option value="state">Abuja</option>
                            <option value="state">Lagos</option>
                            <option value="state">PortHarcourt</option>
                            <option value="state">Ondo</option>
                            <option value="state">Enugu</option>
                            <option value="state">Ibadan</option>
                            <option value="state">Benue</option>
                        </select>
          <label>Relevant store*</label>
        <input type="text" id="tofrom"></input>
        <label>What would you like to enquire about</label>
                        <select id="type">
                            <option value="invoice">Customer care</option>
                            <option value="Payment">Marketing</option>
                            <option value="Payment">Web</option>
                        </select>
                        <label>Subject*</label>
        <input type="text" id="tofrom"></input>
        <label>Message*</label>
        <input type="text" id="to"></input>
        <button>SUBMIT</button>
           </div>
        </>
        
     );
}
 
export default Contact;