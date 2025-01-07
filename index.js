let cardHovered = false;
const pageTwoTemplate = document.createElement("template");
pageTwoTemplate.innerHTML =
    `<div 
      id="page-two"
      style=
      "height: 100vh; 
      display: flex; 
      flex-direction:column; 
      justify-content: center">
        <div style="display: flex; justify-content: center; margin-bottom: 15px;">
            <div id="second-page-typing" class="second-page-typing">
            Oh, and in case you're not her...
            </div>
        </div>
        <div
        id="password-input-container" 
        style=
        "display: none; 
        justify-content: center; 
        align-items: center; 
        height: 50px;">
            <div style="padding-right: 8px">
                <input id="password-box" type="password" placeholder="Enter password">
            </div>
            <div class="container">
                <span id="lock" class="lock"></span>
            </div>
        </div>
        <div id="sorry" style="display: flex; justify-content: center; margin-top: 11px;">
        </div>
    </div>`;
document.body.append(pageTwoTemplate);

const cardPageTemplate = document.createElement("template");
cardPageTemplate.innerHTML = `<div id="root" style="height: 100vh; width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center">
        <div id="birthday-card" class="card">
          <div class="back"></div>
          <div id="birthday-card-front" class="front">
            <div class="imgset" style="height: 450px">
                 <img id="burday-card-cover" src="burday-card-cover.jpg" style="max-height: 100%; max-width: 100%" />
            </div>
          </div>
          <div class="text-container">
            <p id="head">Dear Inara,</p>
            <p>I hope you're cherishing every moment of intern life and enjoying your time in Chicago. 
              You probably don't know this but, it's actually Batman's hometown. In any case,
              there is frankly so much I want to say right now but I think I'll save 
              most of it for just a little longer. I know we still don't know each other super well, 
              but from the little interaction we've had I'm quickly realizing that I've
              got quite the gem on my hands. You are smart, talented, cheerful, funny (minus the "ny"), 
              thoughtful, and more. I pray that Allah Swt blesses you with a fire day not just today but 
               every day to come. Oh, and maybe I shouldn't say this but I'm also kinda hoping that 
               birthday girl comes home sooner than later. <br/></p>    
               <p>Happy 21st <span style="font-style: normal">🥳😍🙈🎈🎉</span></p>
             <p style="text-align: right; margin-top: 13px;">Your fiancée,&nbsp; <br/> Aabid Roshan</p>
          </div>
        </div>
    </div>
`;

