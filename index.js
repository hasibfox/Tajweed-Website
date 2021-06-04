import {LettersData} from './LettersData.js';
import {LettersFatha, fathaExamples} from './LettersFatha.js';
import { LettersKesra, kesraExamples } from './LettersKesra.js';
import { LettersDamma, dammaExamples } from './LettersDamma.js';


document.querySelector("#one").innerHTML = 
`
            <div class="letters-container">
                <div class="letters">
                    ${LettersData.map(function(letter) { 
                        return `
                        <div id="letter-box" >
                            <h2>${letter.letter}</h2>
                            <h3>${letter.transliteration}</h3>
                        </div>
                        `
                    }).join('')}
                    
                </div>
            </div>
            

            `


document.querySelector("#two").innerHTML = 
`
           
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary pineapple" data-toggle="modal" data-target="#naw">
            Examples
            </button>
              
              <!-- Modal -->
              <div class="modal fade" id="naw" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Fatha Examples</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="carousel-container">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                  ${fathaExamples.map(function(ex) { 
                                    return `
                                    <li data-target="#carouselExampleIndicators" data-slide-to="${ex.to}"></li>

                                    `
                                }).join('')}
                                </ol>
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                       <h1>
                                        Examples for Fatha</h1> 
                                </div>
                                ${fathaExamples.map(function(ex) { 
                                    return `
                                    <div class="carousel-item">
                                        <h1>${ex.example}</h1> 
                                    </div>
                                    `
                                }).join('')}
                                  
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                                </a>
                              </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            

              <div class="letters-container">
              <div class="letters">
                  ${LettersFatha.map(function(letter) { 
                      return `
                      <div id="letter-box" on>
                          <h2>${letter.letter}</h2>
                          <h3>${letter.transliteration}</h3>
                      </div>
                      `
                  }).join('')}
                  
              </div>
          </div>
          
            

`
            
document.querySelector("#three").innerHTML = 
`
            
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary pineapple" data-toggle="modal" data-target="#exampleModalCenter">
Examples
</button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Fatha Examples</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="carousel-container">
                <div id="kesrex" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#kesrex" data-slide-to="0" class="active"></li>
                      ${kesraExamples.map(function(ex) { 
                        return `
                        <li data-target="#kesrex" data-slide-to="${ex.to}"></li>

                        `
                    }).join('')}
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                           <h1>
                            Examples for Kesra</h1> 
                    </div>
                    ${kesraExamples.map(function(ex) { 
                        return `
                        <div class="carousel-item">
                            <h1>${ex.example}</h1> 
                        </div>
                        `
                    }).join('')}
                      
                    </div>
                    <a class="carousel-control-prev" href="#aight" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#aight" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
              <div class="letters-container">
              <div class="letters">
                  ${LettersKesra.map(function(letter) { 
                      return `
                      <div id="letter-box" on>
                          <h2>${letter.letter}</h2>
                          <h3>${letter.transliteration}</h3>
                      </div>
                      `
                  }).join('')}
                  
              </div>
          </div>
`
document.querySelector("#four").innerHTML = 
`


<!-- Button trigger modal -->
            <button type="button" class="btn btn-primary pineapple" data-toggle="modal" data-target="#dammaa">
            Examples
            </button>
              
              <!-- Modal -->
              <div class="modal fade" id="dammaa" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Damma Examples</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="carousel-container">
                            <div id="damex" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                  <li data-target="#damex" data-slide-to="0" class="active"></li>
                                  ${dammaExamples.map(function(ex) { 
                                    return `
                                    <li data-target="#damex" data-slide-to="${ex.to}"></li>

                                    `
                                }).join('')}
                                </ol>
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                       <h1>
                                        Examples for Fatha</h1> 
                                </div>
                                ${dammaExamples.map(function(ex) { 
                                    return `
                                    <div class="carousel-item">
                                        <h1>${ex.example}</h1> 
                                    </div>
                                    `
                                }).join('')}
                                  
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                                </a>
                              </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="letters-container">
    <div class="letters">
        ${LettersDamma.map(function(letter) { 
            return `
            <div id="letter-box" on>
                <h2>${letter.letter}</h2>
                <h3>${letter.transliteration}</h3>
            </div>
            `
        }).join('')}
        
    </div>
</div>
`

const tabs = document.querySelector(".sidenav");
const contents = document.querySelectorAll(".content");
tabs.onclick = e => {
    const id = e.target.dataset.id;
    console.log(id)
    if (id) {
        contents.forEach(content => {
          content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
}