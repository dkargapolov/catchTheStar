let julia = document.getElementById('minion');
let polina = document.getElementById('star');
      //polina.style.display = 'none'
      let counter = document.getElementById('counter');
      let num = 0;
      

      let time = 800;
      
      function starfall(speed){
        console.log('starfall activated')
        distance = Math.random();
        let prop = polina;
        prop.style.top = '10px';
        prop.style.left = distance * 1000 + 'px';
        let starid = setInterval(() => falling(prop, starid), speed)
      }

      function falling(elem, name){
        console.log('falling activated')
        let elemCoords = elem.getBoundingClientRect();
        elem.style.top = elemCoords.y + 100 + 'px';

        /*
        counter.innerHTML = `Polina: ${elemCoords.bottom},${elemCoords.x},${elemCoords.right} 
                            <br>Julia: ${juliaCoords.y},${juliaCoords.x},${juliaCoords.right} `
        */
        

        elemCoords = elem.getBoundingClientRect();
        if (elemCoords.bottom >= juliaCoords.y && 
            elemCoords.x >= juliaCoords.x - 100 &&
            elemCoords.right <= juliaCoords.right){
            elem.style.top = '0px';
            num++;
            counter.innerHTML = num;
            clearInterval(name);
            time = (time <= 400) ? time : time - 50;
            starfall(time)
        }
        if (elemCoords.bottom >= document.documentElement.clientHeight){
          elem.style.top = '0px';
          clearInterval(name);
          starfall(time)
        }


        //elem.style.top = elemCoords.y + 100 + 'px';
      }

      /*
      alert(document.documentElement.clientWidth)
      polina.onclick = function () {
        let id = setInterval(() => falling(this), 1000)
      };
      */

      let juliaCoords = julia.getBoundingClientRect();
      julia.style.left = document.documentElement.clientWidth / 2 - julia.offsetWidth / 2 + 'px';
      
      julia.style.top = document.documentElement.clientHeight - julia.offsetHeight + 'px';

      //polina.style.left = julia.style.left;

      let juliaSide = 'left';
      juliaCoords = julia.getBoundingClientRect();
      //let fallid = setInterval(() => starfall(), 5000)
      starfall()
      window.addEventListener('keydown', function (e) {

        /*
        if (e.keyCode == 38) {
          juliaCoords = julia.getBoundingClientRect();
          julia.style.top = juliaCoords.y - 100 + 'px';
        }
        if (e.keyCode == 40) {
          juliaCoords = julia.getBoundingClientRect();
          julia.style.top = juliaCoords.y + 100 + 'px';
          //alert('goDown');
        }
        */
        if (e.keyCode == 37) {
          if (juliaSide == 'right'){
            julia.style.transform = 'scaleX(1)';
            juliaSide = 'left';
          }
          juliaCoords = julia.getBoundingClientRect();
          if (juliaCoords.x <= 0) {
            return;
          } else {
            julia.style.left = juliaCoords.x - 100 + 'px';
          }
          
        }
        if (e.keyCode == 39) {
          if (juliaSide == 'left'){
            julia.style.transform = 'scaleX(-1)';
            juliaSide = 'right';
          }
          juliaCoords = julia.getBoundingClientRect();
          //julia.style.transform = 'scaleX(-1)';
          if (juliaCoords.right >= document.documentElement.clientWidth) {
            return;
          } else {
          julia.style.left = juliaCoords.x + 100 + 'px';
          }
        }
      });