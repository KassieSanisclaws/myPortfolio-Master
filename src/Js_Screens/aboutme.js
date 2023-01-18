
const AboutMe = {
after_render_aboutMeTimeLine:() =>{
   let i = 0;
   const aboutMeTimeLine = document.querySelector([".aboutMe-timeLine-innerLine"]);
   const aboutMeTimeLine_events = document.querySelectorAll([".aboutMe-timeLine > ul li"]);

   const showAboutMeTimeLine_event = (e) =>{
      e.setAttribute("done", "true");
      e.querySelector(".aboutMe-timeLine-point").style.background = "rgb(47, 255, 144)";
      e.querySelector(".aboutMe-timeLine-date").style.opacity = "0";
      e.querySelector(".aboutMe-timeLine p").style.opacity = "100%";
      e.querySelector(".aboutMe-timeLine p").style.transform = "translateX(0px)";
    }

    const hideAboutMeTimeLine_event = (e) =>{
      e.removeAttribute("done");
      e.querySelector(".aboutMe-timeLine-point").style.background = "rgb(228, 228, 228)";
      e.querySelector(".aboutMe-timeLine-date").style.opacity = "80%";
      e.querySelector(".aboutMe-timeLine p").style.opacity = "0%";
      e.querySelector(".aboutMe-timeLine p").style.transform = "translateX(10px)";
     }

     aboutMeTimeLine_events.forEach((li, index) =>{
      li.addEventListener("click", () =>{
        if(li.getAttribute("done")){
          aboutMeTimeLine.style.height = `${(index / aboutMeTimeLine_events.length) * 100}%`;
          // hide all time line events from the last up till the clicked timeline event.//
          aboutMeTimeLine_events.forEach((ev, idx) =>{
            if(idx >= index){
              hideAboutMeTimeLine_event(ev);
            }
          });
        }else{
          aboutMeTimeLine.style.height = `${((index + 1) / aboutMeTimeLine_events.length)* 100}%`;
        //Show all timeline events prior to the clicked point on timeline.//
          aboutMeTimeLine_events.forEach((ev, idx) =>{
          if(idx <= index){
            showAboutMeTimeLine_event(ev);
          }
        });
        }
      });
    });

    const slowTimeLineTransition = () =>{
      
      setTimeout(function(){
        showAboutMeTimeLine_event(aboutMeTimeLine_events[i]);
        aboutMeTimeLine.style.height = `${((i + 1) / aboutMeTimeLine_events.length) * 100}%`;
        i++;
        if(i <aboutMeTimeLine_events.length){
          slowTimeLineTransition();
        }
      }, 800);
    }

    //Create an observer variable to observer the timeline event.//
    let observer = new IntersectionObserver((entries, observer) =>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          slowTimeLineTransition();
        }
      });
    }, {});
    const aboutMeTimeLine_target = document.querySelector([".aboutMe-timeLine ul"]);
    observer.observe(aboutMeTimeLine_target);


},

render:() => {
     return `<div class="about-me-body">
                <div class="about-me-section">
                   <div class="appGlass"><h1>About Me</h1></div>
                   <div class="about-me-container">
                      
                   <div class="about-meContent1">
                       <div class="about-meContent1-img">
                        <img src="/" alt="/" />
                       </div>
                     <div class="about-meContent1-pContent">
                       <p>I am a Graduate student at Trios College Mississauga Campus, Enterprise Web & Mobile Applications Development course & current Canadian Business College student.
                       Through my growth & work experiences, JavaScript has become my preferred language, but grew into being well traversed with the stack technologies. Continuously improving, learning, Studying, practicing, and analyzing the problem & solving with solutions optimized to needs. I love Coding, but I am finding new passions within designing architecture, scalability, Web Services & GUI. I created numerous side projects coupling with my growth uploaded to my Git Hub repository.  I am praised as a hard worker, Industrious mind, Self-starter, self-taught, great friend, and team player & over all a humbled, truly caring, trustworthy person. I have high future endeavors with a commitment to excellence. Thank you for the future opportunities & time. 
                       </p>
                     </div>
                   </div>

                   <div class="about-meContent2">
                     <div class="about-meContent2-inner">
                       <div class="about-meContent2-innerHeader"><h2>My Journey</h2></div>
                       <div class="about-meContent2-contentCards">

                        <div class="about-meContent2-contentCard1">
                          <div>
                            <ul>
                               <li>Cbc College - SoftwareEngineer</li>
                               <li>Trios College - EnterpriseWeb&MobileApp</li>
                               <li>Internship - BreezeMaxWeb</li>
                            </ul>
                          </div>
                          <div><h2>Jr.Developer</h2></div>
                        </div>
                        <div class="about-meContent2-contentCard2">
                          <div>
                             <ul>
                               <li>Construction - Carpenter</li>
                               <li>Security Loss Prevention - Paragon, Garda & TSM</li>
                             </ul>
                          </div>
                          <div><h2>Work Experience</h2></div>
                        </div>
                        <div class="about-meContent2-contentCard3">
                          <div>
                            <ul>
                              <li>Sheridan College - PoliceFoundations</li>
                            </ul>
                          </div>
                          <div><h2>Police Foundations</h2></div>
                        </div>
                        <div class="about-meContent2-contentCard4">
                          <div>
                            <ul>
                              <li>High School<li>
                            </ul>
                          </div>
                          <div><h2>Cardinal Leger</h2></div>
                        </div>
                        <div class="about-meContent2-contentCard5">
                          <div class="aboutMe-timeLine">
                          <div><span class="aboutMe-timeLine-innerLine"></span></div>
                          <ul>
                          <li>
                              <span class="aboutMe-timeLine-point"></span>
                              <span class="aboutMe-timeLine-date">2022-Current</span>
                              <p>Jr.Developer</p>
                          </li>
                          <li>
                              <span class="aboutMe-timeLine-point"></span>
                              <span class="aboutMe-timeLine-date">2007-2021</span>
                              <p>Experiences</p>
                          </li>
                          <li>
                              <span class="aboutMe-timeLine-point"></span>
                              <span class="aboutMe-timeLine-date">2009-2011</span>
                              <p>Sheridan College</p>
                          </li>
                          <li>
                              <span class="aboutMe-timeLine-point"></span>
                              <span class="aboutMe-timeLine-date">2005-2009</span>
                              <p>High School</p>
                          </li>
                          </ul>
                          </div>
                        </div>

                       </div>                   
                     </div>
                   </div>
                                 

                </div>
            </div>        
       </div>        
       `
   }
}

export default AboutMe;