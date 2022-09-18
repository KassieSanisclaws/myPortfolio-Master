const DesignUX = {  
  after_render_designUxCard_modal:()=>{
     const designUxModal = document.getElementById(["modal-content"]);
     const designUxModalOpen = document.querySelector([".designUx-cardBtn"]);
     const designUxModalClose = document.querySelectorAll([".modal-btnClose"]);
     const designUxModal2 = document.getElementById(["modal-content2"]);
     const designUxModalOpen2 = document.getElementById(["modal-contentBtn2"]);
     const designUxModal3 = document.getElementById(["modal-content3"]);
     const designUxModalOpen3 = document.getElementById(["modal-contentBtn3"]);
     const designUxModal4 = document.getElementById(["modal-content4"]);
     const designUxModalOpen4 = document.getElementById(["modal-contentBtn4"]);
 
     designUxModalOpen.addEventListener("click", ()=>{
      designUxModal.classList.add("showModal");
     });

     designUxModalOpen2.addEventListener("click", ()=>{
      designUxModal2.classList.add("showModal");
     });
    
     designUxModalOpen3.addEventListener("click", ()=>{
      designUxModal3.classList.add("showModal");
     });

     designUxModalOpen4.addEventListener("click", ()=>{
      designUxModal4.classList.add("showModal");
     })

    Array.from(designUxModalClose).forEach(function(modalBtnClose){
     modalBtnClose.addEventListener("click", ()=>{
       designUxModal.classList.remove("showModal");
       designUxModal2.classList.remove("showModal");
       designUxModal3.classList.remove("showModal");
       designUxModal4.classList.remove("showModal");
      })
    })
////////////////////////////////////////////////////////////////////////////
     const designUxModalImg = document.getElementById(["designUx-modalContent-img"]);
     const modalOne_ImageOne = document.getElementById(["modal-card1"]);
     const modalTwo_ImageTwo = document.getElementById(["modal-card2"]);
     const modalThree_ImageThree = document.getElementById(["modal-card3"]);
     const modalFour_ImageFour = document.getElementById(["modal-card4"]);

     modalOne_ImageOne.addEventListener("click", ()=>{
      designUxModalImg.style.backgroundColor = "red";
     })

     modalTwo_ImageTwo.addEventListener("click", ()=>{
      designUxModalImg.style.backgroundColor = "green";
     })
     
     modalThree_ImageThree.addEventListener("click", ()=>{
      designUxModalImg.style.backgroundColor = "crimson";
     })

     modalFour_ImageFour.addEventListener("click", ()=>{
      designUxModalImg.style.backgroundColor = "blue";
     })
/////////////////////////////////////////////////////////////////////////////////    
     const designUxModalImg2 = document.getElementById(["designUx-modalContent2-img"]);
     const modal2_ImageOne = document.getElementById(["modal2-card1"]);
     const modal2_ImageTwo = document.getElementById(["modal2-card2"]);
     const modal2_ImageThree = document.getElementById(["modal2-card3"]);
     const modal2_ImageFour = document.getElementById(["modal2-card4"]);

     modal2_ImageOne.addEventListener("click", ()=>{
      designUxModalImg2.style.backgroundColor = "red";
     })

     modal2_ImageTwo.addEventListener("click", ()=>{
      designUxModalImg2.style.backgroundColor = "green";
     })
     
     modal2_ImageThree.addEventListener("click", ()=>{
      designUxModalImg2.style.backgroundColor = "crimson";
     })

     modal2_ImageFour.addEventListener("click", ()=>{
      designUxModalImg2.style.backgroundColor = "blue";
     })
/////////////////////////////////////////////////////////////////
     const designUxModalImg3 = document.getElementById(["designUx-modalContent3-img"]);
     const modal3_ImageOne = document.getElementById(["modal3-card1"]);
     const modal3_ImageTwo = document.getElementById(["modal3-card2"]);
     const modal3_ImageThree = document.getElementById(["modal3-card3"]);
     const modal3_ImageFour = document.getElementById(["modal3-card4"]);

     modal3_ImageOne.addEventListener("click", ()=>{
      designUxModalImg3.style.backgroundColor = "red";
     })

     modal3_ImageTwo.addEventListener("click", ()=>{
      designUxModalImg3.style.backgroundColor = "green";
     })
     
     modal3_ImageThree.addEventListener("click", ()=>{
      designUxModalImg3.style.backgroundColor = "crimson";
     })

     modal3_ImageFour.addEventListener("click", ()=>{
      designUxModalImg3.style.backgroundColor = "blue";
     })
////////////////////////////////////////////////////////////////
 const designUxModalImg4 = document.getElementById(["designUx-modalContent4-img"]);
     const modal4_ImageOne = document.getElementById(["modal4-card1"]);
     const modal4_ImageTwo = document.getElementById(["modal4-card2"]);
     const modal4_ImageThree = document.getElementById(["modal4-card3"]);
     const modal4_ImageFour = document.getElementById(["modal4-card4"]);

     modal4_ImageOne.addEventListener("click", ()=>{
      designUxModalImg4.style.backgroundColor = "red";
     })

     modal4_ImageTwo.addEventListener("click", ()=>{
      designUxModalImg4.style.backgroundColor = "green";
     })
     
     modal4_ImageThree.addEventListener("click", ()=>{
      designUxModalImg4.style.backgroundColor = "crimson";
     })

     modal4_ImageFour.addEventListener("click", ()=>{
      designUxModalImg4.style.backgroundColor = "blue";
     })
  },
  render:() => {
        return `<div class="designUx-body">
                   <div class="designUx-sectionContainer">
                      <div class="designUx-content">
                      <div class="designUx-header"><div class="appGlass"><h1>Design Ux</h1></div></div>
                      <div class="designUx-innerContent-cards">
             
                        <div class="designUx-card">
                            <div class="designUx-cardImage">
                              <a href="/">
                                 <img src="/" alt="/"/>  
                              </a></div>
                            <div class="designUx-cardTitle">designUxCard.name</div>
                            <div class="designUx-cardText"><p>designUxCard.text</p></div>
                            <div class="designUx-cardBtn"><button id="modal-contentBtn">button</button></div>
                        </div>  

                        <div class="designUx-card">
                            <div class="designUx-cardImage">
                              <a href="/">
                                 <img src="/" alt="/"/>  
                              </a></div>
                             <div class="designUx-cardTitle">designUxCard.name</div>
                             <div class="designUx-cardText"><p>designUxCard.text</p></div>
                             <div class="designUx-cardBtn"><button id="modal-contentBtn2">button</button></div>
                        </div>  

                        <div class="designUx-card">
                            <div class="designUx-cardImage">
                              <a href="/">
                                 <img src="/" alt="/"/>  
                              </a></div>
                             <div class="designUx-cardTitle">designUxCard.name</div>
                             <div class="designUx-cardText"><p>designUxCard.text</p></div>
                             <div class="designUx-cardBtn"><button id="modal-contentBtn3">button</button></div>
                        </div>  

                        <div class="designUx-card">
                            <div class="designUx-cardImage">
                              <a href="/">
                                 <img src="/" alt="/"/>  
                              </a></div>
                             <div class="designUx-cardTitle">designUxCard.name</div>
                             <div class="designUx-cardText"><p>designUxCard.text</p></div>
                             <div class="designUx-cardBtn"><button id="modal-contentBtn4">button</button></div>
                        </div>  
          
                   </div>

                                <div class="designUx-modalContainer" id="modal-content">
                                 <div class="showModal">
                                   <div class="designUx-modal">
                                       <div class="designUx-modalHeader"><h2>This Is The Modal Header</h2>
                                          <button class="modal-btnClose" id="modal-contentCloseBtn">&times;</button></div>
                                       <div class="designUx-modalContent">
                                       <div class="designUx-modalContent-img" id="designUx-modalContent-img">img section here</div>
                                       <div class="designUx-modalContent-imgSelection">
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal-card1">image card1</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal-card2">image card2</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal-card3">image card3</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal-card4">image card4</div>
                                       </div>
                                       <div class="designUx-modalContent-description">
                                        <div class="designUx-modalContent-descriptioInner">Inner description</div>
                                       </div>
                                       </div>  
                                   </div>
                                   </div>
                                </div>

                                <div class="designUx-modalContainer" id="modal-content2">
                                   <div class="designUx-modal">
                                       <div class="designUx-modalHeader"><h2>This Is The Modal Header2</h2>
                                          <button class="modal-btnClose" id="modal-contentCloseBtn">&times;</button></div>
                                       <div class="designUx-modalContent">
                                       <div class="designUx-modalContent-img" id="designUx-modalContent2-img">img section here</div>
                                       <div class="designUx-modalContent-imgSelection">
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal2-card1">image card1</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal2-card2">image card2</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal2-card3">image card3</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal2-card4">image card4</div>
                                       </div>
                                       <div class="designUx-modalContent-description">
                                       <div class="designUx-modalContent-descriptioInner">Inner description</div>
                                       </div>
                                       </div>  
                                   </div>
                                </div>

                                <div class="designUx-modalContainer" id="modal-content3">
                                   <div class="designUx-modal">
                                       <div class="designUx-modalHeader"><h2>This Is The Modal Header3</h2>
                                          <button class="modal-btnClose" id="modal-contentCloseBtn">&times;</button></div>
                                       <div class="designUx-modalContent">
                                       <div class="designUx-modalContent-img" id="designUx-modalContent3-img">img section here</div>
                                       <div class="designUx-modalContent-imgSelection">
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal3-card1">image card1</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal3-card2">image card2</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal3-card3">image card3</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal3-card4">image card4</div>
                                       </div>
                                       <div class="designUx-modalContent-description">
                                       <div class="designUx-modalContent-descriptioInner">Inner description</div>
                                       </div>
                                       </div>  
                                   </div>
                                </div>

                                <div class="designUx-modalContainer" id="modal-content4">
                                   <div class="designUx-modal">
                                       <div class="designUx-modalHeader"><h2>This Is The Modal Header4</h2>
                                          <button class="modal-btnClose" id="modal-contentCloseBtn">&times;</button></div>
                                       <div class="designUx-modalContent">
                                       <div class="designUx-modalContent-img" id="designUx-modalContent4-img">img section here</div>
                                       <div class="designUx-modalContent-imgSelection">
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal4-card1">image card1</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal4-card2">image card2</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal4-card3">image card3</div>
                                       <div class="designUx-modalContent-imgSelectionCard" id="modal4-card4">image card4</div>
                                       </div>
                                       <div class="designUx-modalContent-description">
                                       <div class="designUx-modalContent-descriptioInner">Inner description</div>
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

export default DesignUX;