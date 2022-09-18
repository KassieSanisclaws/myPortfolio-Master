

const ContactForm = {
    render:() =>{
         return `<div class="contactForm-body">
                  <div class="appGlass"><h1>Contact</h1></div>
                     <div class="contactForm-section">          
                     <div class="contactForm-section-content">            
                        <div class="contactForm-section-content-contactInfo">
                         
                                  <h1>Contact Me:</h1>
                               
                           <ul class="contactForm-ul-contactInfo">
                              <li class="contactForm-li-contactInfo">
                                  <span><img src="images/icon_images/location_icon3.png" alt="location" /></span>
                                  <span>Canada<br/>
                                  Brampton, Ontario<br/>
                                  </span>
                              </li>

                              <li class="contactForm-li-contactInfo">
                                  <span><img src="images/icon_images/email_icon2.png" alt="email" /></span>
                                  <span>Kassie.Sanisclaws35@gmail.com</span>
                              </li>

                              <li class="contactForm-li-contactInfo">
                                  <span><img src="images/icon_images/phone_icon.png" alt="phone" /></span>
                                  <span>+1-647-61X-XXXX</span>
                              </li>
                          </ul>

                          <ul class="contactForm-ul-contactInfo-socialMedia">
                                     <li><a href="#"><img src="images/icon_images/twitter_icon4.png" alt="/" /></a></li>
                                     <li><a href="#"><img src="images/icon_images/github_icon.png" alt="/" /></a></li>
                                     <li><a href="#"><img src="images/icon_images/instagram_icon2.png" alt="/" /></a></li>
                                     <li><a href="#"><img src="images/icon_images/linkedin_icon.png" alt="/" /></a></li>
                          </ul>
                     </div>

                <div class="contactForm-section-content-contactForm">
                         <h1>Send Me A Message:</h1>
                     <div class="contactForm-form-box">

                         <div class="inputBox w50">
                            <input type="text"
                                   name=""
                                   required/>
                            <span>Name:</span>
                         </div>
                                 
                         <div class="inputBox w50">
                            <input type="text"
                                   name=""
                                   required/>
                            <span>Email Address:</span>
                         </div>
                        
                         <div class="inputBox w50">
                            <input type="text"
                                   name=""
                                   required/>
                            <span>Mobile Phone:</span>
                         </div>

                         <div class="inputBox w100">
                             <textarea name=""
                                       required>
                             </textarea>
                             <span>Your Message Here:</span>
                         </div>

                         <div class="inputBox w100">
                             <input type="submit" 
                                    value="send"/>
                         </div>
                            
                      </div>
                   </div>
                </div>


             </div>
         </div>
         `
    }
}

export default ContactForm;