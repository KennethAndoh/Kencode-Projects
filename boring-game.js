let playG = document.querySelector('#playG');
let hero = document.querySelector('#hero');

let hleft = document.querySelector('#hleft');
let hright = document.querySelector('#hright');

let hup = document.querySelector('#hup');
let hdown = document.querySelector('#hdown');

let enm = document.querySelector('#enemy');

   hleft.addEventListener('click, mleft');
   hright.addEventListener('click, mright');
   
   hup.addEventListener('click, mup');
   hdown.addEventListener('click, mdown');
   let yPos = 0;
   let xPos = 0;
   let ray = [];
   let ray2 = [];

      function mright() {
          xPos += 15;
          hero.style.marginLeft = xPos + "px";
          ray.push(xPos);

      }

      function mleft() {
          xPos -= 15;
          hero.style.marginLeft = yPos + "px";
          ray.pop();

      }

      function mup() {
          yPos -= 25;
          hero.style.marginTop = yPos + "px";
          ray2.push(yPos);

      }

      function mdown() {
          yPos += 15;
          hero.style.marginTop = yPos + "px";
          ray2.pop();

      }

      let t = setInterval(a, 100);
      let zPos = 0;
      let aryW = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

        function a() {
            zPos += 2;
            enm.style.marginTop = zPos = "px";
            
        }
      