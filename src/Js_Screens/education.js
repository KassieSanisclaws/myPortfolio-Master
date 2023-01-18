const Education = {
 after_render_timeLine:()=>{
    const timeLine = document.querySelector([".timeLine-innerLine"]);
    const timeLine_events = document.querySelectorAll([".timeline-cardImg > ul li"]);
    let i = 0;

    const showTimeLine_event = (e) =>{
      e.setAttribute("done", "true");
      e.querySelector(".timeLine-point").style.background = "rgb(47, 255, 144)";
      e.querySelector(".timeLine-date").style.opacity = "0";
      e.querySelector(".timeline-cardImg p").style.opacity = "100%";
      e.querySelector(".timeline-cardImg p").style.transform = "translateX(0px)";
    }
 
    const hideTimeLine_event = (e) =>{
     e.removeAttribute("done");
     e.querySelector(".timeLine-point").style.background = "rgb(228, 228, 228)";
     e.querySelector(".timeLine-date").style.opacity = "80%";
     e.querySelector(".timeline-cardImg p").style.opacity = "0%";
     e.querySelector(".timeline-cardImg p").style.transform = "translateX(10px)";
    }

    timeLine_events.forEach((li, index) =>{
      li.addEventListener("click", () =>{
        if(li.getAttribute("done")){
          timeLine.style.height = `${(index / timeLine_events.length) * 100}%`;
          // hide all time line events from the last up till the clicked timeline event.//
          timeLine_events.forEach((ev, idx) =>{
            if(idx > index){
              hideTimeLine_event(ev);
            }
          });
        }else{
          timeLine.style.height = `${((index + 1) / timeLine_events.length)* 100}%`;
        //Show all timeline events prior to the clicked point on timeline.//
        timeLine_events.forEach((ev, idx) =>{
          if(idx <= index){
            showTimeLine_event(ev);
          }
        });
        }
      });
    });

    const slowTimeLineTransition = () =>{
      
        setTimeout(function(){
          showTimeLine_event(timeLine_events[i]);
          timeLine.style.height = `${((i + 1) / timeLine_events.length) * 100}%`;
          i++;
          if(i <timeLine_events.length){
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
    const timeLine_target = document.querySelector([".timeline-cardImg ul"]);
    observer.observe(timeLine_target);


 },
 after_render_showHideContent:()=>{
    const showResourceTabs = document.querySelectorAll([".education-contentInner-cards > div"]);
    const showDivContent = document.querySelectorAll([".resources-divContent > div"]);
    const showDivContent2 = document.querySelectorAll([".resources-divContent2 > div"]);
    const showDivContents = document.querySelectorAll([".resources-divContents > div"]);
    const showDivContents2 = document.querySelectorAll([".resources-divContent3 >  div"]);
      
    for(let i = 0; i < showResourceTabs.length; i++){
      showResourceTabs[i].addEventListener("mouseover", ()=>{
        document.querySelector(".education-contentInner-cards > .showContents")
        .classList.remove("showContents");
        showResourceTabs[i].classList.add("showContents");
        document.querySelector(".resources-divContent > .showContents")
        .classList.remove("showContents");
        showDivContent[i].classList.add("showContents");  
      })
    };
    
    for(let i = 0; i <showDivContent2.length; i++){
      showDivContent2[i].addEventListener("mouseover", ()=>{
        document.querySelector(".resources-divContent2 > .showContents")
        .classList.remove("showContents");
        showDivContent2[i].classList.add("showContents");    
        document.querySelector(".resources-divContents > .showContents")
        .classList.remove("showContents");
        showDivContents[i].classList.add("showContents");    
      })
    }

    Array.from(showDivContents2).forEach(function(div){
      div.addEventListener("mouseover", ()=>{
         document.querySelector(".resources-divContent3 >  .showContents")
        .classList.remove("showContents");
        div.classList.add("showContents");
      })
    })
},
after_render_flipCard:() =>{ 
  const cards = document.getElementsByClassName(["cardEducation"]);
    for(let i = 0; i <cards.length; i++){{
    cards[i].addEventListener("click", ()=>{
    cards[i].classList.toggle("flipCard");
    });
  }} 
},

render:() => {
      return `<div class="education-body">
                   <div class="education-section">
                      <div class="education-container">
                        <div class="education-content"><div class="appGlass"><h1>Education</h1></div></div>  

                        <div class="education-content2">
                          <div class="education-contentInner">

                             <div class="education-contentInner-cards">
                                      <h3>My Learning:</h3>
                                  <div class="showContents"><p>My Progression</p></div>
                                  <div><p>CBC College</p></div>
                                  <div><p>TriosCollege</p></div>
                                  <div><p>InternShip Breeze Max Web</p></div>  
                              </div>

                               <div class="resources-divContent">
                                   <div class="showContents">
                                       <div class="resources-divContent2">
                                       <div class="showContents"><h2>Learning Now</h2></div> 
                                       <div><h2>My Skills</h2></div>
                                       <div><h2>Design Patterns</h2></div>
                                       <div><h2>My OverView</h2></div>
                                      </div>
                                   </div>
                                   <div>
                                       <div class="resources-divContent2">
                                       <div class="showContents"><h2>Courses</h2></div>
                                       <div><h2>Graduated</h2></div>
                                       <div><h2>My OverView</h2></div>
                                       </div>   
                                   </div>
                                   <div>
                                       <div class="resources-divContent2">
                                       <div class="showContents"><h2>Courses</h2></div>
                                       <div><h2>Graduated</h2></div>
                                       <div><h2>My OverView</h2></div>
                                       </div>                                
                                   </div>                                      
                                   <div>
                                      <div class="resources-divContent2">
                                      <div class="showContents"><h2>Certificate</h2></div>
                                      <div><h2>My Experience</h2></div>
                                      </div>
                                   </div>           
                                
                                </div>
                                  
                                <div class="resources-divContents">
                                       <div class="showContents">
                                          <div class="resources-divContent3">
                                            <div class="showContents"><h2>Backend Designs</h2></div>
                                            <div><h2>Object Oriented Programing</h2></div>
                                            <div><h2>Web Components</h2></div>
                                            <div><h2>C#</h2></div>
                                            <div><h2>.Net</h2></div>
                                          </div>
                                       </div>
                                     
                                       <div>
                                            <div class="resources-divContent3">
                                            <div class="showContents"><h2>React 2+Yrs</h2></div>
                                            <div><h2>NodeJs 2+Yrs</h2></div>
                                            <div><h2>JavaScript 2+Yrs</h2></div>
                                            <div><h2>C# 1Yr</h2></div>
                                            </div>
                                       </div>

                                       <div>
                                            <div class="resources-divContent3">
                                            <div class="showContents"><h2>design pattern</h2></div>
                                            <div><h2>design pattern</h2></div>
                                            </div>
                                       </div>
   
                                       <div>
                                           <div class="resources-divContent3">
                                           <div class="showContents"><h2>my overview here</h2>
                                          
                                             </div>
                                           </div>
                                       </div>

                                       <div>
                                           <div class="resources-divContent3">
                                           <div class="showContents"><h2>Azure</h2></div>
                                           <div><h2>SQL</h2></div>
                                           <div><h2>XML Comprehensive</h2></div>
                                           <div><h2>Programming in C#</h2></div>
                                           <div><h2>JavaScript, Ajax & Jquery</h2></div>
                                           </div>
                                       </div>

                                       <div>
                                           <div class="resources-divContent3">
                                           <div class="showContents"><h2>Currenty In Studies</h2></div>
                                           </div>
                                      </div>

                                      <div>
                                           <div class="resources-divContent3">
                                           <div class="showContents"><h2>My Summary:</h2></div>
                                           </div>
                                      </div>

                                      <div>
                                           <div class="resources-divContent3">
                                           <div class="showContents"><h2>Programming In Java</h2></div>
                                           <div><h2>programming in C#</h2></div>
                                           <div><h2>SQL Programming</h2></div>
                                           <div><h2>Programming logic & design</h2></div>
                                           <div><h2>ASP.NET</h2></div>
                                           <div><h2>etc.</h2></div>
                                           </div>
                                      </div>
                                      
                                      <div>
                                          <div class="resources-divContent3">
                                          <div class="showContents"><h2>Graduated</h2></div>
                                          <div><h2>Certificate Diploma</h2></div>
                                          </div>
                                      </div>
        
                                      <div>
                                          <div class="resources-divContent3">
                                          <div class="showContents"><h2>My Reflection</h2></div>
                                          </div>
                                      </div>

                                      <div>
                                          <div class="resources-divContent3">
                                          <div class="showContents"><h2>Hours Of Completion Signed by VP</h2></div>
                                          </div>
                                      </div>

                                      <div>
                                          <div class="resources-divContent3">
                                          <div class="showContents"><h2>My reflection</h2></div>
                                          </div>
                                      </div>

                                    </div>
                                  </div>  
                                 
                                  <div class="education-timeline">
                                       <div class="education-timeline-content">
                                         <div class="education-timeline-header"><h2>Learning TimeLine</h2></div>
                                         <div class="education-timeline-innerContent">
                                          <div class="timeline-cards">
                                            <div class="timeline-card1"><h2>Future Goal:</h2></div>
                                            <div class="timeline-card2"><h2>CBC College:</h2></div>
                                            <div class="timeline-card3"><h2>Trios Graduated:</h2></div>
                                            <div class="timeline-card4"><h2>InternShip BreezeMaxWeb:</h2></div>
                                            <div class="timeline-card5"><h2>Trios College Yr1:</h2></div>
                                          </div>
                                            <div class="timeline-cardImg">
                                               <div><span class="timeLine-innerLine"></span></div>
                                               <ul>
                                               <li>
                                                   <span class="timeLine-point"></span>
                                                   <span class="timeLine-date">Future</span>
                                                   <p>Future Endevour to create-develope-release mobile rpg fantasy game</p>
                                               </li>
                                               <li>
                                                   <span class="timeLine-point"></span>
                                                   <span class="timeLine-date">2022-Current</span>
                                                   <p>Sql Programming & C#</p>
                                               </li>
                                               <li>
                                                   <span class="timeLine-point"></span>
                                                   <span class="timeLine-date">2022-05-15</span>
                                                   <p>CBC College started learning Microsoft Azure Cloud</p>
                                               </li>
                                               <li>
                                                   <span class="timeLine-point"></span>
                                                   <span class="timeLine-date">2022-02-05</span>
                                                   <p>Started CBC Software Developer Course: description of courses</p>
                                               </li>
                                               <li>
                                                   <span class="timeLine-point"></span>
                                                   <span class="timeLine-date">2021-10-31</span>
                                                   <p>Graduated From TriosCollege: EnterpriseWeb & Mobile App 2Yrs Course</p>
                                               </li>
                                               <li>
                                                   <span class="timeLine-point"></span>
                                                   <span class="timeLine-date">2021-06-12</span>
                                                   <p>4Month Internship BreezeMaxWeb: description on learning and what learned.</p>
                                               </li>
                                               <li>
                                                   <span class="timeLine-point"></span>
                                                   <span class="timeLine-date">2020-01-13</span>
                                                   <p>Began-Developer-Journey: Trios College Frst Semester Yr1</p>
                                               </li>
                                               </ul>
                                            </div>
                                         </div>
                                       </div>
                                    </div>
                                  
                                </div>
                                            

                        
                            <div class="education-content3">
                            <div class="education-content3-inner">
                             <div class="cardEducation ">
                             <div class="cardEducation-front"><h2>View Resume</h2><p>Click Here</p></div>
                             <div class="cardEducation-back">
                             <h2><p>click To Close</p></h2>
                             <div class="modal2">
                             <div class="cardEducation-backModal-header">
                               <div class="modal-title"><h2>Resume</h2></div>
                               </div>
                                 <div class="cardEducation-backModal-body1">
                                 <img src="/" alt="/Resume"/>
                                </div>
                             </div>
                             </div>
                             </div>

                             
                             <div class="cardEducation">
                             <div class="cardEducation-front"><h2>CBC Grades</h2><p>Click Here</p></div>
                             <div class="cardEducation-back">
                             <h2><p>click To Close</p></h2>
                             <div class="modal3">
                             <div class="cardEducation-backModal-header">
                               <div class="modal-title"><h2>Resume</h2></div>
                               </div>
                                 <div class="cardEducation-backModal-body2">
                                 <img src="/" alt="CBCGrades"/>
                                </div>
                             </div>
                             </div>
                             </div>

                             <div class="cardEducation">
                             <div class="cardEducation-front"><h2>Trios Grades</h2><p>Click Here</p></div>
                             <div class="cardEducation-back">
                             <h2><p>click To Close</p></h2>
                             <div class="modal4">
                             <div class="cardEducation-backModal-header">
                               <div class="modal-title"><h2>Resume</h2></div>
                               </div>
                                 <div class="cardEducation-backModal-body3">
                                 <img src="/" alt="TriosGrades"/>
                                </div>
                             </div>
                             </div>
                             </div>

                             <div class="cardEducation">
                             <div class="cardEducation-front"><h2>InternShip</h2><p>Click Here</p></div>
                             <div class="cardEducation-back">
                             <h2><p>click To Close</p></h2>
                             <div class="modal5">                          
                                 <div class="cardEducation-backModal-body4">
                                 <img src="images/education/breezeMaxWebCert.png" alt="Internship"/>
                               </div>
                             </div>
                          </div>
                           <div>
                             </div>

                             </div>
                          </div>
                        </div>

                 </div>
             </div>
         </div>
        `
    },
  
}

export default Education;