function addPageTwo() {
    const pageTwo = pageTwoTemplate.content.cloneNode(true);
    console.log(pageTwo);
    document.body.append(pageTwo);
    const passwordBox = document.getElementById("password-box");
    const lock = document.getElementById("lock");
    console.log(lock);
    lock.addEventListener("click", () => {
        passwordBox.style.animation = 'none';
        passwordBox.offsetHeight; /* trigger reflow */
        passwordBox.style.animation = null;
        passwordBox.style["animation-name"] = "";
        passwordBox.style["animation-duration"] = "";
        passwordBox.style["animation-iteration-count"] = "";
        const enteredPassword = passwordBox.value;
        if (enteredPassword == "animalplanet") {
          lock.classList.add('unlocked');
          passwordBox.style["border-color"] = "#32de84";
          setTimeout(() => {
            const pageToRemove = document.getElementById("page-two");
            pageToRemove.remove();
            const finalPage = cardPageTemplate.content.cloneNode(true);
            document.body.append(finalPage);
            setTimeout(() => {
                document.body.style["background-image"] = "linear-gradient(to right top, #1f0537, #380c60, #55108c, #7413bb, #9612eb)";
            }, 5);
            const start = () => {
                      setTimeout(function() {
                          confetti.start()
                      }, 300); // 300 is time that after 1 second start the confetti ( 1000 = 1 sec)
                    };
                    const stop = () => {
                      setTimeout(function() {
                          confetti.stop()
                      }, 4300); // 4300 is time that after 5 second stop the confetti ( 5000 = 5 sec)
                    };
                    start();
                    stop();
            document.getElementById("birthday-card").addEventListener('mouseover', () => {
              if (!cardHovered) {
                cardHovered = true;
                setTimeout(() => {
                  const start = () => {
                    setTimeout(function() {
                        confetti.start()
                    }, 300); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
                  };
                  const stop = () => {
                    setTimeout(function() {
                        confetti.stop()
                    }, 4300); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
                  };
                  start();
                  stop();
                }, 5);
              }
            });
            document.getElementById("birthday-card").addEventListener('mouseleave', () => {
              cardHovered = false;
            });
            window.addEventListener('touchstart', function(e){   
                if (document.getElementById("birthday-card").classList.contains("card-hovered")) {
                  document.getElementById("birthday-card").classList.remove("card-hovered");
                } else {
                  document.getElementById("birthday-card").classList.add("card-hovered");
                  setTimeout(() => {
                    const start = () => {
                      setTimeout(function() {
                          confetti.start()
                      }, 300); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
                    };
                    const stop = () => {
                      setTimeout(function() {
                          confetti.stop()
                      }, 4300); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
                    };
                    start();
                    stop();
                  }, 5);
                }
              });
            /*window.addEventListener('touchstart', function(e){   
                if (document.getElementById('burday-card-cover').contains(e.target)){
                  // Clicked in box
                  document.getElementById("birthday-card").classList.add("card-hovered");
                  setTimeout(() => {
                    const start = () => {
                      setTimeout(function() {
                          confetti.start()
                      }, 300); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
                    };
                    const stop = () => {
                      setTimeout(function() {
                          confetti.stop()
                      }, 4300); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
                    };
                    start();
                    stop();
                }, 5);
                } else{
                  // Clicked outside the box
                  document.getElementById("birthday-card").classList.remove("card-hovered");
                }
              });*/
            /*setTimeout(() => {
                document.body.style["background-image"] = "linear-gradient(to right top, #1f0537, #380c60, #55108c, #7413bb, #9612eb)";
                const start = () => {
                  setTimeout(function() {
                      confetti.start()
                  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
                };
                const stop = () => {
                  setTimeout(function() {
                      confetti.stop()
                  }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
                };
                start();
                stop();
            }, 5);*/
          }, 300);
        } else {
          passwordBox.style["animation-name"] = "shake, glow-red";
          passwordBox.style["animation-duration"] = "0.7s, 0.35s";
          passwordBox.style["animation-iteration-count"] = "1, 2";
        }
    });
}

window.setTimeout(() => {
  const pageOne = document.getElementById("page-one");
  pageOne.remove();
  addPageTwo();
}, 5000);

window.setTimeout(() => {
    firstPageTyping = document.getElementById("typing-demo");
    firstPageTyping.style.border = "none";
    const butDiv = document.getElementById("but");
    butDiv.innerHTML = `<div id="typing-demo-more" class="typing-demo-more">
            but...
          </div>`;
}, 3500);

window.setTimeout(() => {
    secondPageMoreTyping = document.getElementById("second-page-more-typing");
    secondPageMoreTyping.style.border = "none";
}, 10500);

window.setTimeout(() => {
    const passwordInputContainer = document.getElementById("password-input-container");
    passwordInputContainer.style.display = "flex";
}, 9000);

window.setTimeout(() => {
    secondPageTyping = document.getElementById("second-page-typing");
    secondPageTyping.style.border = "none";
    const sorryDiv = document.getElementById("sorry");
    sorryDiv.innerHTML = `<div id="second-page-more-typing" class="second-page-more-typing">
        Sorry.
        </div>`;
}, 9500);

window.setTimeout(() => {
    secondPageMoreTyping = document.getElementById("second-page-more-typing");
    secondPageMoreTyping.style.border = "none";
}, 10500);
