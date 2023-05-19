import React from 'react'
import '../components/Styles/form.css'


const Form = () => {
  return (
    <div>
        <section className='contact__form'>
            <h1>Non EU Investors - Request for Information</h1>
            <h4> Name </h4>
            <div className='form__row'>
           
                <div className='form__col'>
                    <input type="text" />
                    <br />
                    <label >First Name</label>
                 </div>
                <div className='form__col'>
                <input type="text" />
                <br />
                    <label >Last Name</label>    
                </div>
            </div>
            <br />
            <label>Email Address</label>
            <input type="text" />
            <br />
            <br />

            <label>Subject</label>
            <input type="text" />
            <br />
            <br />

             <label >Message</label>   
             <br />
             <textarea  placeholder='Message' id="message" rows={6}></textarea>
             <br />
            <br />

              <button>SUBMIT</button>
              <br />
            <br />
        </section>
        <section className="location__map" >
          <iframe title='map' className='mapcon' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3943005276515!2d-95.46552238254637!3d29.73729969083219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16c2cf13989%3A0x9fd2bbab78247d62!2s2800%20Post%20Oak%20Blvd%2C%20Houston%2C%20TX%2077056%2C%20USA!5e0!3m2!1sen!2s!4v1675405427489!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          </section>

    </div>
  )
}

export default Form;