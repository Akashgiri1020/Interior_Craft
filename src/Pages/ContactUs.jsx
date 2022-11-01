import React from 'react'
import "../Styles/ContactUs.css"
const ContactUs = () => {
  return (
    <div className='ContactUs'>
        <div className='ContactUs-body'>
        <div className='ContactUs-flex'>
            <div className='ContactUs-box-1'>
                <form>
                    <h1>Message Us</h1>
                    <div className='ContactUs-form-input'>
                    <input type="text" class="ContactUs-border-input" id = "Name" name="Name" placeholder = "Name" size = "70"/><br/>
                    <input type="Email" class="ContactUs-border-input" id = "Email" name="Email" placeholder = "Email Address" size = "70"/><br/>
                    <textarea id="Query" class="ContactUs-border-input" name="Query" rows="4" cols="50" placeholder='Write Your Question'></textarea>
                    <button type='submit' className='ContactUs-button'>Submit</button>
                    </div>
                </form>
            </div>
            <div className='ContactUs-box-2'>
                <iframe
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3259.499974447992!2d77.3936936943369!3d28.522471120006966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9d48b8267cd%3A0xb8ae7c7899c59509!2sInterior%20Craft!5e0!3m2!1sen!2sin!4v1667278977588!5m2!1sen!2sin"
                />
            </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUs
