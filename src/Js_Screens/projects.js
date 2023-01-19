const Projects = {
 after_render_modalsImgChange:()=>{
   const projectModalImg = document.getElementById(["project-modalContent-img"]);
   const projectModal_ImgOne = document.getElementById(["projectModal-card1"]);
   const projectModal_ImgTwo = document.getElementById(["projectModal-card2"]);
   const projectModal_ImgThree = document.getElementById(["projectModal-card3"]);
   const projectModal_ImgFour = document.getElementById(["projectModal-card4"]);
   const projectModalImg2 = document.getElementById(["project-modalContent2-img"]);
   const projectModal2_ImgOne = document.getElementById(["projectModal2-card1"]);
   const projectModal2_ImgTwo = document.getElementById(["projectModal2-card2"]);
   const projectModal2_ImgThree = document.getElementById(["projectModal2-card3"]);
   const projectModal2_ImgFour = document.getElementById(["projectModal2-card4"]);
   const projectModalImg3 = document.getElementById(["project-modalContent3-img"]);
   const projectModal3_ImgOne = document.getElementById(["projectModal3-card1"]);
   const projectModal3_ImgTwo = document.getElementById(["projectModal3-card2"]);
   const projectModal3_ImgThree = document.getElementById(["projectModal3-card3"]);
   const projectModal3_ImgFour = document.getElementById(["projectModal3-card4"]);
   const projectModalImg4 = document.getElementById(["project-modalContent4-img"]);
   const projectModal4_ImgOne = document.getElementById(["projectModal4-card1"]);
   const projectModal4_ImgTwo = document.getElementById(["projectModal4-card2"]);
   const projectModal4_ImgThree = document.getElementById(["projectModal4-card3"]);
   const projectModal4_ImgFour = document.getElementById(["projectModal4-card4"]);
   const projectModalImg5 = document.getElementById(["project-modalContent5-img"]);
   const projectModal5_ImgOne = document.getElementById(["projectModal5-card1"]);
   const projectModal5_ImgTwo = document.getElementById(["projectModal5-card2"]);
   const projectModal5_ImgThree = document.getElementById(["projectModal5-card3"]);
   const projectModal5_ImgFour = document.getElementById(["projectModal5-card4"]);
   const projectModalImg6 = document.getElementById(["project-modalContent6-img"]);
   const projectModal6_ImgOne = document.getElementById(["projectModal6-card1"]);
   const projectModal6_ImgTwo = document.getElementById(["projectModal6-card2"]);
   const projectModal6_ImgThree = document.getElementById(["projectModal6-card3"]);
   const projectModal6_ImgFour = document.getElementById(["projectModal6-card4"]);
   const projectModalImg7 = document.getElementById(["project-modalContent7-img"]);
   const projectModal7_ImgOne = document.getElementById(["projectModal7-card1"]);
   const projectModal7_ImgTwo = document.getElementById(["projectModal7-card2"]);
   const projectModal7_ImgThree = document.getElementById(["projectModal7-card3"]);
   const projectModal7_ImgFour = document.getElementById(["projectModal7-card4"]);
///////////////////////////////////////////////////////////////////////////////////
projectModal_ImgOne.addEventListener("click", ()=>{
   projectModalImg.style.backgroundColor = "crimson";
});

projectModal_ImgTwo.addEventListener("click", ()=>{
   projectModalImg.style.backgroundColor = "yellowgreen";
});

projectModal_ImgThree.addEventListener("click", ()=>{
   projectModalImg.style.backgroundColor = "yellow";
});

projectModal_ImgFour.addEventListener("click", ()=>{
   projectModalImg.style.backgroundColor = "teal";
});

projectModal2_ImgOne.addEventListener("click", ()=>{
   projectModalImg2.style.backgroundColor = "royalBlue";
});

projectModal2_ImgTwo.addEventListener("click", ()=>{
   projectModalImg2.style.backgroundColor = "palegreen";
});

projectModal2_ImgThree.addEventListener("click", ()=>{
   projectModalImg2.style.backgroundColor = "black";
});

projectModal2_ImgFour.addEventListener("click", ()=>{
   projectModalImg2.style.backgroundColor = "orange";
});

projectModal3_ImgOne.addEventListener("click", ()=>{
   projectModalImg3.style.backgroundColor = "red";
});

projectModal3_ImgTwo.addEventListener("click", ()=>{
   projectModalImg3.style.backgroundColor = "pink";
});

projectModal3_ImgThree.addEventListener("click", ()=>{
   projectModalImg3.style.backgroundColor = "purple";
});

projectModal3_ImgFour.addEventListener("click", ()=>{
   projectModalImg3.style.backgroundColor = "brown";
});

projectModal4_ImgOne.addEventListener("click", ()=>{
   projectModalImg4.style.backgroundColor = "red";
});

projectModal4_ImgTwo.addEventListener("click", ()=>{
   projectModalImg4.style.backgroundColor = "pink";
});

projectModal4_ImgThree.addEventListener("click", ()=>{
   projectModalImg4.style.backgroundColor = "purple";
});

projectModal4_ImgFour.addEventListener("click", ()=>{
   projectModalImg4.style.backgroundColor = "brown";
});

projectModal5_ImgOne.addEventListener("click", ()=>{
   projectModalImg5.style.backgroundColor = "red";
});

projectModal5_ImgTwo.addEventListener("click", ()=>{
   projectModalImg5.style.backgroundColor = "pink";
});

projectModal5_ImgThree.addEventListener("click", ()=>{
   projectModalImg5.style.backgroundColor = "purple";
});

projectModal5_ImgFour.addEventListener("click", ()=>{
   projectModalImg5.style.backgroundColor = "brown";
});

projectModal6_ImgOne.addEventListener("click", ()=>{
   projectModalImg6.style.backgroundColor = "red";
});

projectModal6_ImgTwo.addEventListener("click", ()=>{
   projectModalImg6.style.backgroundColor = "pink";
});

projectModal6_ImgThree.addEventListener("click", ()=>{
   projectModalImg6.style.backgroundColor = "purple";
});

projectModal6_ImgFour.addEventListener("click", ()=>{
   projectModalImg6.style.backgroundColor = "cyan";
});

projectModal7_ImgOne.addEventListener("click", ()=>{
   projectModalImg7.style.backgroundColor = "red";
});

projectModal7_ImgTwo.addEventListener("click", ()=>{
   projectModalImg7.style.backgroundColor = "pink";
});

projectModal7_ImgThree.addEventListener("click", ()=>{
   projectModalImg7.style.backgroundColor = "purple";
});

projectModal7_ImgFour.addEventListener("click", ()=>{
   projectModalImg7.style.backgroundColor = "gold";
});

 },
 after_render_projectsModal:()=>{ 
   const projectsModalClose = document.querySelectorAll([".modal-btnClose"]);
   const projectModalOpen = document.getElementById(["projects-modalBtn"]);
   const projectsModal = document.getElementById(["projects-modalContent"]);
   const projectModalOpen2 = document.getElementById(["modalBtn2"]);
   const projectModal2 = document.getElementById(["modalContent2"]);
   const projectModalOpen3 = document.getElementById(["modalBtn3"]);
   const projectModal3 = document.getElementById(["modalContent3"]);
   const projectModalOpen4 = document.getElementById(["modalBtn4"]);
   const projectModal4 = document.getElementById(["modalContent4"]);
   const projectModalOpen5 = document.getElementById(["modalBtn5"]);
   const projectModal5 = document.getElementById(["modalContent5"]);
   const projectModalOpen6 = document.getElementById(["modalBtn6"]);
   const projectModal6 = document.getElementById(["modalContent6"]);
   const projectModalOpen7 = document.getElementById(["modalBtn7"]);
   const projectModal7 = document.getElementById(["modalContent7"]);
////////////////////////////////////////////////////////////////////////////

   projectModalOpen.addEventListener("click", ()=>{
      projectsModal.classList.add("showProjectModal");
      
   });
 
   projectModalOpen2.addEventListener("click", ()=>{
      projectModal2.classList.add("showProjectModal");
   });

   projectModalOpen3.addEventListener("click", ()=>{
      projectModal3.classList.add("showProjectModal");
   });

   projectModalOpen4.addEventListener("click", ()=>{
      projectModal4.classList.add("showProjectModal");
   });

   projectModalOpen5.addEventListener("click", ()=>{
      projectModal5.classList.add("showProjectModal");
   });

   projectModalOpen6.addEventListener("click", ()=>{
      projectModal6.classList.add("showProjectModal");
   });

   projectModalOpen7.addEventListener("click", ()=>{
      projectModal7.classList.add("showProjectModal");
   });
   
 Array.from(projectsModalClose).forEach(function(modalBtnClose){
      modalBtnClose.addEventListener("click", ()=>{
      projectsModal.classList.remove("showProjectModal");
      projectModal2.classList.remove("showProjectModal");
      projectModal3.classList.remove("showProjectModal");
      projectModal4.classList.remove("showProjectModal");
      projectModal5.classList.remove("showProjectModal");
      projectModal6.classList.remove("showProjectModal");
      projectModal7.classList.remove("showProjectModal");
    });
});

},
  render:()=>{
    return` 
       <div class="projects-body">
          <div class="projects-sectionContainer">
            <div class="projects-content">
                <div class="projects-header"><div class="appGlass"><h1>Projects</h1></div></div>

                <div class="projects-cardsContent">
                   <div class="projects-cardContent">
                      <div class="projects-cardContent-header"><h2>React Store-App</h2></div>
                      <div class="projects-cardContent-img">
                      <img src="/" alt="/"/>
                      </div>
                      <div class="projects-cardContent-btn"><button id="projects-modalBtn">button</button></div>  
                   </div>

                   <div class="projects-cardContent">
                      <div class="projects-cardContent-header"><h2>React Quiz-App</h2></div>
                      <div class="projects-cardContent-img">
                      <img src="/" alt="/"/>
                      </div>
                      <div class="projects-cardContent-btn"><button id="modalBtn2">button2</button></div>  
                   </div>

                   <div class="projects-cardContent">
                      <div class="projects-cardContent-header"><h2>MAUI Note-App</h2></div>
                      <div class="projects-cardContent-img">
                      <img src="/" alt="/"/>
                      </div>
                      <div class="projects-cardContent-btn"><button id="modalBtn3">button3</button></div>  
                   </div>

                   <div class="projects-cardContent">
                      <div class="projects-cardContent-header"><h2>V-JS-ECommerce</h2></div>
                      <div class="projects-cardContent-img">
                      <img src="/" alt="/"/>
                      </div>
                      <div class="projects-cardContent-btn"><button id="modalBtn4">button</button></div>  
                   </div> 

                   <div class="projects-cardContent">
                      <div class="projects-cardContent-header"><h2>Anime MVC-App</h2></div>
                      <div class="projects-cardContent-img">
                      <img src="/" alt="/"/>
                      </div>
                      <div class="projects-cardContent-btn"><button id="modalBtn5">button</button></div>  
                   </div>

                   <div class="projects-cardContent">
                      <div class="projects-cardContent-header"><h2>React ECommerce</h2></div>
                      <div class="projects-cardContent-img">
                      <img src="/" alt="/"/>
                      </div>
                      <div class="projects-cardContent-btn"><button id="modalBtn6">button</button></div>  
                   </div>

                   <div class="projects-cardContent">
                      <div class="projects-cardContent-header"><h2>V-Js Calculator-App</h2></div>
                      <div class="projects-cardContent-img">
                      <img src="/" alt="/"/>
                      </div>
                      <div class="projects-cardContent-btn"><button id="modalBtn7">button</button></div>  
                   </div>      
                </div>
               
      <div class="projects-modalContainer" id="projects-modalContent">
      <div class="showProjectModal">
      <div class="projects-modal">   
      <div class="project-modalHeader"><h2>Projects Modal 1</h2>
          <button class="modal-btnClose" id="projectModal-contentCloseBtn">&times;</button></div>
      <div class="project-modalContent">
         <div class="project-modalContent-img" id="project-modalContent-img">img section here</div>
      <div class="project-modalContent-imgSelection">
         <div class="project-modalContent-imgSelectionCard" id="projectModal-card1">image card1</div>
         <div class="project-modalContent-imgSelectionCard" id="projectModal-card2">image card2</div>
         <div class="project-modalContent-imgSelectionCard" id="projectModal-card3">image card3</div>
         <div class="project-modalContent-imgSelectionCard" id="projectModal-card4">image card4</div>
       </div>
      <div class="project-modalContent-description"><div class="project-modalContent-descriptionInner">Inner description</div></div>
        </div>
     </div>
   </div>                    
  </div>                     

  <div class="projects-modalContainer" id="modalContent2">
  <div class="showProjectModal">
  <div class="projects-modal">   
  <div class="project-modalHeader"><h2>Projects Modal 2</h2>
      <button class="modal-btnClose" id="projectModal-contentCloseBtn">&times;</button></div>
  <div class="project-modalContent">
     <div class="project-modalContent-img" id="project-modalContent2-img">img section here</div>
  <div class="project-modalContent-imgSelection">
     <div class="project-modalContent-imgSelectionCard" id="projectModal2-card1">image card1</div>
     <div class="project-modalContent-imgSelectionCard" id="projectModal2-card2">image card2</div>
     <div class="project-modalContent-imgSelectionCard" id="projectModal2-card3">image card3</div>
     <div class="project-modalContent-imgSelectionCard" id="projectModal2-card4">image card4</div>
   </div>
  <div class="project-modalContent-description"><div class="project-modalContent-descriptionInner">Inner description</div></div>
    </div>
 </div>
</div>                    
</div>      
             
<div class="projects-modalContainer" id="modalContent3">
<div class="showProjectModal">
<div class="projects-modal">   
<div class="project-modalHeader"><h2>Projects Modal 3</h2>
    <button class="modal-btnClose" id="projectModal-contentCloseBtn">&times;</button></div>
<div class="project-modalContent">
   <div class="project-modalContent-img" id="project-modalContent3-img">img section here</div>
<div class="project-modalContent-imgSelection">
   <div class="project-modalContent-imgSelectionCard" id="projectModal3-card1">image card1</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal3-card2">image card2</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal3-card3">image card3</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal3-card4">image card4</div>
 </div>
<div class="project-modalContent-description"><div class="project-modalContent-descriptionInner">Inner description</div></div>
  </div>
</div>
</div>                    
</div>   

<div class="projects-modalContainer" id="modalContent4">
<div class="showProjectModal">
<div class="projects-modal">   
<div class="project-modalHeader"><h2>Projects Modal 4</h2>
    <button class="modal-btnClose" id="projectModal-contentCloseBtn">&times;</button></div>
<div class="project-modalContent">
   <div class="project-modalContent-img" id="project-modalContent4-img">img section here</div>
<div class="project-modalContent-imgSelection">
   <div class="project-modalContent-imgSelectionCard" id="projectModal4-card1">image card1</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal4-card2">image card2</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal4-card3">image card3</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal4-card4">image card4</div>
 </div>
<div class="project-modalContent-description"><div class="project-modalContent-descriptionInner">Inner description</div></div>
  </div>
</div>
</div>                    
</div>    

<div class="projects-modalContainer" id="modalContent5">
<div class="showProjectModal">
<div class="projects-modal">   
<div class="project-modalHeader"><h2>Projects Modal 5</h2>
    <button class="modal-btnClose" id="projectModal-contentCloseBtn">&times;</button></div>
<div class="project-modalContent">
   <div class="project-modalContent-img" id="project-modalContent5-img">img section here</div>
<div class="project-modalContent-imgSelection">
   <div class="project-modalContent-imgSelectionCard" id="projectModal5-card1">image card1</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal5-card2">image card2</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal5-card3">image card3</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal5-card4">image card4</div>
 </div>
<div class="project-modalContent-description"><div class="project-modalContent-descriptionInner">Inner description</div></div>
  </div>
</div>
</div>                    
</div>    

<div class="projects-modalContainer" id="modalContent6">
<div class="showProjectModal">
<div class="projects-modal">   
<div class="project-modalHeader"><h2>Projects Modal 6</h2>
    <button class="modal-btnClose" id="projectModal-contentCloseBtn">&times;</button></div>
<div class="project-modalContent">
   <div class="project-modalContent-img" id="project-modalContent6-img">img section here</div>
<div class="project-modalContent-imgSelection">
   <div class="project-modalContent-imgSelectionCard" id="projectModal6-card1">image card1</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal6-card2">image card2</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal6-card3">image card3</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal6-card4">image card4</div>
 </div>
<div class="project-modalContent-description"><div class="project-modalContent-descriptionInner">Inner description</div></div>
  </div>
</div>
</div>                    
</div> 

<div class="projects-modalContainer" id="modalContent7">
<div class="showProjectModal">
<div class="projects-modal">   
<div class="project-modalHeader"><h2>Projects Modal 7</h2>
    <button class="modal-btnClose" id="projectModal-contentCloseBtn">&times;</button></div>
<div class="project-modalContent">
   <div class="project-modalContent-img" id="project-modalContent7-img">img section here</div>
<div class="project-modalContent-imgSelection">
   <div class="project-modalContent-imgSelectionCard" id="projectModal7-card1">image card1</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal7-card2">image card2</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal7-card3">image card3</div>
   <div class="project-modalContent-imgSelectionCard" id="projectModal7-card4">image card4</div>
 </div>
<div class="project-modalContent-description"><div class="project-modalContent-descriptionInner">Inner description</div></div>
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
export default Projects; 