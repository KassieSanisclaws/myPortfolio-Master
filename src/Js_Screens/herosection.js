const HeroSection = {
    render:() => {
         return `<div class="heroSection-body">
 <video autoPlay loop muted><source src="videos/video.mp4" type="video/mp4"/></video>        
                     <div class="heroSection-section">
                       
                <div class="heroSection-section-container">
                     <div class="heroSection-left-content">
                        <div class="heroSection-left-content-img"> 
                           <img src="images/icon_images/userProfile_icon.png" alt="userProfile" />
                        </div>
                     </div>

                     <div class="heroSection-right-content">
                        <div class="">
                           <h4>Right Hero Section Content</h4>
                           <img src="/" alt="/"/>
                        </div>
                     </div>
                 </div>

                     <div class="heroSection-bottom-content">
                        <div class="">
                           <h4>Bottom Hero Section Content</h4>
                           <img src="/" alt="/"/>
                        </div>
                     </div>

              </div>
         </div>
         `
    }
}

export default HeroSection;