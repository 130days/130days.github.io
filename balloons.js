const balloonsTemplate = document.createElement("template");
balloonsTemplate.innerHTML = `
  <div style="z-index: 100;">
          <div class="balloon" style="display: none"></div>
          <div dclass="balloon">
            <div class="inside-balloon"></div>
          </div>
          <div class="balloon" style="display: none"></div>
          <div class="balloon">
            <div class="inside-balloon" style="background-color: rgba(0, 128, 0, 0.5)"></div>
          </div>
          <div class="balloon" style="display: none"></div>
          <div class="balloon">
            <div class="inside-balloon" style="background-color: rgba(192, 1, 5, 0.5)"></div>
          </div>
          <div class="balloon" style="display: none"></div>
          <div class="balloon" style="display: none"></div>
        </div>
`;

const root = document.getElementById("root");
const birthdayCard = document.getElementById("birthday-card");
birthdayCard.addEventListener("click", () => {
    console.log("In hereee");
    const balloonsElem = balloonsTemplate.content.cloneNode(true);
    root.insertBefore(balloonsElem, birthdayCard);
});